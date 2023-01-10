function validation1(password) {
  if (password.length > 7) {
    return 'Strong';
  }else {
    return 'Weak';
  }
}

function validation2(password) {
  return password.length > 7 ? 'Strong' : 'Weak';
}

function validation3(password) {
  if (password.length > 7 && password.length < 10) {
    return 'Strong';
  }else {
    return 'Weak';
  }
}

const advanced = password => password.length <= 7 ? 'Weak' : /[A-Z]/.test(password) ? 'Very Strong' : 'Strong' ;

console.log(advanced("12345Dxx6"));