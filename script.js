// 1) for the given JSON iterate over all for loops (for,for in,for of,for each)

//JSON object:

let student = {
    "name": "John Doe",
    "age": "20",
    "grade": "A",
    "subjects": ["Math", "Science", "History"]
  };

  // 1) For Loop:

  for (let i = 0; i < student.subjects.length; i++) {
    console.log(student.subjects[i]);
  }

  // 2) For-In Loop:

  for (let key in student) {
    if (student.hasOwnProperty(key)) {
      console.log(key + ": " + student[key]);
    }
  }

  // 3) For-Of Loop

  for (let subject of student.subjects) {
    console.log(subject);
  }


  // 4) ForEach Loop

  student.subjects.forEach(function(subject) {
    console.log(subject);
  });