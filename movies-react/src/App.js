import React from "react";
import { MoviesProvider } from "./Context"; // Importuojame kontekstą
import AppContent from "./components/AppContent/AppContent";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/page";


function App() {
    return (
        <MoviesProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<AppContent />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </Router>
        </MoviesProvider>
    );
}

export default App;


