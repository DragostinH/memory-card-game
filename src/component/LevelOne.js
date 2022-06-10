import React, { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

export default function LevelOne(props) {


    const { handleCardClick, gameSettings, cards, clickedCards } = props;


    return (
        <article className="level-one-container">
            <div className="score-level-container flex gap-8 items-center justify-center text-secondary-500">
                <p>Score:  <span className='font-bold'>{gameSettings.score}</span></p>
                <p>Level: <span className='font-bold'>{gameSettings.stage} - {gameSettings.level}</span></p>
                <p>High score:  <span className='font-bold'>{gameSettings.highScore}</span></p>
            </div>
            <div className="card-container grid grid-cols-3 gap-8 ">
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