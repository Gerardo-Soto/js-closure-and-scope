// Hoisting

a = 2;  
var a;
console.log(a); // 2


console.log(a);
var a = 2;




const say = function saludar(saludo) {
    console.log(saludo);
}

saludar('Hello, World!');

