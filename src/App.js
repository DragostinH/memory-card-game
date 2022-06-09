import { useState, useEffect } from 'react';
import './App.css';
import Card from './component/Card';
import uniqid from 'uniqid';
import getArrayOfRandomNumbers from './scripts/getArrayOfRandomNumbers';
import GameOverScreen from './component/GameOverScreen';
import shuffleArray from './scripts/shuffleArray';
import LevelOne from './component/LevelOne';
import LevelTwo from './component/LevelTwo';
import PassedLevelScreen from './component/PassedLevelScreen';
import LevelThree from './component/LevelThree';
import LevelFour from './component/LevelFour';

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
  });




  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${getArrayOfRandomNumbers(200)}`)
      .then(response => response.json())
      .then(data => {
        setCards(shuffleArray(data));
      });
  }, []);

  useEffect(() => {
    if (gameSettings.level === 5) {
      setGameSettings({
        ...gameSettings,
        passedStage: true,
      });
      setClickedCards([]);
    }
  }, [clickedCards.length]);


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
    });
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

  if (gameSettings.stage === 1) {
    currentLevel = <LevelOne
      cards={cards}
      handleCardClick={handleCardClick}
      gameSettings={gameSettings}
      clickedCards={clickedCards}
    />
  } else if (gameSettings.stage === 2) {
    currentLevel = <LevelTwo
      cards={cards}
      handleCardClick={handleCardClick}
      gameSettings={gameSettings}
      clickedCards={clickedCards}
    />
  } else if (gameSettings.stage === 3) {
    currentLevel = <LevelThree
      cards={cards}
      handleCardClick={handleCardClick}
      gameSettings={gameSettings}
      clickedCards={clickedCards}
    />
  } else if (gameSettings.stage === 4) {
    currentLevel = <LevelFour
      cards={cards}
      handleCardClick={handleCardClick}
      gameSettings={gameSettings}
      clickedCards={clickedCards}
    />
  }



  return (
    <div className="App bg-primary-800 gap-8">
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

      < section className='levels-section p-8'>

        {currentLevel}

      </section>

    </div >
  );
}

