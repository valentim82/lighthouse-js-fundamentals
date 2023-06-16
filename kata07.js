const checkAir = function (samples, threshold) {
    // Code here!
    let dirty = 0;
    for (let index = 0; index < samples.length; index++) {
        if(samples[index] === 'dirty'){
            dirty++;
        }
        
    }
    if(dirty / (samples.length+1) < threshold){
        return "Clean";
    }
    else{
        return "Polluted";
    }
  };
  
  console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))