
// Récupération des donnée du fichier JSON

const getData=()=>{
  fetch('data.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    })
    .catch (error, res) = () => res.json({error}) 
}
useEffect(()=>{ getData()},[])

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <div>
        <img src="" alt="" />
      </div>
     <p> Accueil </p>
     <p> A propos </p>
      </header>
    </div>
  );
}



export default Home;
