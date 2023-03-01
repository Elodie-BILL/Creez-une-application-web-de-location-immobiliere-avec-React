import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error/Index';
import Home from './pages/home/Index';
import Header from './components/Header/Index';
import Apropos from './pages/Apropos/Index';
import Footer from './components/Footer/Footer';
import FicheLogement from './pages/Fiche_logmement/FicheLog';
import "./style.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

//switch ne fontionne plus?? lg 16

root.render(
    <React.StrictMode>
        <Router>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/error404" element={<Error />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/:id" element={<FicheLogement />} />
                <Route element={<Error />} />
            </Routes>

            <Footer />

        </Router>
    </React.StrictMode>
)

