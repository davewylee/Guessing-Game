let maximum = parseInt(prompt('Enter the maximum number!')); // 輸入 maximum 會跳出的視窗
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!')); // 定義: 如果 maximum 等於falsy: - 0 / 空 / null / NaN / undefined
}

const targetNum = Math.floor(Math.random() * maximum) + 1; // 定義: 產出 1 ~ maximum 的隨機數

let guess = prompt('Enter your first guess!'); 
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break; 
    attempts ++;
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess:');
    } else if (guess < targetNum) {
        guess = prompt('Too low! Enter a new guess:');
    } else {
        guess = prompt(`Your input is: ${guess},which is not a number, please enter a number.`);
    }
}

if (guess === 'q') {
    console.log('OK, you quit!') // 在 跳出 while, 是 q, 在 if 啟動
} else {
    console.log('You win.') // 在 跳出 while 時, 不是 q, 在 else 啟動 (當guess !== targetNum 才不會跳出 while) 
    console.log(`You got it. It took you ${attempts} guesses`) 
}
