import React from "react";
import "../index.css";


export default function Card(props) {

    const { image, name, handleCardClick, } = props;

    let charName = name.split(' ');

    return (
        <div onClick={handleCardClick} className="card border-2 max-w-[304px] cursor-pointer border-secondary-500 rounded-lg transform transition-all 
        hover:scale-105 animate-popping-in">

            <img className="rounded-t-lg" src={image} alt="card" />
            <div className="name-and-status-container flex flex-col">
                {charName.length > 1 ?
                    <h2 className="text-center text-[0.6rem] text-secondary-500 font-bold">{charName[0]}{charName[1]}</h2>
                    :
                    <p className="text-center text-secondary-500 text-xs font-bold">{charName[0]}</p>
                }
            </div>
        </div>
    );
}