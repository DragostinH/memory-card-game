import React from "react";
import Card from "./Card";
import uniqid from "uniqid";

export default function LevelTwo(props) {

    const { handleCardClick, gameSettings, cards, clickedCards } = props;

    return (
        <article className="level-two-container">
            <div className="score-level-container flex gap-8 items-center justify-center text-secondary-500">
                <p>Score:  <span className='font-bold'>{gameSettings.score}</span></p>
                <p>Level: <span className='font-bold'>{gameSettings.stage} - {gameSettings.level}</span></p>
                <p>High score:  <span className='font-bold'>{gameSettings.highScore}</span></p>
            </div>
            <div className="card-container grid grid-cols-3 gap-4 ">
                {cards.map((card, index) => {
                    while (index < 10 - clickedCards.length) {
                        return (
                            <Card
                                key={uniqid()}
                                image={card.image}
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
                            handleCardClick={() => handleCardClick(item)}
                            clickedCards={clickedCards}
                            gameSettings={gameSettings}
                        />)
                })}

            </div>
        </article>
    )


}