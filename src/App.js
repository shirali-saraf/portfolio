import './App.css';
import Main from './components/Main';
// import './components/Home.css';
import Navbar from './components/Navbar1';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <br/>
    <Main />
    <br/>
    <AboutMe />
    <br/>
    <Skills />
    <br/>
    <Projects />
    <br/>
    <Contact />
    <br/>
    <Footer />
    </>
  );
}

export default App;
