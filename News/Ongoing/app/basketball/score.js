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

//let q = document.getElementById("appName");
//q.style.display = "none";
//let r = document.getElementById("yourFate");
//r.style.display = "none";
//let s = document.getElementById("instructText");
//s.style.display = "none";
//let t = document.getElementById("playerForm");
//t.style.display = "none";
//let u = document.getElementById("manual1");
//u.style.display = "none";
//let v = document.getElementById("teamSec");
//v.style.display = "flex";
//let w = document.getElementById("playerSetting");
//w.style.display = "flex";
//let x = document.getElementById("scoreboard");
//x.style.display = "flex";

function displayTeam() {
    if (players.length < "24") {
        alert("Please enter all players' name!")
    } else {
        teamA = players.splice(0, 12);
        teamB = players;
        nameA = teams.splice(0, 1);
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

// Add this to Andrew Code
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
        } else {
            foulReset(u, v, z);
        }
        let a = document.getElementById("homeFoul");
        foulTotal(homeTf, a);
        foulMax(homeTf, a); 
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
        let a = document.getElementById("awayFoul");
        foulTotal(awayTf, a);
        foulMax(awayTf, a);
    }
}

// Add this to Andrew Code
function foulTotal(element, x) {
    if (element >4) {
        x.classList.add("highLighRed");
    } else {
        x.classList.remove("highLighRed");
    }
}
function foulMax(element, x) {
    if (element > 5) {
        x.innerHTML = 5;
    }
}

