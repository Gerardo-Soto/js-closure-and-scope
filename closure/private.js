// Private
// metodos internos para obtener el valor de una variable o 
// modificarla, pero nunca vamos a poder hacerlo desde afuera

const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName; 
        },
        setName: (name) => {
            saveName = name;
        } 
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Gerard');
console.log(newPerson.getName());


