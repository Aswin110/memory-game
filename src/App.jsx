import { useEffect, useState } from 'react'
import Header from './assets/header.jsx'
import ScoreBoard from './assets/scoreBoard.jsx'
import Cards from './assets/cards.jsx'
import fetchPokeMons from './assets/pokemon.jsx'

function App() {
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [pokemon, setPokemon] = useState([])
  let [clicked, setClicked] = useState([])

  function gamePlay (e) {
    //win
    if (clicked.length === 11 ) {
      alert('you have won!!!!')
      setClicked([])
      setCurrentScore(0)
      setBestScore(clicked.length + 1)
    }//fail
    else if (clicked.includes(`${e.target.alt}`)) {
      alert('failed, best of luck for the next time')
      setClicked([])
      setCurrentScore(0)
    }//clicked new pokemon
    else {
      setClicked([...clicked,`${e.target.alt}`])
      setCurrentScore(currentScore => currentScore + 1);
      if ((currentScore + 1) > bestScore){
        setBestScore(currentScore+1)
      }
    }
    setPokemon(shuffleArray)
  }

  useEffect(()=>{
    const pokemonIdsToFetch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let fetchedPokeMons = fetchPokeMons(pokemonIdsToFetch)
    fetchedPokeMons.then(result=> setPokemon(result))
  },[])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <>
      <Header/>
      <ScoreBoard
        currentScore = {currentScore}
        bestScore = {bestScore}
        
      />
      <Cards
        gamePlay = {gamePlay}
        pokemon = {pokemon}
      />
    </>
  )
}

export default App
