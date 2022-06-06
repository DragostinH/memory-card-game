export default function getArrayOfRandomNumbers(arrSize){
    let arr = [];
    for(let i = 0; i < arrSize; i++){
        let randNumber = Math.floor(Math.random() * 826);
        arr.push(randNumber);
    }
    return arr;

}