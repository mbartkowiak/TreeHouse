var pro;
var student;
var docWrite = '';

var students = [
{name:"Michael",track:"iOS",achievement:10,points:655},
{name:"Darrell",track:"Front End Dev",achievement:9,points:444},
{name:"Jason",track:"JavaScript",achievement:8,points:233300},
{name:"Kenneth",track:"HTML",achievement:7,points:222},
{name:"Marilyn",track:"CSS",achievement:166,points:20123},
]

function getStudentReport( student ){
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  return report;
}

while(true){
  pro = prompt("Search some student records:  type a name [Jody] (or type 'quit' to end)");
  if(pro ===null || pro.toLowerCase()==='quit'){
    break;
  }
  for(var i=0;i <students.length;i+=1){
  student = students[i];
    if(student.name === pro){
      message = getStudentReport(student);
      document.write(message);
    }
  }
}