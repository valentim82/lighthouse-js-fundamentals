function howManyHundreds(number){
  number = number - number%100;
  const hundreds = number/100;
  return hundreds;

}