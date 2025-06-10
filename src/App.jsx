import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-blue-950">
        <Contact />
        <Home />
      </main>
    </div>
  );
}

export default App;
