import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


// components
import InputForm from './components/InputForm.jsx'
import PuzzleWord from './components/PuzzleWord.jsx'
import UsedLetters from './components/UsedLetters.jsx'
import Score from './components/Score.jsx'
// data
import Words from './data/words.json'


function App() {
  const [puzzleWord, setPuzzleWord] = useState()
  const [usedLetters, setUsedLetters] = useState([])
  const [solution, setSolution] = useState(' ')
  const [count, setCount] = useState(6)

  useEffect(() => {
    const randomWord = async () => {
      try {
        const API_URL = 'https://random-word-api.herokuapp.com/word'
        const newWord = await axios.get(API_URL)
        const word = newWord.data[0]
        setPuzzleWord(word)
        setSolution(word.replace(/[A-Za-z]/g, '_'))
      } catch (error) {
        console.error(error.message)
      }
    }
    randomWord();
  }, [])

  function handleInputData() {
    let userInput = document.getElementById('userInput').value
    let letters = /[A-Za-z]/g

    if (userInput && letters.test(userInput)) {
      // update used letters
      if (usedLetters.includes(userInput)) {
        alert(`You already guessed "${userInput}"`)
      } else if (usedLetters.length == 0) {
        setUsedLetters([userInput])
      } else {
        let list = [...usedLetters, userInput]
        setUsedLetters(list)
      }

      // good guess - letter in puzzle
      if (puzzleWord.split('').includes(userInput)) {

        // get the indexes of the correct letters
        let myIndex = []
        puzzleWord.split('').map((letter, index) => {
          if (letter == userInput) {
            myIndex.push(index)
          }
        })

        // create new solution string with correct letters included
        let solutionList = solution.split('')
        myIndex.map((val) => {
          if (userInput == puzzleWord[val]) solutionList[val] = userInput
        })
        setSolution(solutionList.join(''))

      // bad guess - letter not in puzzle
      } else {
       setCount(newCount => count - 1)
      }
    }

    // reset input to blank
    document.getElementById('userInput').value = ''
  }

  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="display-1 text-primary"><b>
          Hangman!
        </b></h1>
        <hr className="my-3"/>
        <PuzzleWord solution={solution}/>
        <InputForm handleInputData={handleInputData}/>
        <Score count={count} solution={solution} puzzleWord={puzzleWord}/>
        <hr className="my-3"/>
        <UsedLetters usedLetters={usedLetters}/>
      </div>
    </div>
  )
}

export default App
