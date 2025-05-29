
function factorial(n) {
  
    const num = Number(n); 

 
    if (isNaN(num) || num < 0) {
        return 1;
    }

   
    if (num === 0) {
        return 1;
    }


    return num * factorial(num - 1);
}


const inputArg = process.argv[2];


if (inputArg === undefined) {
  
    console.log(factorial(NaN)); 
} else {
    
    console.log(factorial(inputArg));
}


