import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Art from './components/Art.jsx';
import Blog from './components/Blog.jsx';
import UsefulStuff from './components/UsefulStuff.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Art />
        <Blog />
        <UsefulStuff />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
