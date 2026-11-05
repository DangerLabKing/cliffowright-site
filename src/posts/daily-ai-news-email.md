# How I Built a Daily AI News Email with FreshRSS, n8n and a Local LLM

*By Cliff Wright*

I knew my morning news digest needed work when it told me about a train disruption a day late. The automation had run, the email looked fine, and the alert was useless by the time I saw it. I wanted a briefing I could skim in the morning, with current rail alerts, a good mix of national and regional news, and enough tech and AI coverage to keep up with what I actually follow.

So I taught my home lab to put one together. FreshRSS collects the stories, n8n decides what makes the cut, and a local language model running through Ollama writes the short summaries. The result lands in my inbox as one email with links back to the original sources.

![Workflow diagram showing FreshRSS feeding n8n, Ollama summarizing selected stories, and n8n checking for nonempty summaries and sending the email before updating read status.](assets/digest-workflow.png)

*The morning workflow, redrawn for publication.*

## FreshRSS collects the stories

I run FreshRSS on my Synology NAS and n8n and Ollama on my Unraid server. FreshRSS is my feed reader and my unread queue. I choose the publications and alert feeds I want to follow there. Each morning, n8n pulls a batch of unread items through the FreshRSS API.

The original workflow could look at up to 250 candidates to fill a 20-story email. After reading a few editions, I set a target of 30 stories to make room for more tech and AI coverage. Looking at more stories than I plan to send gives the workflow a chance to find a good mix even when one feed publishes heavily overnight.

## n8n decides what’s worth a spot

I do the ranking in an n8n Code node before I call the model. The workflow scores articles by category, importance, and recency, then applies limits by category and source. The first pass aims for a balanced mix. If there’s room left, later passes relax some limits while keeping a ceiling on how many slots one source or transit category can take.

The first few emails showed me where those rules needed to get more specific. For transportation, I wanted recent rail alerts for the services I follow. The change that addresses the stale alert is the recency weighting. An item published in the past three hours gets a 20-point boost, one published three to six hours ago gets 17, and anything older than 48 hours gets zero recency points. Older alerts can still qualify on their other scores. The schedule sets the delivery time, while the transit filters help surface relevant alerts.

I also adjusted the mix to give national and regional U.S. stories more room. I still like having international sources in the feed reader. A major story from the BBC can earn a spot, while a hyperlocal story from the UK usually has less bearing on my morning. I can make that distinction in the ranking rules and leave Ollama to concentrate on writing.

Here’s the recency function from my Code node. The workflow adds this score to the category and importance scores before applying the selection limits.

```js
function getRecencyScore(article) {
  if (!article.published) return 0;
  const publishedMs = article.published * 1000;
  const ageHours = (Date.now() - publishedMs) / (1000 * 60 * 60);
  if (ageHours <= 3) return 20;
  if (ageHours <= 6) return 17;
  if (ageHours <= 12) return 14;
  if (ageHours <= 24) return 10;
  if (ageHours <= 48) return 5;
  return 0;
}
```

## Ollama turns selected items into short summaries

For each selected story, n8n cleans up the text from the feed and sends it to Ollama’s local generation endpoint. The workflow uses Llama 3.2 3B. n8n keeps the title, source, date, and original URL separately, so those details come straight from the feed.

Here’s the request body from my Ollama node. The whole body is one n8n expression, so the prompt is a JavaScript template string and `${...}` inserts the source, headline, and cleaned feed text. Setting `stream` to `false` makes Ollama return the full summary in one response.

```js
{{
{
  model: "llama3.2:3b",
  stream: false,
  prompt: `
Summarize the article below in 1–2 concise sentences.

Rules:
- Do not say "Here is a summary."
- Do not say "This article discusses."
- Do not mention that you are an AI.
- Do not repeat the headline unless necessary for clarity.
- Focus only on the most important facts or takeaway.
- Keep the tone neutral and factual.
- Avoid filler, commentary, and unnecessary background.
- Keep the summary under 40 words.
- Do not invent facts that are not in the article.
- Do not include the source name in the summary text.

Source: ${$json.source}
Headline: ${$json.title}

Article:
${$json.content}
`
}
}}
```

The validation step trims Ollama’s response and checks that there’s text left. A failed request or blank response drops out of the digest. The 40-word target is part of the prompt, and the validation step only checks for nonempty text.

My Unraid box has 16 GB of RAM and an NVIDIA RTX 2060 with 6 GB of VRAM. Ollama is configured to use the GPU. One recorded 20-story run (before I raised the target to 30) took about 23 seconds end to end, including the feed fetch, summaries, email send, and FreshRSS updates.

Some feeds provide a useful excerpt. Others lead to a video or a paywalled page and supply barely more than the headline. That was one of the first gaps I noticed in the emails. A retry can help when Ollama times out, but the model still needs enough source text to work with. A thin feed entry is a reason to keep the original link handy and be careful about how much confidence I put in a summary.

![Illustrative morning email with a fictional transit item, a tech item, and example run counts.](assets/example-digest.png)

*An illustrative digest with fictional entries and example counts.*

## Sending the email and updating FreshRSS

n8n builds an HTML email with the headlines, short summaries, and links to the originals. The Send Email node sends it over SMTP using my Gmail address as the sender. The footer shows how many items the run evaluated, selected, and successfully summarized. If the email feels short, those counts help me tell whether the ranking step picked fewer stories or the summarizer dropped some along the way.

One detail I cared about was when an article gets marked read. The workflow carries each article’s FreshRSS ID through the summary step. After the email send step succeeds, it uses the IDs from the successful summaries to update FreshRSS. Items that were skipped or failed summarization stay unread. That way a bad model response doesn’t quietly clear a story from my queue.

I also connected a separate n8n error workflow for failed runs. That gives me somewhere to start when the digest doesn’t show up. For individual summary failures, I can look at the run counts and inspect the affected node without losing the rest of the morning email.

## What I’d build first if I started over

I’d start with one good feed, a handful of items, and one email. I’d check that each summary still points to the right source and that a failed item stays unread. Then I’d tune the ranking against a few mornings of real results. It’s much easier to spot an overly broad filter or a stale alert in an email I actually read than in a list of node outputs.

The part I use every day is simple. I open one email, scan for service disruptions, and follow the stories I want to read in full. The local model saves me some reading. The rules I added after those first few runs are what make the briefing feel like mine.

---

*Tools used* · [FreshRSS](https://freshrss.org/) · [n8n Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) · [n8n error handling](https://docs.n8n.io/flow-logic/error-handling/) · [Ollama generation API](https://docs.ollama.com/api/generate)
