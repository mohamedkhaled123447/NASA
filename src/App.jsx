import ComplexNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Discoveries from "./pages/Discoveries";
import Resources from "./pages/Resources";
import Test from "./pages/Test";
function App() {
  return (
    <div>
      <ComplexNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/discoveries" element={<Discoveries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
