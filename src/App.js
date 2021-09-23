import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Particles from 'react-particles-js';
import Navbar from'./components/Navbar';
import Header from'./components/Header';
import About from'./components/About';
import Skills from'./components/Skills';
import Portfolio from'./components/Portfolio';
import Contact from'./components/Contact';
import Footer from'./components/Footer';

function App() {
  return (
    <>
      {/* <Particles /> */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
