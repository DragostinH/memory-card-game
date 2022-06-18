export default function createStorageStructure(data) {
    const { gameSettings, cards, clickedCards, firstTime } = data;
    const storage = window.localStorage;
    const storageStructure = [gameSettings, cards, clickedCards, firstTime];
    storage.setItem('MemoryCardGame', JSON.stringify(storageStructure));
}
