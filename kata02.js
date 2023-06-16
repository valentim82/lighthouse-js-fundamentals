const conditionalSum = function(values, condition) {
    // Your code here
    let sum = 0;
    let rest;
    if(condition === "even"){
        rest = 0;
    } else{
        rest = 1;
    }
    for (let index = 0; index < values.length; index++) {
        if(values[index] % 2 === rest){
            sum = sum + values[index];
        }
       
    }
    return sum;
  };

  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));