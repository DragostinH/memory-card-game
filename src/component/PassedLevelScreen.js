import React, { useState } from "react";

export default function PassedLevelScreen(props) {

    const { handleNextLevelClick, gameSettings } = props;

    return (
        <div className="fixed top-0 bg-[rgba(0,0,0,1)] flex items-center justify-center border-2 z-10 w-full
        h-full">
                <div className="grid border-2 border-secondary-500 bg-primary-900 text-secondary-200 p-4 rounded-xl">
                    <h1 className="text-2xl font-bold">Congratulations!</h1>
                    <h2 className="text-xl font-bold">You passed stage {gameSettings.stage}</h2>
                    <button className="bg-secondary-500 text-primary-900 hover:bg-secondary-500 hover:text-primary-900 font-bold py-2 px-4 rounded-lg" onClick={handleNextLevelClick}>Next level</button>
                </div>
        </div>

    )
}