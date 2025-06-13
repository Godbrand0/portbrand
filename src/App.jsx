import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactMe from "./components/Contact-me";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-blue-950">
        <Contact />
        <Home />
        <About />
        <Projects />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;
