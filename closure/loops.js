// Loops

const loopFunctionLetTimeout = () => {
    for (let index = 0; index < 10; index++) {
        setTimeout(() => {
            console.log(index);
        }, 1000);
    }
}

loopFunctionLetTimeout();

const loopFunctionVarTimeout = () => {
    for (var index = 0; index < 10; index++) {
        setTimeout(() => {
            console.log(index);
        }, 1000);
    }
}

loopFunctionVarTimeout();


const loopFunctionVar = () => {
    for (var index = 0; index < 10; index++) {
        console.log(index);
    }
}

loopFunctionVar();


const loopFunctionLet = () => {
    for (let index = 0; index < 10; index++) {
        console.log(index);
    }
}

loopFunctionLet();
