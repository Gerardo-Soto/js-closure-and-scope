// lexical

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {// <- CLOSURE
        console.log(count++);
    };
    return displayCount;// <- CLOSURE
}

const myCount = buildCount(5);
const myOtherCount = buildCount(12);

myCount();
myCount();
myOtherCount();
myOtherCount();
myCount();

