//document.getElementById('name1').innerHTML 
var player1 = window.prompt('Player 1, Please enter your name!');
//document.getElementById('name2').innerHTML 
var player2 = window.prompt('Player 2, Please enter your name!');
//document.getElementById('name3').innerHTML 
var player3 = window.prompt('Player 3, Please enter your name!');
//document.getElementById('name4').innerHTML 
var player4 = window.prompt('Player 4, Please enter your name!');
//document.getElementById('name5').innerHTML 
var player5 = window.prompt('Player 5, Please enter your name!');
//document.getElementById('name6').innerHTML 
var player6 = window.prompt('Player 6, Please enter your name!');
//document.getElementById('name7').innerHTML 
var player7 = window.prompt('Player 7, Please enter your name!');
//document.getElementById('name8').innerHTML 
var player8 = window.prompt('Player 8, Please enter your name!');
//document.getElementById('name9').innerHTML 
var player9 = window.prompt('Player 9, Please enter your name!');
//document.getElementById('name10').innerHTML 
var player10 = window.prompt('Player 10, Please enter your name!');

var players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];
var teamA = [];
teamA = players;
// due to the references in object, function and arrays, both teamA and players are pointing to the same memory location (references). 
//whatever changes in teamA same applied to players array.
var teamB = [];
function select_random() {
  
    for (let i = 0; i < teamA.length; i++) {
         let number = Math.floor(Math.random()*teamA.length); 
        //<-- based on the players length it will randomly select a number which doesn't exceed the players length.
         teamB.push(teamA[number]);
         teamA.splice(number, 1);
    }
    
    //randomly select first 5 players from var players
        //after select one player, you can't select the same player again, it has to be removed from the array.
        // use the method to take out one player at a time into another array.
    //put them into Team A list
    //put the rest into Team B list
    //return Team A and B list into the document.
}

select_random();

demoA = document.getElementById("listA");
demoB = document.getElementById("listB");

function myFunction1(item, index) {
    demoA.innerHTML = demoA.innerHTML + "Player " + (index +=1) + ": " + item + "<br>"; 
    let x = document.getElementById("button1");
    x.style.display = "none";
}
function myFunction2(item, index) {
    demoB.innerHTML = demoB.innerHTML + "Player " + (index +=1) + ": " + item + "<br>"; 
    let y = document.getElementById("button2");
    y.style.display = "none";
}

//function select_captain(team) {
//    //from the list, randomly choose a captain.
//    //return the chosen one to the team list.
//}
//
//select_captain(teamA);
