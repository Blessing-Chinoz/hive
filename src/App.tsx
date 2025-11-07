// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/Theme_Context";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import NotFound from "./pages/Error";
import ServicesPage from "./pages/Services";
import GalleryPage from "./pages/Gallery";
import PricingPage from "./pages/Pricing";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
