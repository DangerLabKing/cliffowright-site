import { useState } from 'react';
import { services, contactTopics } from '../data/content.js';

// Contact form uses Netlify Forms (free, no server).
// - index.html has a hidden copy of this form so Netlify detects it at deploy time.
//   Field names there must match the name= attributes here.
// - Submissions show up in Netlify → your site → Forms. Turn on email
//   notifications there (Forms → Form notifications).
// - "bot-field" is a honeypot: people never see it, spam bots fill it in.
// - It only really submits on the live Netlify site. On `npm run dev` you'll
//   see the error message; that's expected.

const empty = { name: '', email: '', topic: contactTopics[0], message: '', 'bot-field': '' };

const encode = (data) =>
  Object.keys(data).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&');

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <p className="kicker" aria-hidden="true">~/cliff/contact</p>
        <h2 className="section-title">Work with me</h2>
        <p className="section-lead">
          Consulting, commissions, collaborations, or a good conversation about technology.
          I reply within 48 hours.
        </p>

        <div className="contact-grid">
          <dl className="services">
            {services.map((s) => (
              <div key={s.title}>
                <dt>{s.title}</dt>
                <dd>{s.text}</dd>
              </div>
            ))}
          </dl>

          <form className="contact-form" name="contact" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p className="visually-hidden">
              <label>
                Don’t fill this out: <input name="bot-field" value={form['bot-field']} onChange={update} tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <label>
              Name
              <input name="name" value={form.name} onChange={update} required autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
            </label>
            <label>
              What’s this about?
              <select name="topic" value={form.topic} onChange={update}>
                {contactTopics.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={update} required />
            </label>

            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <div aria-live="polite">
              {status === 'sent' && <p className="form-ok">Message sent. I’ll get back to you within 48 hours.</p>}
              {status === 'error' && (
                <p className="form-err">The message didn’t send. Check your connection and try again in a moment.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
