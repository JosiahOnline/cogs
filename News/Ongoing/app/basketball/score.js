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

let teams = [];

function teamName(element) {
    let x = element.getAttribute("id");
    let y = document.getElementById(x).value;
    teams.push(y);
}

function nameEntered(element) {
    let x = element.getAttribute("id");
    //        let z = element.getAttribute("name");
    let y = document.getElementById(x).value;
    players.push(y);
    //        document.getElementById(x).disabled = true;  - can't change after enter number.
    //        document.getElementById("input1").style.backgroundColor = "darkred";
    //        document.getElementById("input1").style.color = "#ffffff";
    //        document.getElementById("input1").style.borderColor = "#ffffff";
}

let nameA = [];
let nameB = [];

let teamA = [];
teamA = players;
// due to the references in object, function and arrays, both teamA and players are pointing to the same memory location (references). 
//whatever changes in teamA same applied to players array.
let teamB = [];


let demoA = document.getElementById("homeA");
let demoB = document.getElementById("guestB");

let q = document.getElementById("appName");
        q.style.display = "none";
        let r = document.getElementById("yourFate");
        r.style.display = "none";
        let s = document.getElementById("instructText");
        s.style.display = "none";
        let t = document.getElementById("playerForm");
        t.style.display = "none";
        let u = document.getElementById("manual1");
        u.style.display = "none";
        let v = document.getElementById("teamSec");
        v.style.display = "flex";
        let w = document.getElementById("playerSetting");
        w.style.display = "flex";        
        let x = document.getElementById("scoreboard");
        x.style.display = "flex";

function displayTeam() {
    if (players.length < "24") {
        alert("Please enter all players' name!")
    } else {
        teamA = players.splice(0, 12);
        teamB = players;
        nameA = teams.splice(0,1);
        nameB = teams;
        document.getElementById("nameHome").innerHTML = nameA;
        document.getElementById("nameAway").innerHTML = nameB;
        let q = document.getElementById("appName");
        q.style.display = "none";
        let r = document.getElementById("yourFate");
        r.style.display = "none";
        let s = document.getElementById("instructText");
        s.style.display = "none";
        let t = document.getElementById("playerForm");
        t.style.display = "none";
        let u = document.getElementById("manual1");
        u.style.display = "none";
        let v = document.getElementById("teamSec");
        v.style.display = "flex";
        let w = document.getElementById("playerSetting");
        w.style.display = "flex";        
        let x = document.getElementById("scoreboard");
        x.style.display = "flex";
        }
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
}


let home = document.getElementById("team1");
let away = document.getElementById("team2");
let homeScore = 0;
let awayScore = 0;

let homeFoul = document.getElementById("homeFoul").innerHTML;
let awayFoul = document.getElementById("awayFoul").innerHTML;

let homeTf = Number(homeFoul);
let awayTf = Number(awayFoul);

// if it is teamFoul1 or teamFoul2?
function checkFoul(element) { //id
    element.classList.add("foulColor");
    let t = element.innerHTML; //Current String Value
    let u = Number(t); //convert to integer 0, 1, 2, 3, 4, 5
    let v = element.id; // current element id
    let y = element.parentElement.parentElement; 
    let z = y.id; // Either homeA or guestB
        if (z == "homeA") {
            if (u < 4) {
                u += 1;
                document.getElementById(v).innerHTML = u;
                homeTf += 1;
                document.getElementById("homeFoul").innerHTML = homeTf;
            } else if (u == 4) {
                element.classList.add("foulOut");
                u += 1;
                document.getElementById(v).innerHTML = u;
                homeTf += 1;
                document.getElementById("homeFoul").innerHTML = homeTf;
            }  else {
                foulReset(u, v, z);
            }
        } else {
            if (u < 4) {
                u += 1;
                document.getElementById(v).innerHTML = u;
                awayTf += 1;
                document.getElementById("awayFoul").innerHTML = awayTf;
            } else if (u == 4) {
                element.classList.add("foulOut");
                u += 1;
                document.getElementById(v).innerHTML = u;
                awayTf += 1;
                document.getElementById("awayFoul").innerHTML = awayTf;
            } else {
                foulReset(u, v, z);
            }   
        }
}

function foulReset(u, v, z) {
    if (confirm("Do you want to reset this player's foul?")) {
        // Save it!
        let x = document.getElementById(v);
        x.classList.remove("foulOut");
        x.classList.remove("foulColor");
        u = 0;
        document.getElementById(v).innerHTML = u;
        if (z == "homeA") {
            homeTf -= 5;
            document.getElementById("homeFoul").innerHTML = homeTf;
        } else {
            awayTf -= 5;
            document.getElementById("awayFoul").innerHTML = awayTf;
        }
        
    }                
}
// Take the current value of the specific player
// Increase the value by 1 for current teamFoul
// Increase the value by 1 of current value of specific player
// if the current value of the specific player = 4, then make it red.
// if the current value of the specific player = 5, then set the value back to 0, make it transparent.


function showBtn(element) {
    let x = element.id;
    document.getElementById(x).classList.add("hLight");
    let w = element.nextElementSibling;
    w.classList.add("calBtn");
//    w.classList.toggle("transform-active");
    let y = w.children;
    y[0].classList.add("scorebtn1");
    y[1].classList.add("scorebtn1");
    y[2].classList.add("scorebtn1");
    y[3].classList.add("scorebtn1");
    y[4].classList.add("overlay");
}
function addScore(element) {
    let t = element.innerHTML; //Current String Value
    let u = Number(t); //convert to integer +3, +2, +1 or -1
    let v = element.parentElement.parentElement.parentElement; //Great Grandparent either homeA or guestB element
    let w = element.parentElement; //next sibling
    let y = w.previousElementSibling.id; // playerScore id
    let z = document.getElementById(y).innerHTML; // teamScore current value
    let x = parseInt(z); //Change the string to integer
    x += u;
    document.getElementById(y).innerHTML = x;
    if (v.id == "homeA") {
        homeScore += u;
        home.innerHTML = homeScore;
        document.getElementById(y).classList.remove("hLight");
    } else {
        awayScore += u;
        away.innerHTML = awayScore;
        document.getElementById(y).classList.remove("hLight");
    }
    removeBtn(w, y);
}

function removeBtn(w, y) {
    w.classList.remove("calBtn");
    let x = w.lastElementChild; //y[4] which is class bground
    x.classList.remove("overlay");
    document.getElementById(y).classList.remove("hLight");
}

function deductScore(element) {
    let v = element.parentElement.parentElement.parentElement;
    let w = element.parentElement; //next sibling
    let y = w.previousElementSibling.id;
    let z = document.getElementById(y).innerHTML;
    let x = parseInt(z);
    if (x >= 1) { //to avoid -1 and all negative value;
        x -= 1;
        document.getElementById(y).innerHTML = x;
        if (v.id == "homeA") {
            homeScore -= 1;
            home.innerHTML = homeScore;
            document.getElementById(y).classList.remove("hLight");
        } else {
            awayScore -= 1;
            away.innerHTML = awayScore;
            document.getElementById(y).classList.remove("hLight");
        }
    }
    removeBtn(w, y);
}

function whoseTurn(element) {
    let v = element.id;
    if (v =="foulLeft") {
        document.getElementById(v).classList.add("showArrow-left");
        let x = document.getElementById("foulRight");
        x.classList.remove("showArrow-right");
    } else {
        document.getElementById(v).classList.add("showArrow-right");
        let x = document.getElementById("foulLeft");
        x.classList.remove("showArrow-left");
    }
}

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

