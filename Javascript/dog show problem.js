/*

Your dog just won X place in a dog show, congratulations! You post your star's photo and placement announcement to /r/aww and, predictably, a funny redditor asks what places the rest of the participating dogs took. Your job is to create a program that lists all places within the range of 0-100 in spoken English, excluding the placing (X) of your winning pup.

Input is the integer placement of your dog (X) within the range 0-100.

A reader should see a neatly formatted list of placements from 0-100 in spoken English, excluding your dog's placement.

First place finish: 
0th, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th, 11st, 12nd, 13rd, 14th, 15th, 16th, 17th, 18th, 19th, 20th, 21st, 22nd, 23rd, 24th, 25th, 26th, 27th, 28th, 29th, 30th, 31st, 32nd, 33rd, 34th, 35th, 36th, 37th, 38th, 39th, 40th, 41st, 42nd, 43rd, 44th, 45th, 46th, 47th, 48th, 49th, 50th, 51st, 52nd, 53rd, 54th, 55th, 56th, 57th, 58th, 59th, 60th, 61st, 62nd, 63rd, 64th, 65th, 66th, 67th, 68th, 69th, 70th, 71st, 72nd, 73rd, 74th, 75th, 76th, 77th, 78th, 79th, 80th, 81st, 82nd, 83rd, 84th, 85th, 86th, 87th, 88th, 89th, 90th, 91st, 92nd, 93rd, 94th, 95th, 96th, 97th, 98th, 99th, 100th, 101st
*/

var place = 2;
var i;
var ord ="";
for(i=1;i<=100;i++){
  ord = "st";
  console.log(i%2);
  console.log(i + ord)
  
}

function dogPlace(n,p){
    var r="",eol="<br/>",ord="",p=p||100,excepts=[11,12,13];
    for(var x=1;x<=p;x+=1){
        var l2=x%100;
        if(excepts.some(function(y){return y===l2;})){
            ord="th";            
        }else if(x % 10 === 1){
            ord="st";            
        }else if(x % 10 === 2){
            ord="nd";            
        }else if(x % 10 === 3){
            ord="rd";     
        }else{
            ord="th";            
        }
        if(x!=n){
            r+=x+ord+eol;
        }
    }
    return r;
}

document.addEventListener("DOMContentLoaded",function(){
    document.body.innerHTML=dogPlace(38,150);    
});



    function position(place, size){ 
       var posFix;
       for(i=1; i<(size+1); i++){ 
           if(i != place){
              if ((i%10 == 3 && i%100 != 13) ){ posFix = "rd";}
              else if ((i%10 == 2 && i%100 != 12) ){ posFix = "nd";}
              else if((i%10 == 1 && i%100 !=11)  ){ posFix = "st";}
              else { posFix = "th"; }
              console.log(i+posFix);  
           }
       }
    }

console.log(position(1,150));



function places(myPlace) {
    return Array.from(Array(100), (_,i) => i + 1)  // create 100 places
        .filter(p => p != myPlace)                 // exclude self
        .map(p => p + (p>10 && p<14 || p%10 > 3 ? 'th' : ['th', 'st', 'nd', 'rd'][p%10]))
        .join(', ');
}