import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {

  return (
    <>
      <div className="min-h-screen bg-[#fdf6e3] font-mono antialiased">
        <Nav />
        <main className="pt-20" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
