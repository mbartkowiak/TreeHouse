var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();


//add another ajax request - repeat same 4 steps
//url for JSON data has changed  /data/rooms.json
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if(xhr2.readyState === 4 && xhr2.status === 200) {
    var rooms = JSON.parse(xhr2.responseText);
    console.log(rooms);
    var roomStatusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        roomStatusHTML += '<li class="empty">';
      } else {
        roomStatusHTML += '<li class="full">';
      }
      roomStatusHTML += rooms[i].room;
      roomStatusHTML += '</li>';
    }
    roomStatusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomStatusHTML;
  }
};
xhr2.open('GET', '../data/rooms.json');
xhr2.send();