import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactMe from "./components/Contact-me";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-blue-950 ">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <ContactMe />
        <Contact />
      </main>
      <div className="text-white text-center mt-9">copyright 2025</div>
    </div>
  );
}

export default App;
