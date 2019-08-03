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



let roundNum = document.getElementById("roundnum");
let roundScore = 0;
let roundPlus = document.getElementById("roundplus");
let roundMinus = document.getElementById("roundminus");

roundPlus.addEventListener('click', function () {
    if ((roundScore <= 4) && (roundScore >= 0)) {
        roundScore += 1;
        roundNum.innerHTML = roundScore;
    } else {
        roundScore;
    }
});

let home = document.getElementById("team1");
let away = document.getElementById("team2");
let homeScore = 0;
let awayScore = 0;

let teamFoul1 = document.getElementById("teamFoul1");
let teamFoul2 = document.getElementById("teamFoul2");
let homeFoul = 0;
let awayFoul = 0;

function foulCal (element) {
    let t = element.innerHTML; //Current String Value
    let u = Number(t); //convert to integer 0, 1, 2, 3, 4, 5
    let v = element.parentElement.parentElement; // Either homeFoul or awayFoul
    let y = element.id; //
    document.getElementById(y).innerHTML = t;
//    alert("Button clicked, id "+element.id+", text"+element.innerHTML); useful to get the id.
    
    
    if (v.id == "homeA") {
        if (homeFoul == 5) { 
            console.log(teamFoul1);
            console.log(u);
        } else {
            u +=1;
            teamFoul1.innerHTML = u;
            console.log(teamFoul1);
            
            homeFoul += 1;
            document.getElementById("teamFoul1").innerHTML = homeFoul;
            document.getElementById(y).innerHTML =homeFoul;
    
        } 
    }
}

function showBtn(element) {
    let w = element.nextElementSibling;
    w.classList.add("calBtn");
    let y = w.children;
    y[0].classList.add("scorebtn1");
    y[1].classList.add("scorebtn1");
    y[2].classList.add("scorebtn1");
    y[3].classList.add("scorebtn1");
}
function addScore(element) {
    let t = element.innerHTML; //Current String Value
    let u = Number(t); //convert to integer +3, +2, +1 or -1
    let v = element.parentElement.parentElement.parentElement; //Great Grandparent either homeA or guestB element
    let w = element.parentElement; //next sibling
    let y = w.previousElementSibling.id; // teamScore id
    let z = document.getElementById(y).innerHTML; // teamScore current value
    let x = parseInt(z); //Change the string to integer
    x += u;
    document.getElementById(y).innerHTML = x;
    if (v.id == "homeA") {
        homeScore += u;
        home.innerHTML = homeScore;
    } else {
        awayScore += u;
        away.innerHTML = awayScore;
    }
    removeBtn(w);
}

function removeBtn(element) {
    element.classList.remove("calBtn");
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
        } else {
            awayScore -= 1;
            away.innerHTML = awayScore;
        }
    }
    removeBtn(w);
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

