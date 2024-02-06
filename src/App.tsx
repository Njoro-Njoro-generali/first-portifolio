import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CallAction from "./components/CallAction";

function App() {
  return (
    <>
      <div className="all-page">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <CallAction />
      </div>
    </>
  );
}

export default App;
