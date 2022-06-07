import React from "react";

export default function Card(props) {

    const { image, handleCardClick } = props;


    return (
        <div onClick={handleCardClick} className="card border-2 cursor-pointer border-secondary-500 rounded-lg transform transition ease-in duration-120 hover:scale-105">
            <img className="rounded-lg" src={image} alt="card" />
        </div>
    );
}