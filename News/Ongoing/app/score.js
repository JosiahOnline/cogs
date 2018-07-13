let players = [];
//let player1 = "",
// player2 = "",
// player3 = "",
// player4 = "",
// player5 = "",
// player6 = "",
// player7 = "",
// player8 = "",
// player9 = "",
// player10 = "";

function nameEntered(element) {
        let x = element.getAttribute("id");
//        let z = element.getAttribute("name");
        let y = document.getElementById(x).value;
        players.push(y);
        document.getElementById(x).disabled = true;
//        document.getElementById("input1").style.backgroundColor = "darkred";
//        document.getElementById("input1").style.color = "#ffffff";
//        document.getElementById("input1").style.borderColor = "#ffffff";
}

let teamA = [];
teamA = players;
// due to the references in object, function and arrays, both teamA and players are pointing to the same memory location (references). 
//whatever changes in teamA same applied to players array.
let teamB = [];

function select_random() {
    if (players.length < "10") {
        alert("Please enter all players' name!")
    } else {
        for (let k = 0; k <11; k++) {
            window["player"+(k+1)] = new String(); // <--create 10 global string object without naming them manually in the beginning.
            window["player"+(k+1)] = players[k]; // k+1 are integers thus need to add first before it convert to string player (0+1), which is player1.
            // typeof the variable is based on the value whether it is primitive value such as string, integer, null, undefine, boolean or symbols.
            // so in this case i am trying to create a variable with a string value, thus using new String constructor will do the job.
        }
        for (let i = 0; i < teamA.length; i++) {
            let number = Math.floor(Math.random() * teamA.length);
            //<-- based on the players length it will randomly select a number which doesn't exceed the players length.
            teamB.push(teamA[number]);
            teamA.splice(number, 1);
        }
        let teams = document.getElementsByClassName("team");
        //An array was created in teams variable
        let j;
        for (j = 0; j < teams.length; j++) {
            teams[j].style.display = "block";
        }
        let t = document.getElementById("yourFate");
        t.style.display = "block";
        let u = document.getElementById("teamSec");
        u.style.display = "flex";
        let w = document.getElementById("chooseBtn");
        //An array was created in teams variable
        w.style.display = "block";
        let x = document.getElementById("submitBtn");
        x.style.display = "none";
        let y = document.getElementById("playerForm");
        y.style.display = "none";
        let z = document.getElementById("instructText");
        z.style.display = "none";
    }

    //randomly select first 5 players from var players
    //after select one player, you can't select the same player again, it has to be removed from the array.
    // use the method to take out one player at a time into another array.
    //put them into Team A list
    //put the rest into Team B list
    //return Team A and B list into the document.
}

let demoA = document.getElementById("homeA");
let demoB = document.getElementById("guestB");

function chooseTeam() {
    let i;
    let g = demoA.children;
    // g is HTML Collection [0] div.playerDiv, [1] div.playerDiv.... and so on.
    for (i = 0; i < teamA.length; i++) {
        let x = g[i].firstElementChild;
        let para = document.createElement("p"); 
        let node = document.createTextNode(teamA[i]);
        para.appendChild(node); // add the textnode to p tag
        g[i].insertBefore(para, g[i].childNodes[0]); //insert the para before the first node of the g[i];
    }
    let j;
    let h = demoB.children;
    for (j = 0; j < teamA.length; j++) {
        let x = h[j].firstElementChild;
        let para = document.createElement("p"); 
        let node = document.createTextNode(teamB[j]);
        para.appendChild(node);
        h[j].insertBefore(para, h[j].childNodes[0]);
    }
//    let w = document.getElementById("yourFate");
//    w.style.display = "none";
    let x = document.getElementById("chooseBtn");
    x.style.display = "none";
    let y = document.getElementById("chrono");
    y.style.display = "block";
    let z = document.getElementById("clockSetting");
    z.style.display = "flex";
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

var mySong= document.getElementById("myAudio"); 

function init() {
    drawCircle(createCircle(), ctx);
    drawChrono(0, font, ctx)
}

function start() {
    status = 'r';
    animate();
    mySong.play();
}

function pause() {
    status = 'p';
    dTime = time;
    mySong.pause();
}

function reset() {
    status = 's';
    dTime = 0;
    clearCanvas(ctx, cnv);
    init();
    mySong.currentTime = 0;
    mySong.pause();
}

init();

let home = document.getElementById("team1");
let homePlus = document.getElementById("homeplus");
let homeMinus = document.getElementById("homeminus");
let away = document.getElementById("team2");
let awayPlus = document.getElementById("awayplus");
let awayMinus = document.getElementById("awayminus");

let homeScore = 0;
let awayScore = 0;
homePlus.addEventListener('click', function() {
    if (homeScore >= 0) {
        homeScore += 1;
        home.innerHTML = homeScore;
    } else {
        homeScore;
    }
});
homeMinus.addEventListener('click', function() {
    if (homeScore >= 1) {
        homeScore -= 1;
        home.innerHTML = homeScore;
    } else {
        homeScore;
    }
});

awayPlus.addEventListener('click', function() {
    if (awayScore >= 0) {
        awayScore += 1;
        away.innerHTML = awayScore;
    } else {
        awayScore;
    }
    
})
awayMinus.addEventListener('click', function() {
    if (awayScore >= 1) {
        awayScore -= 1;
        away.innerHTML = awayScore;
    } else {
        awayScore;
    }
});

let roundNum = document.getElementById("roundnum");
let roundScore = 0;
let roundPlus = document.getElementById("roundplus");
let roundMinus = document.getElementById("roundminus");

roundPlus.addEventListener('click', function() {
    if ((roundScore <= 3) && (roundScore >= 0)) {
        roundScore += 1;
        roundNum.innerHTML = roundScore;
    } else  if (roundScore == 4) {
        roundScore;
    } else {
        roundScore;
    }
});

roundMinus.addEventListener('click', function() {
    if ((roundScore <= 4) && (roundScore >= 1)) {
        roundScore -= 1;
        roundNum.innerHTML = roundScore;
    } else  if (roundScore == 0 ) {
        roundScore;
    } else {
        roundScore;
    }
});
//var x = document.getElementById("player1Puls").nextSibling.innerHTML;
function addScore(element) {
    let y = element.nextElementSibling.id;
    let z = document.getElementById(y).innerHTML;
    let x = parseInt(z);
    x +=1;
    document.getElementById(y).innerHTML = x;
}

function deductScore(element) {
    let y = element.previousElementSibling.id;
    let z = document.getElementById(y).innerHTML;
    let x = parseInt(z);
    x -=1;
    document.getElementById(y).innerHTML = x;
}
//function nameEntered(element) {
//        let x = element.getAttribute("id");
////        let z = element.getAttribute("name");
//        let y = document.getElementById(x).value;
//        players.push(y);
//        document.getElementById(x).disabled = true;
//}

//function select_captain(team) {
//    //from the list, randomly choose a captain.
//    //return the chosen one to the team list.
//}
//
//select_captain(teamA);
if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/IEMobile/i) ||
    navigator.userAgent.match(/Windows Phone/i)) {
    window.scrollTo(0, 0); // reset in case prev not scrolled  
    var nPageH = $(document).height();
    var nViewH = window.outerHeight;
    if (nViewH > nPageH) {
        nViewH -= 250;
        $('BODY').css('height', nViewH + 'px');
    }
    window.scrollTo(0, 1);
}