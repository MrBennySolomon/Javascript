function boom (n, boomNum) {
  for (let i = 1; i <= n; i++) {
    if ((i === boomNum) || ((i % boomNum) == 0)) {
      if ((i + '').indexOf(boomNum) > -1) {
        console.log('BOOM-BOOM');
      }else {
        console.log('BOOM');
      }
    }else {
      console.log(i);
    }
  }
}

boom(15, 7);