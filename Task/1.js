function getComputerString(number) {
    const absNumber = Math.abs(number);
    const lastTwoDigits = absNumber % 100;
    const lastDigit = absNumber % 10;
    let word;
    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
        word = 'компьютеров';
    } else if (lastDigit === 1) {
        word = 'компьютер';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        word = 'компьютера';
    } else {
        word = 'компьютеров';
    }

    return `${number} ${word}`;
}
console.log(getComputerString(25));   
console.log(getComputerString(41));   
console.log(getComputerString(1048)); 
