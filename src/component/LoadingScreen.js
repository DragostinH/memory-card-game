import React from "react";
import Image from "../assets/img/loading-image.jpg";

export default function LoadingScreen() {


    return (
        <div className="fixed top-0 bg-[rgba(0,0,0,1)] flex flex-col items-center justify-center border-2 z-10 w-full h-full">
            <img className="rounded-full w-24 animate-spin" src={Image} alt="" />
            <div className="grid text-secondary-200 p-4 rounded-xl">
                <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
        </div>
    )
}
