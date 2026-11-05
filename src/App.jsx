import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Art from './components/Art.jsx';
import Blog from './components/Blog.jsx';
import News from './components/News.jsx';
import UsefulStuff from './components/UsefulStuff.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Post from './components/Post.jsx';

// Two kinds of page:
//   /                 → the one-page site (sections below)
//   /blog/<slug>      → a single blog post (text in src/posts/<slug>.md)
// netlify.toml sends /blog/* addresses to this app so the post page can load.
const postMatch = window.location.pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/);

export default function App() {
  if (postMatch) {
    return (
      <>
        <Header />
        <Post slug={postMatch[1]} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Art />
        <Blog />
        <News />
        <UsefulStuff />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
