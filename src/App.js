import { useState, useEffect } from 'react';
import './App.css';
import getArrayOfRandomNumbers from './scripts/getArrayOfRandomNumbers';
import GameOverScreen from './component/GameOverScreen';
import shuffleArray from './scripts/shuffleArray';
import PassedLevelScreen from './component/PassedLevelScreen';
import Level from './component/Level';
import LoadingScreen from './component/LoadingScreen';
import WelcomeScreen from './component/WelcomeScreen';
import createStorageStructure from './scripts/createStorageStructure';
import updateStorage from './scripts/updateStorage.js';
import { generateCards } from './scripts/generateCards';

export default function App() {

  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameSettings, setGameSettings] = useState({
    stage: 1,
    level: 1,
    score: 0,
    highScore: [1, 1],
    isGameOver: false,
    passedStage: false,
    boardSize: 4,
  });
  const [isLoading, setIsLoading] = useState(false);

  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {

    fetch(`https://rickandmortyapi.com/api/character/${getArrayOfRandomNumbers(gameSettings.boardSize)}`)
      .then(res => res.json())
      .then(data => {
        setCards(data);
        setIsLoading(false);
      }
      )
      .catch(err => console.log(err));
  }, [gameSettings.boardSize, gameSettings.stage, firstTime, gameSettings.isGameOver]);

  useEffect(() => {
    if (clickedCards.length === gameSettings.boardSize) {
      setGameSettings({
        ...gameSettings,
        passedStage: true,
        boardSize: gameSettings.boardSize + 3,
      });
    }
  }, [clickedCards.length, gameSettings]);

  useEffect(() => {
    const { stage, level, highScore } = gameSettings;
    if (stage > highScore[0] || (stage === highScore[0] && level > highScore[1])) {
      setGameSettings({
        ...gameSettings,
        highScore: [stage, level],
      });

    }
  }, [gameSettings]);

  useEffect(() => {
    const checkStorage = localStorage.getItem('MemoryCardGame');
    if (checkStorage) {
      const storage = JSON.parse(checkStorage);
      setGameSettings(storage[0]);
      setCards(storage[1]);
      setClickedCards(storage[2]);
      setFirstTime(storage[3]);
    }
  }, []);



  const handleCardClick = (card) => {
    let isCardClicked = clickedCards.find(clickedCard => {
      return clickedCard.id === card.id ?
        clickedCard.isClicked = true : false;
    });

    if (isCardClicked) {
      setGameSettings({
        ...gameSettings,
        isGameOver: true,
      });
    } else {
      updateStorage({ gameSettings, cards, clickedCards, firstTime });
      setClickedCards([...clickedCards, card]);
      setCards(cards.filter(item => item.id !== card.id));
      setCards([...cards, clickedCards])
      setCards(shuffleArray(cards));
      setGameSettings({
        ...gameSettings,
        score: gameSettings.score + 1,
        level: gameSettings.level + 1,
      });
    };
  };

  const handlePlayAgainClick = () => {
    setGameSettings({
      ...gameSettings,
      isGameOver: false,
      score: 0,
      level: 1,
      stage: 1,
      boardSize: 4,
    });
    setClickedCards([]);
  };

  const handleNextLevelClick = () => {
    setClickedCards([]);
    setGameSettings({
      ...gameSettings,
      passedStage: false,
      stage: gameSettings.stage + 1,
      level: 1,
    });
  };

  const handleStart = () => {
    setFirstTime(false);
    createStorageStructure({ gameSettings, cards, clickedCards, firstTime });
  }




  return (
    <div className="App bg-primary-800 flex flex-col ">
      {firstTime ?
        <WelcomeScreen handleStart={handleStart} /> : null}

      {
        gameSettings.passedStage ?
          <PassedLevelScreen
            handleNextLevelClick={handleNextLevelClick}
            gameSettings={gameSettings}
          />
          :
          null
      }

      {
        gameSettings.isGameOver ?
          <GameOverScreen
            handlePlayAgainClick={handlePlayAgainClick}
            gameSettings={gameSettings}
          />
          :
          null
      }

      <section className='level-section p-4'>
        <Level
          cards={cards}
          handleCardClick={handleCardClick}
          gameSettings={gameSettings}
          clickedCards={clickedCards}
          isLoading={isLoading}
        />
      </section>

      {
        isLoading ?
          <div className="loader">
            {<LoadingScreen />}
          </div> :
          null
      }

    </div >
  );
}

