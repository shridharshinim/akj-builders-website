import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import ProjectsGallery from './pages/projects-gallery';
import ConsultancyServices from './pages/consultancy-services';
import ContactHub from './pages/contact-hub';
import VisualGallery from './pages/visual-gallery';
import AboutExcellence from './pages/about-excellence';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutExcellence />} />
        <Route path="/projects-gallery" element={<ProjectsGallery />} />
        <Route path="/consultancy-services" element={<ConsultancyServices />} />
        <Route path="/contact-hub" element={<ContactHub />} />
        <Route path="/visual-gallery" element={<VisualGallery />} />
        <Route path="/about-excellence" element={<AboutExcellence />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
