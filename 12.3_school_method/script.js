const school = {
  teachers: [
  {
  id: 1,
  name: "Pinchas",
  subjects: ["chemistry", "biology", "physics"],
  students: [],
  capacityLeft: 3,
  },
  {
  id: 2,
  name: "Williams",
  subjects: ["history", "ethics"],
  students: [],
  capacityLeft: 2,
  },
  ],
  students: [
  {
  id: 10,
  name: "Jennifer",
  age: 20,
  },
  {
  id: 11,
  name: "Howard",
  age: 23,
  },
  {
  id: 12,
  name: "Old-Timmy",
  age: 86,
  },
  {
  id:13,
  name: "Houston",
  age: 21,
  },
  ],
  };

// 1. A method called “findPerson” takes two arguments, a type
// (either a student or teacher), and an id. It will return a
// particular object of that person.
const findPerson = (type, id) => {
  return school[type].find(item => {
    return item.id === id;
  })
};

console.log(findPerson('teachers', 2));

// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject. Assign all of the
// students to the first available teacher who teaches that
// subject and who is not in full capacity. If all of the teachers
// are in the full capacity log to the console “Sorry, no
// available teachers left”.
const assignStudent = (studentId, subject) => {
  const openTeacher = school.teachers.find(item => item.capacityLeft > 0 && item.subjects.includes(subject));

  if (openTeacher === undefined) {
    return 'Sorry, no available teachers left';
  }else {
    openTeacher.capacityLeft = openTeacher.capacityLeft - 1;
    return `You were succecfully assigned to ${openTeacher.name}`;
  }
};

console.log(assignStudent(10, "history"));
console.log(assignStudent(10, "history"));
console.log(assignStudent(10, "history"));

// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, and a new subject. Assign the
// new subject to that particular teacher if that subject
// doesn’t exist in their array of subjects.
const assignTeachersSubject = (teacherId, newSubject) => {
  school.teachers.forEach(element => {
    if (element.id === teacherId && !element.subjects.includes(newSubject)) {
      element.subjects.push(newSubject);
    }
  });
};

assignTeachersSubject(2, 'Hebrew');
console.log(school);

// 4. Create a new method for anything you want.

const fireTeacher = (teacherId) => {
  const index = school.teachers.forEach((element,i)  => {
    if (element.id === teacherId) {
      school.teachers.splice(i, 1);
    }
  });
};

fireTeacher(2);
console.log(school);