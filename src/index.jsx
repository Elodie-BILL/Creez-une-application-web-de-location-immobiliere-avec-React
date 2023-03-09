import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Apropos from './pages/Apropos/Apropos';
import Footer from './components/Footer/Footer';
import FicheLogement from './pages/Fiche_logmement/FicheLog';
import "./Style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Router>
            <main>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error />} />
                </Routes>

                <Footer />
            </main>

        </Router>
    </React.StrictMode>
)

