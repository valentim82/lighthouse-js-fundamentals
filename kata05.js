const urlEncode = function(text) {
    // Put your solution here
    return text.replace(/ /g,"%20");
  };
  
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));