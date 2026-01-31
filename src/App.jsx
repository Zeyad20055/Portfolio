import Home from "./componens/home/Home";
import Nav from "./componens/nav/Nav";
import About from "./componens/about/About";
import Contact from "./componens/contact/Contact";
import Footer from "./componens/footer/Footer";
import Projects from "./componens/projects/Projects";
import Skils from "./componens/skils/Skils";
import Services from "./componens/services/Services"

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skils />
      <Services/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
