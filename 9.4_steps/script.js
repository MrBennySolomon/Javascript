const steps = n => {
  let str = new Array(n);
  for (let i = 0; i < n; i++) {
    str[i] = new Array(n);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str[i][j] = '#';
    }
  }
  return str;
}

console.table(steps(10));
