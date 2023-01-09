
function gradeAssigner (score) {

  let grade;
  if (score >= 0 && score <= 64) {
    grade = 'F'
  }else if (score >= 65 && score <= 69) {
    grade = 'D';
  }else if (score >= 70 && score <= 79) {
    grade = 'C';
  }else if (score >= 80 && score <= 89) {
    grade = 'B';
  }else if (score >= 90 && score <= 100) {
    grade = 'A';
  }

  return grade
}

console.log(gradeAssigner(89));