// Add this to Andrew Code No.482
function resetTeamFoul() {
    homeTf = 0;
    document.getElementById("homeFoul").innerHTML = homeTf;
    document.getElementById("homeFoul").classList.remove("highLighRed");
    awayTf = 0;
    document.getElementById("awayFoul").innerHTML = awayTf;
    document.getElementById("awayFoul").classList.remove("highLighRed");
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

function removeBg(element) {
    let x = element.parentElement; //NoDisplay
    let y = x.previousElementSibling.id; 
    element.classList.remove("overlay");
    x.classList.remove("calBtn");
    let z = document.getElementById(y);
    z.classList.remove("hLight");
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
    if (v == "foulLeft") {
        document.getElementById(v).classList.add("showArrow-left");
        let x = document.getElementById("foulRight");
        x.classList.remove("showArrow-right");
    } else {
        document.getElementById(v).classList.add("showArrow-right");
        let x = document.getElementById("foulLeft");
        x.classList.remove("showArrow-left");
    }
}



// Andrew Code

$(function () {
    // Cache some selectors
    var clock = $('#clock');
    var myClock = $('#clock_1');
    var myTimeout = $('#clock_2');
    var myQuater = $('#quater_change');
    var mySound = $('#sound');
    var vid = document.getElementById("myAudio"); 
    myButton = myClock.find('#faul');
    myTimeButton = myTimeout.find('#timeout');

    // Map digits to their names (this will be an array)
    var digit_to_name = 'nine eight seven six five four three two one zero'.split(' ');
    var digit_to_quater = '1ST 2ND 3RD 4TH'.split(' ');

    // This object will hold the digit elements
    var digits = {};

    // Positions for the hours, minutes, and seconds
    var positions = ['s1', 's2'];
    var position_1 = ['m1', 's3', ':', 's4', 's5']
    //        f          c     d
    var position_2 = ['s6', 's7']
    //Variables of number fo timer
    let varTimeOutS6 = 4;// Timeout
    let varTimeOutS7 = 1;
    let varQuater = 0; // Quater
    let var24_1 = 7; // 24s, 14s
    let var24_2 = 6; 
    let varMinS4 = 4; // Minit's 60s
    let varMinS5 = 0; 
    let varMinS3_5 = 5; // Minit's S3 (0[S3]:00)
    let varMinS3_6 = 4;
    let varMinS3_7 = 3;
    let varMinS3_8 = 2;
    let varMinS3_9 = 1;
    let varMinS3_10 = 0;
    let varMinS3_11 = 9;
    let varMinS3_12 = 8;
    let varMinS3_13 = 7;
    let varMinS3_14 = 6;
    let varMinS3_15 = 5;
    let varMinM1 = 9; //Minit's M1 ([M1]0:00), only change between 1 and 0;
    let varMinM2 = 8;
    let myInterval = -1;
    let myTimeterval = -1;
    // Generate the digits with the needed markup,
    // and add them to the clock

    var digit_holder = clock.find('.digits');
    var digitholder = myClock.find('.digits_1');
    var digitHolder = myTimeout.find('.digits_2');

    $.each(positions, function () {
        if (this == 's1') {
            var pos = $('<div class="' + digit_to_name[var24_1] + '">');

            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digit_holder.append(pos);
        }
        if (this == 's2') {
            var pos = $('<div class="' + digit_to_name[5] + '">');
            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digit_holder.append(pos);
        }

    });

    $.each(position_1, function () {
        if (this == ':') {
            digitholder.append('<div class="dots">');
        } else if (this == 'm1') {
            var pos = $('<div class="' + digit_to_name + '">');

            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digitholder.append(pos);
        } else {
            var pos = $('<div class="' + digit_to_name[9] + '">');

            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digitholder.append(pos);

        }
    });
    $.each(position_2, function () {
        if (this == 's6') {
            var pos = $('<div class="' + digit_to_name[3] + '">');

            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digitHolder.append(pos);
        } else {
            var pos = $('<div class="' + digit_to_name[9] + '">');
            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digitHolder.append(pos);
        }

    });
    function playVid() { 
       vid.play();
       console.log('work')
    }
    var silentSet = false;
    function silent() {
        silentSet = true;
        var24_1 = 9;
        var24_2 = 9;
        digits.s1.attr('class', digit_to_name[9]);
        digits.s2.attr('class', digit_to_name[9]);
    }
    //i = five[4] , k = two[7]
    function update_timeout() {
        digits.s6.attr('class', digit_to_name[varTimeOutS6]);
        digits.s7.attr('class', digit_to_name[varTimeOutS7]);
        varTimeOutS7++;
        if (varTimeOutS7 == 10) {
            varTimeOutS7 = 0;
            varTimeOutS6++;
        }
        if (varTimeOutS6 >= 10) {
            clearInterval(myTimeterval);
            digits.s6.attr('class', digit_to_name[9]);
            digits.s7.attr('class', digit_to_name[9]);
            varTimeOutS6 = 4;
            playVid();
        }

    };

    function quater_change(x, y) {
        if (varQuater >= 4) {
            varQuater = 0;
        } else {
            let r = alert("ARE YOU SURE");
            if (r !== "true") {
            var24_1 = 7; // 24s, 14s
            var24_2 = 5; 
            varMinS4 = 3; // Minit's 60s
            varMinS5 = 9; 
            varMinS3_5 = 5; // Minit's S3 (0[S3]:00)
            varMinS3_6 = 4;
            varMinS3_7 = 3;
            varMinS3_8 = 2;
            varMinS3_9 = 1;
            varMinS3_10 = 0;
            varMinS3_11 = 9;
            varMinS3_12 = 8;
            varMinS3_13 = 7;
            varMinS3_14 = 6;
            varMinS3_15 = 5;
            varMinM1 = 9; //Minit's M1 ([M1]0:00), only change between 1 and 0;
            varMinM2 = 8;
            varQuater++;
            z = 0;
            }
            myQuater.html(digit_to_quater[varQuater]);
            digits.s1.attr('class', digit_to_name[var24_1]);
            digits.s2.attr('class', digit_to_name[var24_2]);
            digits.m1.attr('class', digit_to_name[x]);
            digits.s3.attr('class', digit_to_name[y]);
            digits.s4.attr('class', digit_to_name[9]);
            digits.s5.attr('class', digit_to_name[9]);
            myButton.html("Resume");
            clearInterval(myInterval);
            myInterval = -1;
            resetTeamFoul();
        }
    }
    let z = 0;
    function timeFormat(x, y, a, b) {
        let setMin = parseInt($('#InputId').val())
        digits.s1.attr('class', digit_to_name[a]);
        digits.s2.attr('class', digit_to_name[b]);
        digits.s4.attr('class', digit_to_name[varMinS4 + x]);
        digits.s5.attr('class', digit_to_name[varMinS5 + y]);

        if (setMin == 5) {
            let conCat = varMinS3_5 + z
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_5 = 5;
               z = 4;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_5 = 5;
               z = -5;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 4)
            }
            console.log(conCat, z, varMinM1);
        }
        if (setMin == 6) {
            let conCat = varMinS3_6 + z
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_6 = 6;
               z = 3;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_6 = 6;
               z = -6;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 3)
            }
            console.log(conCat, z)
        }
        if (setMin == 7) {
            let conCat = varMinS3_7 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_7 = 7;
               z = 2;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_7 = 7;
               z = -7;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 2)
            }
        }
        if (setMin == 8) {
            let conCat = varMinS3_8 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_8 = 8;
               z = 1;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_8 = 8;
               z = -8;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 1)
            }
        }
        if (setMin == 9) {
            let conCat = varMinS3_9 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[varMinS3_9]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_9 = 9;
               z = 0;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_9 = 9;
               z = -9;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 0)
            }
        }
        if (setMin == 10) {
            let conCat = varMinS3_10 + z
            digits.m1.attr('class', digit_to_name[varMinM1]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_10 = 0;
               z = 9;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_10 = 0;
               z = 0;
            }
            if(varMinM1 >= 10) {
                quater_change(8, 9)
            }
            console.log(conCat, z, varMinM1)
        }
        if (setMin == 11) {
            let conCat = varMinS3_11 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_11 = 9;
               z = 0;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_11 = 9;
               z = -9;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 8)
            }
        }
        if (setMin == 12) {
            let conCat = varMinS3_12 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_12 = 8;
               z = 1;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_12 = 8;
               z = -8;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 7)
            }
        }
        if (setMin == 13) {
            let conCat = varMinS3_13 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_13 = 7;
               z = 2;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_13 = 7;
               z = -7;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 6)
            }
        }
        if (setMin == 14) {
            let conCat = varMinS3_14 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_14 = 6;
               z = 3;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_14 = 6;
               z = -6;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 5)
            }
        }
        if (setMin == 15) {
            let conCat = varMinS3_15 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_15 = 5;
               z = 4;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_15 = 5;
               z = -5;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 4)
            }
        }
    }
    function update_time() {
        timeFormat(0, 0, var24_1, var24_2);
        var24_2++;
        if (var24_2 == 10) {
            var24_2 = 0;
            var24_1++;
        }
        if(var24_1 >= 10 && silentSet === true) {
            digits.s2.attr('class', digit_to_name[9]);
            console.log('work1')
        }else if (var24_1 >= 10 ){
            playVid();
            digits.s2.attr('class', digit_to_name[9]);
            silentSet = true;
            console.log('work2')
        }else {
            console.log('work3')

        }
        varMinS5++;
        if (varMinS5 >= 10) {
            varMinS5 = 0;
            varMinS4++;
        }
        if(z >= 10) {
            z = 0
        }
        if (varMinS4 >= 10) {
            varMinS4 = 4;
            varMinS3_5++;
            varMinS3_6++;
            varMinS3_7++;
            varMinS3_8++;
            varMinS3_9++;
            varMinS3_10++;
            varMinS3_11++;
            varMinS3_12++;
            varMinS3_13++;
            varMinS3_14++;
            varMinS3_15++;
        }
        console.log(var24_1)
    }
    $('#24s').click(function () {
        var24_1 = 7;
        var24_2 = 5;
        digits.s1.attr('class', digit_to_name[7]);
        digits.s2.attr('class', digit_to_name[5]);
        silentSet = false;
    });
    $('#14s').click(function () {
        var24_1 = 8;
        var24_2 = 5;
        digits.s1.attr('class', digit_to_name[8]);
        digits.s2.attr('class', digit_to_name[5]);
        silentSet = false;
    });
    $('#00s').click(silent);
    $('#timeout').click(function () {
        if (myTimeterval == -1) {
            myTimeterval = setInterval(update_timeout, 1000);
            myButton.html("Resume");
            clearInterval(myInterval);
            myInterval = -1;
            myTimeButton.html('Cancel');
            digits.s6.attr('class', digit_to_name[4]);
            digits.s7.attr('class', digit_to_name[0]);
        } else {
            myTimeButton.html("Timeout");
            clearInterval(myTimeterval);
            myTimeterval = -1;
            varTimeOutS7 = 1;
            varTimeOutS6 = 4;
            digits.s6.attr('class', digit_to_name[3]);
            digits.s7.attr('class', digit_to_name[9]);
        }

    });
    $('#quater_change').click(function () {
        varQuater++
        myQuater.html(digit_to_quater[varQuater]);
        if (varQuater >= 4) {
        myQuater.html(digit_to_quater[0]);
            varQuater = 0;
        }
        
    })
    $('#plusMin').click(() => {
        let setMin = parseInt($('#InputId').val())
        digits.s1.attr('class', digit_to_name[var24_1]);
        digits.s2.attr('class', digit_to_name[var24_2 - 1]);
        digits.s4.attr('class', digit_to_name[varMinS4 + 9]);
        digits.s5.attr('class', digit_to_name[varMinS5 + 9]);

        if (setMin == 5) {
            let conCat = varMinS3_5 + z
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_5 = 5;
               z = 4;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_5 = 5;
               z = -5;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 4)
            }
            if(conCat == 5 && varMinM1 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
            console.log(conCat, z, varMinM1);
        }
        if (setMin == 6) {
            let conCat = varMinS3_6 + z
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_6 = 6;
               z = 3;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_6 = 6;
               z = -6;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 3)
            }
            if(conCat == 5 && varMinM1 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
            console.log(conCat, z)
        }
        if (setMin == 7) {
            let conCat = varMinS3_7 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_7 = 7;
               z = 2;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_7 = 7;
               z = -7;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 2)
            }
            if(conCat == 5 && varMinM1 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
        if (setMin == 8) {
            let conCat = varMinS3_8 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_8 = 8;
               z = 1;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_8 = 8;
               z = -8;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 1)
            }
            if(conCat == 5 && varMinM1 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
        if (setMin == 9) {
            let conCat = varMinS3_9 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[varMinS3_9]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_9 = 9;
               z = 0;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_9 = 9;
               z = -9;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 0)
            }
            if(conCat == 5 && varMinM1 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
        if (setMin == 10) {
            let conCat = varMinS3_10 + z
            digits.m1.attr('class', digit_to_name[varMinM1]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_10 = 0;
               z = 9;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_10 = 0;
               z = 0;
            }
            if(varMinM1 >= 10) {
                quater_change(8, 9)
            }
            if(conCat == 5 && varMinM1 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
        if (setMin == 11) {
            let conCat = varMinS3_11 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_11 = 9;
               z = 0;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_11 = 9;
               z = -9;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 8)
            }
            if(conCat == 5 && varMinM2 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
        if (setMin == 12) {
            let conCat = varMinS3_12 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_12 = 8;
               z = 1;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_12 = 8;
               z = -8;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 7)
            }
            if(conCat == 5 && varMinM2 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
        if (setMin == 13) {
            let conCat = varMinS3_13 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_13 = 7;
               z = 2;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_13 = 7;
               z = -7;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 6)
            }
            if(conCat == 5 && varMinM2 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
        if (setMin == 14) {
            let conCat = varMinS3_14 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_14 = 6;
               z = 3;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_14 = 6;
               z = -6;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 5)
            }
            if(conCat == 5 && varMinM2 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
        if (setMin == 15) {
            let conCat = varMinS3_15 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_15 = 5;
               z = 4;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_15 = 5;
               z = -5;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 4)
            }
            if(conCat == 5 && varMinM2 == 8) {
                console.log("cant change")
            }else {
                z--;
            }
        }
    })
    $('#minusMin').click(() => {
        let setMin = parseInt($('#InputId').val())
        digits.s1.attr('class', digit_to_name[var24_1]);
        digits.s2.attr('class', digit_to_name[var24_2 - 1]);
        digits.s4.attr('class', digit_to_name[varMinS4 + 9]);
        digits.s5.attr('class', digit_to_name[varMinS5 + 9]);

        if (setMin == 5) {
            let conCat = varMinS3_5 + z
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_5 = 5;
               z = 4;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_5 = 5;
               z = -5;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 4)
            }
            if(conCat == 9 && varMinM1 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
            console.log(conCat, z, varMinM1);
        }
        if (setMin == 6) {
            let conCat = varMinS3_6 + z
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_6 = 6;
               z = 3;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_6 = 6;
               z = -6;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 3)
            }
            if(conCat == 9 && varMinM1 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
            console.log(conCat, z)
        }
        if (setMin == 7) {
            let conCat = varMinS3_7 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_7 = 7;
               z = 2;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_7 = 7;
               z = -7;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 2)
            }
            if(conCat == 9 && varMinM1 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
        if (setMin == 8) {
            let conCat = varMinS3_8 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_8 = 8;
               z = 1;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_8 = 8;
               z = -8;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 1)
            }
            if(conCat == 9 && varMinM1 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
        if (setMin == 9) {
            let conCat = varMinS3_9 + z  
            digits.m1.attr('class', digit_to_name[varMinM1])
            digits.s3.attr('class', digit_to_name[varMinS3_9]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_9 = 9;
               z = 0;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_9 = 9;
               z = -9;
            }
            if(varMinM1 >= 10) {
                quater_change(9, 0)
            }
            if(conCat == 9 && varMinM1 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
        if (setMin == 10) {
            let conCat = varMinS3_10 + z
            digits.m1.attr('class', digit_to_name[varMinM1]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM1--; 
               varMinS3_10 = 0;
               z = 9;
            }
            if (conCat >= 10) {
               varMinM1++; 
               varMinS3_10 = 0;
               z = 0;
            }
            if(varMinM1 >= 10) {
                quater_change(8, 9)
            }
            if(conCat == 9 && varMinM1 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
        if (setMin == 11) {
            let conCat = varMinS3_11 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_11 = 9;
               z = 0;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_11 = 9;
               z = -9;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 8)
            }
            if(conCat == 9 && varMinM2 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
        if (setMin == 12) {
            let conCat = varMinS3_12 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_12 = 8;
               z = 1;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_12 = 8;
               z = -8;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 7)
            }
            if(conCat == 9 && varMinM2 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
        if (setMin == 13) {
            let conCat = varMinS3_13 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_13 = 7;
               z = 2;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_13 = 7;
               z = -7;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 6)
            }
            if(conCat == 9 && varMinM2 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
        if (setMin == 14) {
            let conCat = varMinS3_14 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_14 = 6;
               z = 3;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_14 = 6;
               z = -6;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 5)
            }
            if(conCat == 9 && varMinM2 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
        if (setMin == 15) {
            let conCat = varMinS3_15 + z
            digits.m1.attr('class', digit_to_name[varMinM2]);
            digits.s3.attr('class', digit_to_name[conCat]);
            if (conCat <= -1) {
               varMinM2--; 
               varMinS3_15 = 5;
               z = 4;
            }
            if (conCat >= 10) {
               varMinM2++; 
               varMinS3_15 = 5;
               z = -5;
            }
            if(varMinM2 >= 10) {
                quater_change(8, 4)
            }
            if(conCat == 9 && varMinM2 == 9) {
                console.log("cant change")
            }else {
                z++;
            }
        }
    })

    $('#manual1').click(function () {
        displayTeam();
//        $('#showInput').fadeToggle(500);
        $('#2_page').fadeIn(1000);
        let setMin = parseInt($('#InputId').val())
        if (setMin == 5) {
            digits.m1.attr('class', digit_to_name[9]);
            digits.s3.attr('class', digit_to_name[4]);
        }
        if (setMin == 6) {
            digits.m1.attr('class', digit_to_name[9]);
            digits.s3.attr('class', digit_to_name[3]);
        }
        if (setMin == 7) {
            digits.m1.attr('class', digit_to_name[9]);
            digits.s3.attr('class', digit_to_name[2]);
        }
        if (setMin == 8) {
            digits.m1.attr('class', digit_to_name[9]);
            digits.s3.attr('class', digit_to_name[1]);
        }
        if (setMin == 9) {
            digits.m1.attr('class', digit_to_name[9]);
            digits.s3.attr('class', digit_to_name[0]);
        }
        if (setMin == 10) {
            digits.m1.attr('class', digit_to_name[8]);
            digits.s3.attr('class', digit_to_name[9]);
        }
        if (setMin == 11) {
            digits.m1.attr('class', digit_to_name[8]);
            digits.s3.attr('class', digit_to_name[8]);
        }
        if (setMin == 12) {
            digits.m1.attr('class', digit_to_name[8]);
            digits.s3.attr('class', digit_to_name[7]);
        }
        if (setMin == 13) {
            digits.m1.attr('class', digit_to_name[8]);
            digits.s3.attr('class', digit_to_name[6]);
        }
        if (setMin == 14) {
            digits.m1.attr('class', digit_to_name[8]);
            digits.s3.attr('class', digit_to_name[5]);
        }
        if (setMin == 15) {
            digits.m1.attr('class', digit_to_name[8]);
            digits.s3.attr('class', digit_to_name[4]);
        }
    });
    myButton.click(function (event) {

        if (myInterval == -1) {
            myButton.html("Pause");
            myInterval = setInterval(update_time, 1000);
        }else {
            myButton.html("Resume");
            clearInterval(myInterval);
            myInterval = -1;
        }
       if (myTimeterval !== -1) {
            myTimeButton.html("Timeout");
            clearInterval(myTimeterval);
            myTimeterval = -1;
            varTimeOutS7 = 1;
            varTimeOutS6 = 4;
            digits.s6.attr('class', digit_to_name[3]);
            digits.s7.attr('class', digit_to_name[9]);
        }
    });
    });

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
