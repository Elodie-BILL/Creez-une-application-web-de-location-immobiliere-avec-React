import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Header from './components/Header/Index';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <switch>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/error404" element={<Error />} />
                    <Route element={<Error />} />
                </Routes>
            </switch>
        </Router>
    </React.StrictMode>
)

