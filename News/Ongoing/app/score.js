var player1 = "",
    player2 = "",
    player3 = "",
    player4 = "",
    player5 = "",
    player6 = "",
    player7 = "",
    player8 = "",
    player9 = "",
    player10 = "";
var players = [];

//var player1 = document.getElementById('input1');
//var player1a = document.getElementById('input1').value;
//player1.addEventListener('change', function (e) {
//    player1a = e.target.value;
//});
function name1() {
    if (player1 === "") {
        var x = document.getElementById("input1").value;
        player1 = x;
        players.push(x);
        document.getElementById("input1").disabled = true;
        //    document.getElementById("input1").style.backgroundColor = "red";
    } else {
        alert("You have to refresh to enter again!");
    }
}

function name2() {
    var x = document.getElementById("input2").value;
    player2 = x;
    players.push(x);
    document.getElementById("input2").disabled = true;
}

function name3() {
    var x = document.getElementById("input3").value;
    player3 = x;
    players.push(x);
    document.getElementById("input3").disabled = true;
}

function name4() {
    var x = document.getElementById("input4").value;
    player4 = x;
    players.push(x);
    document.getElementById("input4").disabled = true;
}

function name5() {
    var x = document.getElementById("input5").value;
    player5 = x;
    players.push(x);
    document.getElementById("input5").disabled = true;
}

function name6() {
    var x = document.getElementById("input6").value;
    player6 = x;
    players.push(x);
    document.getElementById("input6").disabled = true;
}

function name7() {
    var x = document.getElementById("input7").value;
    player7 = x;
    players.push(x);
    document.getElementById("input7").disabled = true;
}

function name8() {
    var x = document.getElementById("input8").value;
    player8 = x;
    players.push(x);
    document.getElementById("input8").disabled = true;
}

function name9() {
    var x = document.getElementById("input9").value;
    player9 = x;
    players.push(x);
    document.getElementById("input9").disabled = true;
}

function name10() {
    var x = document.getElementById("input10").value;
    player10 = x;
    players.push(x);
    document.getElementById("input10").disabled = true;
}


var teamA = [];
teamA = players;
// due to the references in object, function and arrays, both teamA and players are pointing to the same memory location (references). 
//whatever changes in teamA same applied to players array.
var teamB = [];

function select_random() {
    if (players.length < "10") {
        alert("Please enter all players' name!")
    } else {
        for (let i = 0; i < teamA.length; i++) {
            let number = Math.floor(Math.random() * teamA.length);
            //<-- based on the players length it will randomly select a number which doesn't exceed the players length.
            teamB.push(teamA[number]);
            teamA.splice(number, 1);
        }
        let z = document.getElementById("button1");
        let teams = document.getElementsByClassName("team");
        //An array was created in teams variable
        let j;
        for (j = 0; j < teams.length; j++) {
            teams[j].style.display = "block";
        }
        let chooseTeam = document.getElementsByClassName("choose");
        //An array was created in teams variable
        let i;
        for (i = 0; i < chooseTeam.length; i++) {
            chooseTeam[i].style.display = "block";
        }
        z.style.display = "none";
    }

    //randomly select first 5 players from var players
    //after select one player, you can't select the same player again, it has to be removed from the array.
    // use the method to take out one player at a time into another array.
    //put them into Team A list
    //put the rest into Team B list
    //return Team A and B list into the document.
}

demoA = document.getElementById("listA");
demoB = document.getElementById("listB");

function myFunction1() {
    let i;
    for (i = 0; i < teamA.length; i++) {
        demoA.innerHTML = demoA.innerHTML + "<p class='namelist' >" + teamA[i] + "</p>";
    }
    let j;
    for (j = 0; j < teamA.length; j++) {
        demoB.innerHTML = demoB.innerHTML + "<p class='namelist' >" + teamB[j] + "</p>";
    }
    let z = document.getElementById("button2");
    z.style.display = "none";
}

//function select_captain(team) {
//    //from the list, randomly choose a captain.
//    //return the chosen one to the team list.
//}
//
//select_captain(teamA);
