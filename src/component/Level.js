import React from "react";
import Card from "./Card";
import uniqid from "uniqid";
import "../index.css";

export default function Level(props) {
    const { handleCardClick, gameSettings, cards, clickedCards } = props;

    return (
        <article className="level-container grid gap-2">
            <div className="score-level-container grid grid-cols-score text-secondary-500">
                <p className="text-center">Score:  <span className='font-bold'>{gameSettings.score}</span></p>
                <p className="text-center">Level: <span className='font-bold'>{gameSettings.stage}-{gameSettings.level}</span></p>
                <p className="text-center">High score:<span className='font-bold'>{gameSettings.highScore.join('-')}</span></p>
            </div>
            <div className="card-container grid grid-cols-cards gap-4">
                {cards.map((card, index) => {
                    while (index < gameSettings.boardSize - clickedCards.length) {
                        return (
                            <Card
                                key={uniqid()}
                                image={card.image}
                                name={card.name}
                                status={card.status}
                                handleCardClick={() => handleCardClick(card)}
                            />
                        )
                    }
                })}
                {clickedCards.map((item) => {
                    return (
                        <Card
                            key={uniqid()}
                            image={item.image}
                            name={item.name}
                            status={item.status}
                            handleCardClick={() => handleCardClick(item)}
                            clickedCards={clickedCards}
                            gameSettings={gameSettings}
                        />)
                })}

            </div>
        </article>
    )
}