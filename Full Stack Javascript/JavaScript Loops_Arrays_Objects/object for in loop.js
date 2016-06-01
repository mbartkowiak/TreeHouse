//for in loop
var student = {
	name: "Dave",
	grades: [80,85,90,95]
};

for (var key in student){
	console.log(key);
}


for (var key in student){
	console.log(student[key])
}