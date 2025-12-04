import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebsiteDevelopment from "./pages/WebsiteDevelopment/WebsiteDevelopment";
import Ecommerce from "./pages/Ecommerce/Ecommerce";
import ITServices from "./pages/ITServices/ITServices";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/grow-your-ecommerce" element={<Ecommerce />} />
        <Route path="/services/it-services" element={<ITServices />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
