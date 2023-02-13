import '../style/Home.css'
import LOGO  from '../assets/LOGO.jpg';
import error from '../assets/404.png'

function Error404(props){
    return (
        <div className="Home">
          <header className="Home-header">
                <div className='Home-header_logo'>
                    <img src={LOGO} alt="représentation du logo de kasa" className = "pink_logo_kasa" />
                </div>
                <div className='Home-header_nav'>
                    <p id='underline'> Accueil </p>
                    <p> A propos </p>
                </div>
          </header>
          <div className='error-pic'>
            <img src= {error} alt=" error 404 " />
            <p> Oups! La page que vous demandez n'existe pas.</p>
            <a href="./Homes.jsx">
                <p>Retourner sur le page d'accueil</p>
            </a>
          </div>
        </div>
    )
}