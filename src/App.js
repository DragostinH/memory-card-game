import { useState, useEffect } from 'react';
import './App.css';
import getArrayOfRandomNumbers from './scripts/getArrayOfRandomNumbers';
import GameOverScreen from './component/GameOverScreen';
import shuffleArray from './scripts/shuffleArray';
import LevelOne from './component/LevelOne';
import LevelTwo from './component/LevelTwo';
import PassedLevelScreen from './component/PassedLevelScreen';
import LevelThree from './component/LevelThree';
import LevelFour from './component/LevelFour';
import Level from './component/Level';

export default function App() {
  // Find images for the cards
  // Create a list of cards
  // Game should have multiple levels
  // Get card images from an API

  // https://rickandmortyapi.com/api/character/
  // Every level increase the number of cards by 1
  // Include the already selected cards in the list of cards

  let currentLevel;
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameSettings, setGameSettings] = useState({
    stage: 1,
    level: 1,
    score: 0,
    highScore: 0,
    isGameOver: false,
    passedStage: false,
    boardSize: 4,
  });




  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${getArrayOfRandomNumbers(200)}`)
      .then(response => response.json())
      .then(data => {
        setCards(shuffleArray(data));
      });
  }, []);

  useEffect(() => {
    if (clickedCards.length === gameSettings.boardSize) {
      setGameSettings({
        ...gameSettings,
        passedStage: true,
        boardSize: gameSettings.boardSize + 3,
      });
      setClickedCards([]);
    }
  }, [clickedCards.length, gameSettings]);


  const handleCardClick = (card) => {
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
    } else  {
      setClickedCards([...clickedCards, card]);
      setCards(cards.filter(item => item.id !== card.id));
      setCards(shuffleArray(cards));
      setGameSettings({
        ...gameSettings,
        score: gameSettings.score + 1,
        level: gameSettings.level + 1,
      });
      
    }
  }

  const handlePlayAgainClick = () => {
    setGameSettings({
      ...gameSettings,
      isGameOver: false,
      score: 0,
      level: 1,
      stage: 1,
      boardSize: 4,
    });
    setCards(shuffleArray(cards));
    setClickedCards([]);
  }

  const handleNextLevelClick = () => {
    shuffleArray(cards);
    shuffleArray(clickedCards);
    setGameSettings({
      ...gameSettings,
      passedStage: false,
      stage: gameSettings.stage + 1,
      level: 1,
    })
  }




  return (
    <div className="App bg-primary-800 flex flex-col ">
      {
        gameSettings.passedStage ?
          <PassedLevelScreen
            handleNextLevelClick={handleNextLevelClick}
            gameSettings={gameSettings}
          />
          :
          null
      }

      {gameSettings.isGameOver ?
        <GameOverScreen
          handlePlayAgainClick={handlePlayAgainClick}
          gameSettings={gameSettings}
        />
        :
        null}

      < section className='level-section p-4'>

        <Level
          cards={cards}
          handleCardClick={handleCardClick}
          gameSettings={gameSettings}
          clickedCards={clickedCards}
        />

      </section>

    </div >
  );
}

