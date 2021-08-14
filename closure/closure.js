// Without Closure:
/*
const moneyBox = (coins) => {
    let saveCoins = 0;
    saveCoins += coins;
    console.log('moneyBox: $'+ saveCoins);
}


moneyBox(5);
moneyBox(8);
*/
// output:  5, 8

// With closure

const moneyBox2 = () => {
    var saveCoins = 0; //
    // crear una función dentro de otra funcion = Closure 
    // para recordar el ambito de saveCoins por su 'Global' Scope.
    const addCoins = (coins) => { // <- CLOSURE
        saveCoins += coins;
        console.log(`MoneyBox2: $ ${saveCoins}`);
    };
    return addCoins;
};

let myMoneyBox = moneyBox2();

myMoneyBox(5);
myMoneyBox(8);
myMoneyBox(3);


