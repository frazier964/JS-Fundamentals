
function add(a, b) {
  
    const numA = Number(a);
    const numB = Number(b);


    if (isNaN(numA) || isNaN(numB)) {
        return NaN;
    }

    
    return numA + numB;
}


const firstArg = process.argv[2];
const secondArg = process.argv[3];


const result = add(firstArg, secondArg);


console.log(result);

