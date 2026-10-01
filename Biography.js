

var name = "Zain Ali";
var age = 20;
var university = "Air University";
var city = "Rawalpindi";



var biography = { name: name, age: age,address: {
        city: city,
        country: "Pakistan"
    }, degreeProgram: {
        name: "Computer Science",
        semester: 3
    }
};


console.log("Name:", biography.name);
console.log("Age:", biography.age);
console.log("City:", biography.address.city);
console.log("Country:", biography.address.country);
console.log("Degree:", biography.degreeProgram.name);
console.log("Semester:", biography.degreeProgram.semester);