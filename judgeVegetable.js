function judgeVegetable(vegetables, metric){
  let result = 0;
  let submitter;
  for (const vegetable of vegetables) {
    if(vegetable[metric] >= result){
      result = vegetable[metric];
      submitter = vegetable['submitter'];
    }
    
  }
  return submitter;
}

