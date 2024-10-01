import ComplexNavbar from "./components/Navbar";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import { DarkThemeToggle } from "flowbite-react";
import Gallery from "./pages/Gallery"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <ComplexNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
      {/* <DarkThemeToggle/> */}
    </div>
  );
}

export default App;
