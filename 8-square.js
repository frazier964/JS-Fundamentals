
const sizeInput = process.argv[2]; 


const size = Number(sizeInput);


if (isNaN(size) || !Number.isInteger(size) || size <= 0) {
    
    console.log("Missing size");
} else {
   
    for (let i = 0; i < size; i++) { 
        let row = ''; 
       
        for (let j = 0; j < size; j++) { 
            row += 'x';
        }
        console.log(row);
    }
}

