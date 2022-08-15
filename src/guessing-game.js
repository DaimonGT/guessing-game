let option;
    let arrayNumbers;
    let result;

class GuessingGame {
    constructor() {}

    
    
        setRange(min, max) {
            arrayNumbers = Array.from(Array(max).keys());
            option = (arrayNumbers.length);
        }
        
        guess() {
            result = arrayNumbers[Math.floor(arrayNumbers.length / 2)];
            option = Math.ceil(option / 2);
            console.log('result: ' + result);
            return result;
        }
    
        lower() {
            arrayNumbers = arrayNumbers.slice(0, option);
        }
    
        greater() {
            arrayNumbers = arrayNumbers.slice(option);
        }
    
    }


    module.exports = GuessingGame;

