import React from "react";


export default function GameOverScreen(props) {

    const { gameSettings, handlePlayAgainClick } = props;

    return (
        <div className="fixed top-0 bg-[rgba(0,0,0,1)] flex items-center justify-center border-2 z-10 w-full h-full">
            <div className="bg-secondary-800 p-12 grid gap-8 rounded-xl border-2 border-secondary-200 items-center justify-center text-primary-200">
                <p className="text-center">Game Over</p>
                <p>Your score is: <span className='font-bold'>{gameSettings.stage}-{gameSettings.level}</span></p>
                <p>High score: {gameSettings.highScore.join('-')}</p>
                <div className="game-over-screen-buttons-container">
                    <button onClick={handlePlayAgainClick} className="bg-primary-900 text-secondary-500 hover:bg-secondary-500 hover:text-primary-900 font-bold py-2 px-4 rounded-lg">
                        Play Again
                    </button>
                </div>
            </div>
        </div>
    )
}