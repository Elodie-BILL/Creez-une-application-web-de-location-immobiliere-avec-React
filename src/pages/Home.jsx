import LOGO from '../assets/LOGO.jpg';
import '../style/Home.css';
// Récupération des donnée du fichier JSON

import { useEffect } from "react";
function DataHome() {
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => { getData(); }, []);
  return (
    <div className="Home">
      <header className="Home-header">
        <div>
          <img src={LOGO} alt="représentation du logo de kasa" className = "pink_logo_kasa" />
        </div>
        <p> Accueil </p>
        <p> A propos </p>
      </header>
    </div>
  );
}
export default DataHome;