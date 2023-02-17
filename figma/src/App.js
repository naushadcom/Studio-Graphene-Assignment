import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
