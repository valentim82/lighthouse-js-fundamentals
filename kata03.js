const numberOfVowels = function(data) {
    // Put your solution here
    let count = 0;
    for (let index = 0; index < data.length; index++) {
        
        if (data[index] === 'a' || data[index] === 'e' || data[index] === 'i' || data[index] === 'o' || data[index] === 'u' ){
            count++;
        }
        
        
    }
    return count;
  };
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));