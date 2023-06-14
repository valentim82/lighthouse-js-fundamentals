function lastIndexOf(array,last){
  for (let index = array.length-1; index >=0 ; index--){
    if(array[index] === last){
      return index++;
    }
  }
  return -1;
}