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

function foulTotal(element, x) {
    if (element >4) {
        x.classList.add("highLighRed");
    } else {
        x.classList.remove("highLighRed");
    }
}

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
    var myQuater = $('#quater_change')
    myButton = myClock.find('#faul');
    myTimeButton = myTimeout.find('#timeout');

    // Map digits to their names (this will be an array)
    var digit_to_name = 'nine eight seven six five four three two one zero'.split(' ');
    var digit_to_quater = 'FIRST SECOND THIRD FOURT'.split(' ');

    // This object will hold the digit elements
    var digits = {};

    // Positions for the hours, minutes, and seconds
    var positions = ['s1', 's2'];
    var position_1 = ['m1', 's3', ':', 's4', 's5']
    //        f          c     d
    var position_2 = ['s6', 's7']

    let i = 6; //three
    let k = 7; //two
    let a = 9; //zero
    let b = 8; //nine
    let a_1 = 8;
    let a_2 = 7;
    let a_3 = 6;
    let a_4 = 5;
    let b_1 = 8;
    let b_2 = 8;
    let b_3 = 8;
    let b_4 = 8;
    let c = 4; //five
    let d = 0; //nine
    let e = 1;
    let f = 1;
    let z = 4;
    let q = 0;
    let myInterval = -1;
    let myTimeterval = -1;
    // Generate the digits with the needed markup,
    // and add them to the clock

    var digit_holder = clock.find('.digits');
    var digitholder = myClock.find('.digits_1');
    var digitHolder = myTimeout.find('.digits_2');

    $.each(positions, function () {
        if (this == 's1') {
            var pos = $('<div class="' + digit_to_name[k] + '">');

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

    //i = five[4] , k = two[7]
    function update_timeout() {
        digits.s6.attr('class', digit_to_name[z]);
        digits.s7.attr('class', digit_to_name[e]);
        e++;
        if (e == 10) {
            e = 0;
            z++;
        }
        if (z >= 10) {
            clearInterval(myTimeterval);
            digits.s6.attr('class', digit_to_name[9]);
            digits.s7.attr('class', digit_to_name[9]);
            z = 4;
        }
        console.log(e, z)

    };

    function quater_change(x, y) {
        if (q >= 4) {
            alert('Match had ended');
            $('#page_2').hide;
            $('#page_3').fadeIn;
            q = 0;
        } else {
            let r = alert("ARE YOU SURE");
            if (r !== "true") {
                i = 5; //three
                k = 7; //two
                a = 9; //zero
                b = 8; //nine
                a_1 = 8;
                a_2 = 7;
                a_3 = 6;
                a_4 = 5;
                b_1 = 8;
                b_2 = 8;
                b_3 = 8;
                b_4 = 8;
                c = 4; //five
                d = 0;; //nine
                e = 1;
                f = 1;
                q++;
            }
            myQuater.html(digit_to_quater[q]);
            digits.s1.attr('class', digit_to_name[k]);
            digits.s2.attr('class', digit_to_name[i]);
            digits.m1.attr('class', digit_to_name[x]);
            digits.s3.attr('class', digit_to_name[y]);
            digits.s4.attr('class', digit_to_name[9]);
            digits.s5.attr('class', digit_to_name[9]);
            myButton.html("Resume");
            clearInterval(myInterval);
            myInterval = -1;
            console.log(q)
        }
    }

    function update_time() {
        let setMin = parseInt($('#InputId').val())
        digits.s1.attr('class', digit_to_name[k]);
        digits.s2.attr('class', digit_to_name[i]);
        digits.s4.attr('class', digit_to_name[c]);
        digits.s5.attr('class', digit_to_name[d]);

        if (setMin == 5) {
            digits.s3.attr('class', digit_to_name[f + 4]);
            if (f >= 6) {
                quater_change(9, 4);
            }
        }
        if (setMin == 6) {
            digits.s3.attr('class', digit_to_name[f + 3]);
            if (f >= 7) {
                quater_change(9, 3)
            }
        }
        if (setMin == 7) {
            digits.s3.attr('class', digit_to_name[f + 2]);
            if (f >= 8) {
                quater_change(9, 2)
            }
        }
        if (setMin == 8) {
            digits.s3.attr('class', digit_to_name[f + 1]);
            if (f >= 9) {
                quater_change(9, 1)
            }
        }
        if (setMin == 9) {
            digits.s3.attr('class', digit_to_name[f]);
            if (f >= 10) {
                quater_change(9, 0)
            }
        }
        if (setMin == 10) {
            digits.m1.attr('class', digit_to_name[9]);
            digits.s3.attr('class', digit_to_name[f - 1]);
            if (f >= 11) {
                quater_change(8, 9)
            }
        }
        if (setMin == 11) {
            digits.s3.attr('class', digit_to_name[a]);
            digits.m1.attr('class', digit_to_name[b]);
            if (f >= 12) {
                quater_change(8, 8)

            }
        }
        if (setMin == 12) {
            digits.s3.attr('class', digit_to_name[a_1]);
            digits.m1.attr('class', digit_to_name[b_1]);
            if (f >= 13) {
                quater_change(8, 7)
            }
        }
        if (setMin == 13) {
            digits.s3.attr('class', digit_to_name[a_2]);
            digits.m1.attr('class', digit_to_name[b_2]);
            if (f >= 14) {
                quater_change(8, 6)
            }
        }
        if (setMin == 14) {
            digits.s3.attr('class', digit_to_name[a_3]);
            digits.m1.attr('class', digit_to_name[b_3]);
            if (f >= 15) {
                quater_change(8, 5)
            }
        }
        if (setMin == 15) {
            digits.s3.attr('class', digit_to_name[a_4]);
            digits.m1.attr('class', digit_to_name[b_4]);
            if (f >= 16) {
                quater_change(8, 4)
            }
        }
        i++;
        if (i == 10) {
            i = 0;
            k++;
        }
        if (k >= 10) {
            digits.s2.attr('class', digit_to_name[9]);
        }
        d++;
        if (d >= 10) {
            d = 0;
            c++;
        }
        if (c >= 10) {
            c = 4;
            f++;
            a++;
            a_1++;
            a_2++;
            a_3++;
            a_4++;
        }
        if (a >= 10) {
            a = 0;
            b++
        }
        if (a_1 >= 10) {
            a_1 = 0;
            b_1++
        }
        if (a_2 >= 10) {
            a_2 = 0;
            b_2++
        }
        if (a_3 >= 10) {
            a_3 = 0;
            b_3++
        }
        if (a_4 >= 10) {
            a_4 = 0;
            b_4++
        }

        console.log(f, c, d)
    }
    $('#24s').click(function () {
        i = 5;
        k = 7;
        digits.s1.attr('class', digit_to_name[k]);
        digits.s2.attr('class', digit_to_name[i]);
    });
    $('#14s').click(function () {
        i = 5;
        k = 8;
        digits.s1.attr('class', digit_to_name[k]);
        digits.s2.attr('class', digit_to_name[i]);
    });

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
            e = 1;
            digits.s6.attr('class', digit_to_name[3]);
            digits.s7.attr('class', digit_to_name[9]);
        }

    });
    $('#timeChange').click(function () {
        $('#showInput').fadeToggle(500)
    });
    $('#manual1').click(function () {
        displayTeam();
//        $('#showInput').fadeToggle(500);
        $('#2_page').delay(500).fadeIn(1000);
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
        } else {
            myButton.html("Resume");
            clearInterval(myInterval);
            myInterval = -1;
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
