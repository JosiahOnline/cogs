/*global $, jQuery, alert*/
$(document).ready(function () {
    $(".visit").click(function () {
        $(".plan-visit").css('display', 'block');
        $(".plan-visit").css('overflow-y', 'scroll');

    });
    $(".close-button").click(function () {
        $(".plan-visit").css('display', 'none');
        $(".plan-visit").css('overflow-y', 'hidden');
    });
    $('.card__share > a').on('click', function (e) {
        e.preventDefault(); // prevent default action - hash doesn't appear in url
        $(this).parent().find('div').toggleClass('card__social--active');
        $(this).toggleClass('share-expanded');
    });
    
//    $(".slideContainer").click(function () {
//        $(".newsAutoChange").css('display', 'block');
//        $(".newsAutoChange").css('overflow', 'hidden');
//    });
//
//    $(".closeNews").click(function () {
//        $(".newsAutoChange").css('display', 'none');
//        $(".newsAutoChange").css('overflow', 'scroll');
//    });
    
    $(".share-button").click(function () {
        $(".share-button").css('display', 'none');
        $(".web__share").css('display', 'inline-block');
    });

    $(".events-icon a").click(function () {
        $("#popMessage").css('display', 'block');
        $("#popMessage").css('overflow', 'hidden');
    });

    $(".under-construction").click(function () {
        $("#popMessage").css('display', 'block');
        $("#popMessage").css('overflow', 'hidden');
    });

    $(".more h3").click(function () {
        $("#popMessage").css('display', 'block');
        $("#popMessage").css('overflow', 'hidden');
    });

    $(".pop-container a").click(function () {
        $("#popMessage").css('display', 'none');
        $("#popMessage").css('overflow-y', 'scroll');
    });

});

function openNav() {
    document.getElementById("mNav").style.display = "block";
    document.getElementById("mNav").style.overflowY = "scroll";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mNav").style.display = "none";
    document.getElementById("mNav").style.overflowY = "hidden";
}

// Disable because user can't find the menu bar especially those who are not familiar with the technologies.
//var iScrollPos = 0;
//$(window).scroll(function () {
//    var iCurScrollPos = $(this).scrollTop();
//    if (window.matchMedia("(max-width: 1024px)").matches) {
//        if (iCurScrollPos > iScrollPos) {
//            $("#scrollDown").css('display', 'none');
//        } else {
//            $("#scrollDown").css('display', 'block');
//        }
//        iScrollPos = iCurScrollPos;
//
//        var triggered_times = 0;
//        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && triggered_times === 0) {
//            $("#scrollDown").css("display", "block");
//
//            triggered_times = 1;
//        }
//    }
//});


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            if ($(".main-nav").css("z-index") === "1001") {
                $("#mNav").css('display', 'none');
            }
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500);
        }
    });

    $(function () {
        setTimeout(function () {
            $('#preloaderBG').css('opacity', '0');
        }, 1800);
    });

    $(function () {
        setTimeout(function () {
            $('#transparentBg').css('opacity', '0');
        }, 2500);
    });
    $(function () {
        setTimeout(function () {
            $('.fly-in-text').removeClass('hidden');
        }, 2500);
    });
    $(function () {
        setTimeout(function () {
            $('.chi-fly-in-text').removeClass('hidden');
        }, 2500);
    });
    $(function () {
        setTimeout(function () {
            $('.fly-in-text').removeClass('hidden');
        }, 2500);
    });
    $(function () {
        setTimeout(function () {
            $('.chi-fly-in-text').removeClass('hidden');
        }, 2500);
    });
    $(function () {
        setTimeout(function () {
            $('#preloaderBG').css('display', 'none');
        }, 3000);
    });
    $(function () {
        setTimeout(function () {
            $('#transparentBg').css('display', 'none');
        }, 3000);
    });
});

//  var timeleft = 10;
//    var downloadTimer = setInterval(function(){
//    timeleft--;
//    document.getElementById("countdowntimer").textContent = timeleft;
//    if(timeleft <= 0)
//        clearInterval(downloadTimer);
//    },1000);
//    document.getElementsByClassName("newsAutoChange").style.display = "none";
//    document.getElementsByClassName("newsAutoChange").style.overflow = "scroll";
//    


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

$(document).ready(function () {
    // set the max height
    if ((window.matchMedia('(max-height: 460px)').matches) && (window.matchMedia('(orientation: landscape)').matches)) {
        $("#rotateDevice").css("display", "block");
    } else {
        $("#rotateDevice").css("display", "none");
    }
});


//$(window).resize(function () {
//    if ((window.matchMedia('(orientation: landscape)').matches)) {
//        $("#rotateDevice").css("display", "block");
//    } else {
//        $("#rotateDevice").css("display", "none");
//    }
//});
