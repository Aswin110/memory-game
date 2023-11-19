import { useState } from 'react'
import Header from './assets/header.jsx'
import ScoreBoard from './assets/scoreBoard.jsx'
import Cards from './assets/cards.jsx'

function App() {
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);

  function addCurrentScore () {
    setCurrentScore(currentScore => currentScore + 1);
    if ((currentScore + 1) > bestScore){
      setBestScore(currentScore + 1)
    }
  }

  return (
    <>
      <Header/>
      <ScoreBoard
        currentScore = {currentScore}
        bestScore = {bestScore}
        
      />
      <Cards
        addCurrentScore = {addCurrentScore}
      />
    </>
  )
}

export default App
