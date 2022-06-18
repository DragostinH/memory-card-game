import getArrayOfRandomNumbers from "./getArrayOfRandomNumbers";
import shuffleArray from "./shuffleArray";

export async function generateCards(input) {
    const { boardSize } = input;
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${getArrayOfRandomNumbers(boardSize)}`);
    const data = await resp.json();
    Promise.resolve(data);
    return shuffleArray(data);
}