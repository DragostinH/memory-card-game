export default function updateStorage(input){
    let storage = JSON.parse(localStorage.getItem('MemoryCardGame'));
    const {gameSettings, cards, clickedCards, firstTime} = input;
    storage[0] = gameSettings;
    storage[1] = cards;
    storage[2] = clickedCards;
    storage[3] = firstTime;
    localStorage.setItem('MemoryCardGame', JSON.stringify(storage));
}