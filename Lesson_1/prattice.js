function towerBuilder(nFloors) {
  const arr = [];
  let star = '';

  for (let i = 0; i < nFloors; i++) {
    star += ' '.repeat(nFloors - i - 1) + '*' + ' '.repeat(i);
    arr.push(star);
  }

  return arr;
}


console.log(towerBuilder(2));
