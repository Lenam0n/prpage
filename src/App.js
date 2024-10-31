import React from "react";
import "./App.css";
import Header from "./container/Header";
import Home from "./page/Home";
import Privacy from "./page/Privacy";
import Impressum from "./page/Impressum";
import TermsOfService from "./page/Terms";
import { GlobalProvider } from "./utils/globalContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Importiere Navigate
import Contact from "./page/Contact";
import EsportTimeline from "./page/EsportHistory";
import HistoryTimeline from "./page/History";
import { ApiProvider } from "./utils/apiProvider";
import Footer from "./page/Sections/Footer";

function App() {
  return (
    <GlobalProvider>
      <ApiProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/timeline" element={<HistoryTimeline />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/esport" element={<EsportTimeline />} />

            {/* Redirect bei nicht definierten Pfaden */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Router>
      </ApiProvider>
    </GlobalProvider>
  );
}

export default App;
