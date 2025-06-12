import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div className="min-h-screen bg-[#fdf6e3] font-mono antialiased">
        <Nav />
        <main className="pt-20" >
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
