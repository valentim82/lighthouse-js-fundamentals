function concat(array1,array2) {

  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
}