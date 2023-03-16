var numJewelsInStones = function (jewels, stones) {
  return stones.split("").reduce((acc, curr) => {
    jewels.includes(curr) ? (curr = 1) : (curr = 0);
    return (acc += curr);
  }, 0);
};

// stones.split("").forEach(stone => {
//     if (jewels.includes(stone)) count++;
// })

// stones.split("").forEach((stone,i) => {
//     jewels.split("").forEach((jewel,j) => {
//         if(stones.charCodeAt(i) === jewels.charCodeAt(j)) count++ ;
//     })
// })
