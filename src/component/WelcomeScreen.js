import React, { useEffect, useState } from "react";
import createStorageStructure from "../scripts/createStorageStructure";

export default function WelcomeScreen(props) {

    const { handleStart } = props;



    return (
        <div className="welcome-screen-container fixed top-0 
        bg-[rgba(0,0,0,1)] z-10 w-full h-full flex items-center justify-center">
            <div className="welcome-screen-content bg-primary-900 gap-10 flex flex-col p-8 rounded-lg border-2 border-secondary-500">
                <h1 className="text-center text-secondary-500 text-4xl font-bold">Welcome to Memory Card Game</h1>
                <p className="text-center text-secondary-500 text-xs font-bold">The point of the game is to only click on unique cards.</p>
                <p className="text-center text-secondary-500 text-xs font-bold">Good luck!</p>
                <button onClick={handleStart} className="bg-primary-900 text-secondary-500 hover:bg-secondary-500 hover:text-primary-900 font-bold py-2 px-4 rounded-lg border-2 border-secondary-500">
                    Start
                </button>
            </div>
        </div>
    );
}