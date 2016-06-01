//create a script that creates student records
//prints records to webpages
//step 1 - create data structure about group of students

var students = [
{name:"Michael",track:"iOS",achievement:10,points:655},
{name:"Darrell",track:"Front End Dev",achievement:9,points:444},
{name:"Jason",track:"JavaScript",achievement:8,points:233300},
{name:"Kenneth",track:"HTML",achievement:7,points:222},
{name:"Marilyn",track:"CSS",achievement:166,points:20123},
]

  var totalString = '';


for(var i=0;i<students.length;i++){
  var string = '';
  string = "Student: " + students[i].name + "<br><br> Track: " + students[i].track + "<br><br> Points: " + students[i].points + "<br><br> Achievements: " + students[i].achievement + "<br><br><br><br>";
  totalString += string;
}

console.log(string);
console.log("lenght:" + students.length);

document.write(totalString);


