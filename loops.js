function forLoop(array){
  for(let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    }
    
    else if (i === 11) {
      array.push('I am 1 strange loop.');
    }
    
    else {
      array.push(`I am ${i} strange loops.`);
    }
    
  }
  return array;
}

//var test = [1, 2, 3, 4];
//forLoop(test);
//console.log(test[1]);
//console.log(test[24]);