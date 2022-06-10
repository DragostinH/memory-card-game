import React from "react";
import "../index.css";


export default function Card(props) {

    const { image, name, status, handleCardClick,  } = props;

    return (
        <div onClick={handleCardClick} className="card border-2 cursor-pointer border-secondary-500 rounded-lg transform transition-all 
        hover:scale-105 animate-popping-in">

            <img className="rounded-t-lg" src={image} alt="card" />
            <div className="name-and-status-container flex flex-col">
                {status === "Alive" ?
                    <p className="text-secondary-500 uppercase bg-primary-900 rounded-b-lg text-center">{status}</p>
                    :
                    <p className="text-[rgb(255,255,255)] uppercase text-center bg-secondary-900 rounded-b-lg">{status}</p>}
            </div>
        </div>
    );
}