import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error/Index';
import Home from './pages/Home/Index';
import Header from './components/Header/Index';
import Apropos from './pages/Apropos/Index';
import Footer from './components/Footer/Footer';
import FicheLogement from './pages/Fiche_logmement/FicheLog';
import "./style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Router>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logement/:id" element={<FicheLogement />} />
                <Route path="*" element={<Error />} />
            </Routes>

            <Footer />

        </Router>
    </React.StrictMode>
)

