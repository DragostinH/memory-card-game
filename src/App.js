import { useState, useEffect } from 'react';
import './App.css';
import Card from './component/Card';
import uniqid from 'uniqid';
import getArrayOfRandomNumbers from './scripts/getArrayOfRandomNumbers';
import GameOverScreen from './component/GameOverScreen';
import shuffleArray from './scripts/shuffleArray';

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
    fetch(`https://rickandmortyapi.com/api/character/${getArrayOfRandomNumbers(5 - clickedCards.length)}`)
      .then(response => response.json())
      .then(data => {
        setCards(data);
      });
  }, [clickedCards]);


  const handleCardClick = (card) => {
    shuffleArray(cards);
    let isCardClicked = clickedCards.find(clickedCard => {
      if (clickedCard.id === card.id) {
        return true;
      } else {
        return false;
      }
    });

    if (isCardClicked) {
      setGameSettings({
        ...gameSettings,
        isGameOver: true,
      });
    } else {
      setClickedCards([...clickedCards, card]);
      setCards(cards.filter(element => element.id !== card.id));
      setGameSettings({
        ...gameSettings,
        score: gameSettings.score + 1,
      });
    }
  }

  const handlePlayAgainClick = () => {
    setGameSettings({
      ...gameSettings,
      isGameOver: false,
      score: 0,
      level: 1,
    });
    setClickedCards([]);

  }

  return (
    <div className="App bg-primary-800 gap-8">
      {gameSettings.isGameOver ? (
        <GameOverScreen
          gameSettings={gameSettings}
          handlePlayAgainClick={handlePlayAgainClick}
        />
      ) : (null)}
      <div className="score-level-container flex gap-8 items-center justify-center text-secondary-500">
        <p>Current score:  <span className='font-bold'>{gameSettings.score}</span></p>
        <p>Current level:  <span className='font-bold'>{gameSettings.level}</span></p>
        <p>High score:  <span className='font-bold'>{gameSettings.highScore}</span></p>
      </div>
      <div className="card-container grid grid-cols-4 gap-8">
        {cards.length > 0 ?
          cards.map((card) => {
            return (
              <Card
                handleCardClick={(e) => handleCardClick(card)}
                key={uniqid()} {...card} />)
          }) : <Card handleCardClick={(e) => handleCardClick(cards)} image={cards.image} />}
        {clickedCards.map((card) => {
          return (
            <Card
              handleCardClick={(e) => handleCardClick(card)}
              key={uniqid()} {...card} />)
        })}
      </div>

    </div>
  );
}

