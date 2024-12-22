import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { SocialLinks } from './components/SocialLinks';
import './index.css';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navigation />
      <main>
        <section id="accueil">
          <Hero />
        </section>
        <section id="galerie">
          <Gallery />
        </section>
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;