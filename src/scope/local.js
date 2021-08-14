//
const helloWorld = () => {
    const say = 'Hello, World!';
    console.log(say);
}

helloWorld();

// Error:
//console.log(say);

var scope ="I'm global";

//const name = function f_name(params) {  
const functionScope = () => {
    var scope = "I'm just a local";

    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);
