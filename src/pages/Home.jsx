import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style/Home.css';
import LOGO from '../assets/LOGO.jpg';
import section1 from '../assets/section1.jpg'
import data from '../data/data.json'
// Récupération des donnée du fichier JSON

const DataPic = (
  <img className="pink_logo_kasa"
    src="{LOGO}"
    alt="représentation du logo de kasa"
  />
);

function DataHome() {

  return (
    <div className="Home">
      <header className="Home-header">
        <div className='Home-header_logo'>
          {DataPic}
        </div>
        <div className='Home-header_nav'>
          <p id='underline'> Accueil </p>
          <p> A propos </p>
        </div>

      </header>
      <div className='banner-section1'>
        <img src={section1} alt=" paysage avec écriture suivant par-dessus: chez vous, partout et ailleurs" />
      </div>

    </div>


  );
}
export default DataHome;