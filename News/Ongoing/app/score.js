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
        let z = document.getElementById("submitBtn");
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
        let y = document.getElementById("playerForm");
        y.style.display = "none";
        let x = document.getElementById("enterName");
        x.style.display = "none";
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

function chooseTeam() {
    let i;
    for (i = 0; i < teamA.length; i++) {
        demoA.innerHTML = demoA.innerHTML + "<p class='namelist' >" + teamA[i] + "</p>";
    }
    let j;
    for (j = 0; j < teamA.length; j++) {
        demoB.innerHTML = demoB.innerHTML + "<p class='namelist' >" + teamB[j] + "</p>";
    }
    let z = document.getElementById("chooseBtn");
    z.style.display = "none";
    let w = document.getElementById("yourFate");
    w.style.display = "block";
    let v = document.getElementById("chrono");
    v.style.display = "block";
    let k = document.getElementById("clockSetting");
    k.style.display = "flex";
}


let cnv = document.getElementById("chrono"); // canvas
let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");
//canvas size equal to the size of the screen
cnv.width = 200; 
cnv.height = 200;
let ctx = cnv.getContext("2d");
//initialization of letiable
let status = 'w'; // status : w = waiting ; p = pause ; s = stop ; r = run 
let fontType = "Arial"
let time = dTime = 0;
let duration = 900000; //the duration is 15 mins as default.

let x = cnv.width / 2;
let y = cnv.height / 2;
let r = Math.min(cnv.width, cnv.height) / 2; // radius = the smallest dimension of the screen
let e = r / 8; //thickness of the outline of the circle according to the radius
r = r - e; // we remove the thickness of the line to not exceed the size of the canvas
let fontSize = computeFontSize("00:00:00", fontType); //adapt the chrono text to the radius of the circle
let font = fontSize + "px " + fontType;
/*
 *
 * calculation functions
 *
 */
function computeDuration() {
    if (h && m && s) {
        duration = h.value * 3600000 + m.value * 60000 + s.value * 1000;
    }
}

function computeFontSize(text, fontface) {
    let maxWidth = r * 2 * 0.8;
    let fontsize = 300;
    do {
        fontsize--;
        ctx.font = fontsize + "px " + fontface;
    } while (ctx.measureText(text).width > maxWidth)
    return fontsize;
}
/*
 *
 * formatting functions
 *
 */
function formatTime(time) {
    let tmp = Math.floor(time / 1000);
    let second = tmp % 60;
    if (second < 10) {
        second = '0' + second
    };
    tmp = Math.floor(tmp / 60);
    let minute = tmp % 60;
    if (minute < 10) {
        minute = '0' + minute
    };
//    tmp = Math.floor(tmp / 60);
//    let hour = tmp;
//    if (hour < 10) {
//        hour = '0' + hour
//    };
    return minute + ':' + second;
}
/*
 *
 * object creation functions
 *
 */
function createCircle() {
    return {
        centerX: cnv.width / 2,
        centerY: cnv.height / 2,
        radius: Math.min(cnv.width, cnv.height) / 2 - (Math.min(cnv.width, cnv.height) / 2) / 8,
        startAngle: 1.5 * Math.PI,
        endAngle: 3.5 * Math.PI,
        lineWidth: (Math.min(cnv.width, cnv.height) / 2) / 8,
        color: 'rgba(255,255,255,0.2)',
    };
}
/*
 *
 * canvas and drawings functions
 *
 */
function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(myCircle, ctx) {
    ctx.beginPath();
    ctx.arc(myCircle.centerX, myCircle.centerY, myCircle.radius, myCircle.startAngle, myCircle.endAngle);
    ctx.lineWidth = myCircle.lineWidth;
    ctx.strokeStyle = myCircle.color;
    ctx.stroke();
}

function drawChrono(time, font, ctx) {
    ctx.font = font;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(formatTime(time), cnv.width / 2, cnv.height / 2 + fontSize / 4);
}
/*
 *
 * function animation
 *
 */
function animate() {
    let startTime = +new Date();
    let step = function () {
        if (status != 'p' && status != 's') {
            time = +new Date() - startTime + dTime;
            let perc = time / duration;
            if (perc > 1) {
                perc = 1;
            }
            let angle = 2 * Math.PI * perc;
            clearCanvas(ctx, cnv);
            let color = 'green';
            if (perc > (3 / 4 + 2 / 12)) {
                color = 'red';
            } else if (perc > (3 / 4 + 1 / 12)) {
                color = 'orange';
            } else if (perc > 3 / 4) {
                color = 'yellow';
            }
            progCircle = createCircle();
            progCircle.endAngle = progCircle.startAngle + angle;
            progCircle.color = color;
            whiteCircle = createCircle();
            drawChrono(time, font, ctx);
            drawCircle(whiteCircle, ctx);
            drawCircle(progCircle, ctx);
            requestAnimationFrame(step)
        } else {
            status = 'w';
        }
    }
    step();
};
/*
 *
 * Events listener
 *
 */
document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
h.addEventListener("change", computeDuration);
m.addEventListener("change", computeDuration);
s.addEventListener("change", computeDuration);

function init() {
    drawCircle(createCircle(), ctx);
    drawChrono(0, font, ctx)
}

function start() {
    status = 'r';
    animate();
}

function pause() {
    status = 'p';
    dTime = time;
}

function reset() {
    status = 's';
    dTime = 0;
    clearCanvas(ctx, cnv);
    init();
}

init();


//function select_captain(team) {
//    //from the list, randomly choose a captain.
//    //return the chosen one to the team list.
//}
//
//select_captain(teamA);
