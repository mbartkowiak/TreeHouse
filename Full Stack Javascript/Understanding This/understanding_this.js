function helloWorld(){
  console.log("this");  //logs "this" to console
  console.log(this);    //logs window object to console
}

//helloWorld();



var Portland = {
  bridges:12,
  airport:1,
  soccerTeams:1,
  logNumberofBridges: function(){
     //console.log("There are " + this.bridges + " bridges in Portland!");
      //logs "There are 12 bridges in Portland!" to the console
  }
}

function logTeams(){
  console.log(this.soccerTeams);
}

Portland.foo = logTeams;
Portland.foo();
logTeams();

//Portland.logNumberofBridges();
//Portland.logTeams();

var City = function(name, state){
  this.name = name || 'Portland';
  this.state = state || 'Oregon';
  this.printMyCityAndState = function(){
    console.log("My city is " + this.name + ", and my state is " + this.state);
  };
}

portland = new City();
seattle = new City('Seattle','Washington');
salem = new City('Salem');
vancouver = new City('Vancouver', 'Washington');

console.log(portland);
console.log(seattle);

portland.printMyCityAndState();
seattle.printMyCityAndState();
salem.printMyCityAndState();
vancouver.printMyCityAndState();
