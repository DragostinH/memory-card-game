import { useState, useEffect } from 'react';
import './App.css';
import Card from './component/Card';
import uniqid from 'uniqid';
import getArrayOfRandomNumbers from './scripts/getArrayOfRandomNumbers';

export default function App() {
  // Find images for the cards
  // Create a list of cards
  // Game should have multiple levels
  // Get card images from an API

  // https://rickandmortyapi.com/api/character/
  // Every level increase the number of cards by 1
  // Include the already selected cards in the list of cards


  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameSettings, setGameSettings] = useState({
    level: 1,
    score: 0,
    highScore: 0,
    isGameOver: false,
  });


  useEffect(() => {
    // fetch(`https://rickandmortyapi.com/api/character/${getArrayOfRandomNumbers(4 + gameSettings.level)}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setCards(data);
    //   });
    fetch(`https://rickandmortyapi.com/api/character/4,5,6,7`)
      .then(response => response.json())
      .then(data => {
        setCards(data);
      });


  }, [gameSettings.level]);

  const handleCardClick = (card) => {
  
    if (clickedCards.includes(card)) {
      setClickedCards([]);
      setGameSettings({
        ...gameSettings,
        level: 1,
        score: 0,
        isGameOver: true,
      });
    }
    else {
      setClickedCards([...clickedCards, card]);
      setGameSettings({
        ...gameSettings,
        level: gameSettings.level + 1,
      });
    }
  }

  return (
    <div className="App bg-primary-800 p-12">
      <h1 className="text-center text-white">Rick and Morty Memory Game</h1>
      <div className="score-level-container">
        <p>Current score: {gameSettings.score}</p>
        <p>Current level: {gameSettings.level}</p>
        <p>High score: {gameSettings.highScore}</p>
      </div>
      <div className="card-container grid grid-cols-5 gap-8">
        {cards.map((card) => {
          return (
            <Card
              handleCardClick={(e) => handleCardClick(card)}
              key={uniqid()} {...card} />)
        }
        )}
      </div>
    </div>
  );
}

