 process.argv[0] is 'node'
 process.argv[1] is the script name '7-multi_c.js'
 process.argv[2] is the first argument provided by the user
const numOccurrences = parseInt(process.argv[2]);
if (isNaN(numOccurrences)) {
  console.log("Missing number of occurrences");
} else {
   Use a loop to print "C is fun" the specified number of times
  for (let i = 0; i < numOccurrences; i++) {
    console.log("C is fun");
  }
}
