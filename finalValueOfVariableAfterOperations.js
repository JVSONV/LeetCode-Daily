var finalValueAfterOperations = function(operations) {
  let numAnswer = 0;
  for(let i = 0; i < operations.length; i++) {
      if(operations[i] === "++X" || operations[i] === "X++") {
          numAnswer = 1 + (numAnswer);
      }
      if(operations[i] === "--X" || operations[i] === "X--" ) {
          numAnswer = (numAnswer) - 1;
      }
  }

  // DON'T DO THIS... IT WAS JUST FOR FUN!!!!!
  // To see it run just comment out above code the return below these comments;
  // let pos = operations.filter(num => num === "++X" || num === "X++");
  // return pos.length === operations.length ? pos.length : !pos.length ? operations.length - (operations.length *2 ): pos.length === (operations.length /  2 ) ? 0 : ((operations.length - pos.length) + pos.length) === operations.length ? (pos.length - (operations.length - pos.length)): operations.length - pos.length;
  return numAnswer;
}