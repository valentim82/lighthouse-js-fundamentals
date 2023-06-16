const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let longNameSize = 0;
    let longNameId;
    for (let index = 0; index < instructors.length; index++) {
        if(instructors[index].name.length > longNameSize){
            longNameSize = instructors[index].name.length;
            longNameId = index
        }
        
    }
    return instructors[longNameId];


  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));