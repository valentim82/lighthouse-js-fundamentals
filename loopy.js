for (let index = 100; index <= 200; index++){
    if( index % 3 === 0 && index % 4 === 0){
      console.log("LoopyLighthouse")
    }else if (index % 3 === 0){
      console.log("Loopy");
    } else if (index % 4 === 0){
      console.log("Lighthouse");
    } else{
      console.log(index);
    }
      
  }