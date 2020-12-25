window.addEventListener('load', function() {

    const loaded = document.querySelector(".stop-scrolling");
    const loader = document.querySelector(".loader");
    const nav = document.querySelector(".nav");
    const ham = document.querySelector(".ham");
    loaded.classList.remove("stop-scrolling")
    loader.style["display"] = "none"




    let offsetAnime = 0;
    let offsetAnime2 = 0;
    if (window.screen.width > 1200) {
        offsetAnime = -400;
        howPx = 1430;
        mob = false;
        nav.style["display"] = "flex"

    } else {
        howPx = 2000;
        mob = true;
        offsetAnime = -500;
        offsetAnime2 = 400;
        ham.style["display"] = "block"
    }


    const cookieInfo = document.querySelector(".cookieInfo");

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return true;
            }
        }
        return false;
    }

    if (getCookie("acceptCookies")) {

        cookieInfo.style["display"] = "none";

    }



    const buyButton = document.querySelector(".buyButton");
    const buyButton2 = document.querySelector(".buyNow");
    const logo = document.querySelector(".logo");

    function goToForm() {
        window.location = 'form.html';
    }

    function goToMain() {
        window.location = 'index.html';
    }
    logo.addEventListener("click", goToMain);

    buyButton.addEventListener("click", goToForm);
    buyButton2.addEventListener("click", goToForm);



    const heightPage = document.documentElement.clientHeight;
    const header = document.querySelector("header");
    const icon = document.querySelector(".ham");
    let hamburgerOn = false;

    window.addEventListener('scroll', function f(e) {
        if (window.scrollY > heightPage * 0.01) {
            hamburgerOn ? header.style["background-color"] = "#f3f3f3" : header.style["background-color"] = "white";
        } else {
            hamburgerOn ? header.style["background-color"] = "white" : header.style["background-color"] = "rgb(0,0,0,0)";
        }
    });



    function menuHamburger() {
        hamburgerOn = !hamburgerOn;
        hamburgerOn ? icon.classList.replace("ham", "cancel") : icon.classList.replace("cancel", "ham");
        const links = document.querySelector(".topnav");
        if (links.style.display === "block") {
            links.style.display = "none";
            header.style["background-color"] = "white";
        } else {
            links.style.display = "block";
            header.style["background-color"] = "#f3f3f3";

        }
    }

    const buttonHamburger = document.querySelector(".hamburgerButton");
    buttonHamburger.addEventListener("click", menuHamburger);


    // CONTENT CHANGE 

    const changeButton1 = document.querySelector(".option1Button");
    const changeButton2 = document.querySelector(".option2Button");
    const changeButton3 = document.querySelector(".option3Button");
    const changeButton4 = document.querySelector(".option4Button");

    const content1 = document.querySelector(".option1");
    const content2 = document.querySelector(".option2");
    const content3 = document.querySelector(".option3");
    const content4 = document.querySelector(".option4");

    const container = document.querySelectorAll(".optionContainer");

    const videoSource = document.querySelector(".videoFilm2source");
    const videoSourcePlay = document.querySelector(".videoFilm2Dekstop");

    changeButton1.addEventListener("click", () => {
        content1.style.display = "block";
        content2.style.display = "none";
        content3.style.display = "none";
        content4.style.display = "none";
        container[0].classList.add("optionContainerStyle");
        container[1].classList.remove("optionContainerStyle");
        container[2].classList.remove("optionContainerStyle");
        container[3].classList.remove("optionContainerStyle");
        videoSourcePlay.pause();
        videoSource.src = "video/sonoeye_komorka_01.mp4";
        videoSourcePlay.load();
        videoSourcePlay.play();
    })

    changeButton2.addEventListener("click", () => {
        content2.style.display = "block";
        content1.style.display = "none";
        content3.style.display = "none";
        content4.style.display = "none";
        container[0].classList.remove("optionContainerStyle");
        container[1].classList.add("optionContainerStyle");
        container[2].classList.remove("optionContainerStyle");
        container[3].classList.remove("optionContainerStyle");
        videoSourcePlay.pause();
        videoSource.src = "video/sonoeye_komorka_02.mp4";
        videoSourcePlay.load();
        videoSourcePlay.play();
    })

    changeButton3.addEventListener("click", () => {
        content3.style.display = "block";
        content2.style.display = "none";
        content1.style.display = "none";
        content4.style.display = "none";
        container[0].classList.remove("optionContainerStyle");
        container[1].classList.remove("optionContainerStyle");
        container[2].classList.add("optionContainerStyle");
        container[3].classList.remove("optionContainerStyle");
        videoSourcePlay.pause();
        videoSource.src = "video/sonoeye_komorka_03.mp4";
        videoSourcePlay.load();
        videoSourcePlay.play();
    })

    changeButton4.addEventListener("click", () => {
        content4.style.display = "block";
        content3.style.display = "none";
        content2.style.display = "none";
        content1.style.display = "none";
        container[0].classList.remove("optionContainerStyle");
        container[1].classList.remove("optionContainerStyle");
        container[2].classList.remove("optionContainerStyle");
        container[3].classList.add("optionContainerStyle");
        videoSourcePlay.pause();
        videoSource.src = "video/sonoeye_komorka_04.mp4";
        videoSourcePlay.load();
        videoSourcePlay.play();
    })


    // CONTENT CHANGE 2 

    const menuElement1 = document.querySelector(".menuElement1");
    const menuElement2 = document.querySelector(".menuElement2");
    const menuElement3 = document.querySelector(".menuElement3");
    const menuElement4 = document.querySelector(".menuElement4");

    const menuDescribe1 = document.querySelector(".menuDescribe1");
    const menuDescribe2 = document.querySelector(".menuDescribe2");
    const menuDescribe3 = document.querySelector(".menuDescribe3");
    const menuDescribe4 = document.querySelector(".menuDescribe4");

    const menuImg = document.querySelector(".thirdPageImg");

    menuElement1.addEventListener("click", () => {
        menuDescribe1.style.display = "block";
        menuDescribe2.style.display = "none";
        menuDescribe3.style.display = "none";
        menuDescribe4.style.display = "none";
        menuElement1.style["background-color"] = "white";
        menuElement2.style["background-color"] = "";
        menuElement3.style["background-color"] = "";
        menuElement4.style["background-color"] = "";
        menuImg.style["background"] = "url(img/3_img1.png)";
        menuImg.style["background-size"] = "100% 100%";
    })

    menuElement2.addEventListener("click", () => {
        menuDescribe2.style.display = "block";
        menuDescribe1.style.display = "none";
        menuDescribe3.style.display = "none";
        menuDescribe4.style.display = "none";
        menuElement2.style["background-color"] = "white";
        menuElement1.style["background-color"] = "transparent";
        menuElement3.style["background-color"] = "transparent";
        menuElement4.style["background-color"] = "transparent";
        menuImg.style["background"] = "url(img/3_menu2.png)";
        menuImg.style["background-size"] = "100% 100%";
        el6_1.style["animation"] = "";
        el6_1.style["opacity"] = "1";
    })

    menuElement3.addEventListener("click", () => {
        menuDescribe3.style.display = "block";
        menuDescribe2.style.display = "none";
        menuDescribe1.style.display = "none";
        menuDescribe4.style.display = "none";
        menuElement3.style["background-color"] = "white";
        menuElement2.style["background-color"] = "transparent";
        menuElement1.style["background-color"] = "transparent";
        menuElement4.style["background-color"] = "transparent";
        menuImg.style["background"] = "url(img/3_menu3.png)";
        menuImg.style["background-size"] = "100% 100%";
        el6_1.style["animation"] = "";
        el6_1.style["opacity"] = "1";
    })

    menuElement4.addEventListener("click", () => {
        menuDescribe4.style.display = "block";
        menuDescribe2.style.display = "none";
        menuDescribe3.style.display = "none";
        menuDescribe1.style.display = "none";
        menuElement4.style["background-color"] = "white";
        menuElement2.style["background-color"] = "transparent";
        menuElement3.style["background-color"] = "transparent";
        menuElement1.style["background-color"] = "transparent";
        menuImg.style["background"] = "url(img/3_menu4.png)";
        menuImg.style["background-size"] = "100% 100%";
        el6_1.style["animation"] = "";
        el6_1.style["opacity"] = "1";

    })


    // VIDEO 

    const play = document.querySelector(".playIcon");
    const video = document.querySelector(".videoFilm");

    play.addEventListener("click", () => {
        play.style.zIndex = "-5";
        video.play();
    })


    // AUTO PLAY 

    const video1 = document.querySelectorAll(".videoFilm1");
    const video2 = document.querySelector(".videoFilm2");

    video1[0].play();
    video1[1].play();
    video1[2].play();
    video2.play();


    // SCROLL 

    const navElement = document.querySelectorAll(".navElement");

    const title1 = document.querySelector(".secondPage");
    const yOffset = -50;
    const y1 = title1.getBoundingClientRect().top + window.pageYOffset + yOffset;
    navElement[0].onclick = function() {
        window.scrollTo({ top: y1, behavior: 'smooth' });
    }

    const title2 = document.querySelector(".thirdPage");
    const y2 = title2.getBoundingClientRect().top + window.pageYOffset + yOffset;
    navElement[1].onclick = function() {
        window.scrollTo({ top: y2, behavior: 'smooth' });
    }

    const title3 = document.querySelector(".fourthPage");
    const y3 = title3.getBoundingClientRect().top + window.pageYOffset + yOffset;
    navElement[2].onclick = function() {
        window.scrollTo({ top: y3, behavior: 'smooth' });
    }

    const title4 = document.querySelector(".fifthPage");
    const y4 = title4.getBoundingClientRect().top + window.pageYOffset - 100;
    navElement[3].onclick = function() {
        window.scrollTo({ top: y4, behavior: 'smooth' });
    }

    const title5 = document.querySelector(".sixthPage");
    const y5 = title5.getBoundingClientRect().top + window.pageYOffset - 100;
    navElement[4].onclick = function() {
        window.scrollTo({ top: y5, behavior: 'smooth' });
    }

    navElement[5].onclick = function() {
        window.scrollTo({ top: y1 - 50, behavior: 'smooth' });
    }
    navElement[6].onclick = function() {
        window.scrollTo({ top: y2 - 50, behavior: 'smooth' });
    }
    navElement[7].onclick = function() {
        window.scrollTo({ top: y3 - 30, behavior: 'smooth' });
    }
    navElement[8].onclick = function() {
        window.scrollTo({ top: y4, behavior: 'smooth' });
    }
    navElement[9].onclick = function() {
        window.scrollTo({ top: y5, behavior: 'smooth' });
    }


    // SCROLL ANIMATION

    const title6 = document.querySelector(".ninthPageForm");
    const buyNowText = document.querySelector(".buyNowText")
    const y6 = title6.getBoundingClientRect().top + window.pageYOffset - 100;
    buyNowText.onclick = function() {
            window.scrollTo({ top: y6, behavior: 'smooth' });
        }
        // FIRST SECTION
    const el1_1 = document.querySelectorAll(".secondPageTextTitle")
    const el1_2 = document.querySelectorAll(".secondPageText")
    const el1_3 = document.querySelectorAll(".secondPagePromotion")
    window.addEventListener('scroll', function f1(e) {

        if (window.scrollY >= y1 - 600) {
            el1_1[0].style["animation"] = "anime 1s 0s both";
            el1_2[0].style["animation"] = "anime 1s 0s both";
            el1_3[0].style["animation"] = "anime 1s 0.5s both";

            window.removeEventListener('scroll', f1);
        }
    });

    const el2_1 = document.querySelector(".content2")
    const el2_2 = el2_1.getBoundingClientRect().top
    window.addEventListener('scroll', function f2(e) {

        if (window.scrollY >= el2_2 - 600) {
            el1_1[1].style["animation"] = "anime 1s 0s both";
            el1_2[1].style["animation"] = "anime 1s 0s both";
            el1_3[1].style["animation"] = "anime 1s 0.5s both";

            window.removeEventListener('scroll', f2);
        }
    });

    const el3_1 = document.querySelector(".content3")
    const el3_2 = el3_1.getBoundingClientRect().top
    window.addEventListener('scroll', function f3(e) {

        if (window.scrollY >= el3_2 - 600) {
            el1_1[2].style["animation"] = "anime 1s 0s both";
            el1_2[2].style["animation"] = "anime 1s 0s both";
            el1_3[2].style["animation"] = "anime 1s 0.5s both";

            window.removeEventListener('scroll', f3);
        }
    });

    // SECOND SECTION



    const el4_1 = document.querySelector(".mobileUsg")
    const el4_2 = el4_1.getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f4(e) {

        if (window.scrollY >= el4_2 - 400) {
            el4_1.style["animation"] = "anime 1s 0s both";

            window.removeEventListener('scroll', f4);
        }
    });

    const el5_1 = document.querySelector(".thirdPageImg")
    const el5_2 = el5_1.getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f5(e) {

        if (window.scrollY >= el5_2 - 400) {
            el5_1.style["animation"] = "anime 1s 0s both";

            window.removeEventListener('scroll', f5);
        }
    });

    const el6_1 = document.querySelector(".menuDescribe1")
    const el6_2 = el6_1.getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f6(e) {

        if (window.scrollY >= el6_2 - 400) {
            el6_1.style["animation"] = "anime 1s 0.5s both";


            window.removeEventListener('scroll', f6);
        }
    });
    /*
        const el7_1 = document.querySelector(".video")
        const el7_2 = el7_1.getBoundingClientRect().top + offsetAnime;
        window.addEventListener('scroll', function f7(e) {

            if (window.scrollY >= el7_2 - 400) {
                el7_1.style["animation"] = "anime 1s 1.1s both";

                window.removeEventListener('scroll', f7);
            }
        });
    */
    // THIRD SECTION 

    const el8_1 = document.querySelector(".anime8_1")
    const el8_2 = el8_1.getBoundingClientRect().top + offsetAnime - 100;
    window.addEventListener('scroll', function f8(e) {

        if (window.scrollY >= el8_2 - 500) {
            el8_1.style["animation"] = "anime 1s 0s both";
            window.removeEventListener('scroll', f8);
        }
    });



    const el9_1 = document.querySelectorAll(".optionContainer")

    const el9_2 = el9_1[0].getBoundingClientRect().top + offsetAnime - 100;

    window.addEventListener('scroll', function f91(e) {

        if (window.scrollY >= el9_2 - 500) {
            el9_1[0].style["animation"] = "anime 1s 0.6s both";
            window.removeEventListener('scroll', f91);
        }
    });

    const el9_3 = el9_1[1].getBoundingClientRect().top + offsetAnime - 100;
    window.addEventListener('scroll', function f92(e) {

        if (window.scrollY >= el9_3 - 500) {
            el9_1[1].style["animation"] = "anime 1s 0.6s both";
            window.removeEventListener('scroll', f92);
        }
    });

    const el9_4 = el9_1[2].getBoundingClientRect().top + offsetAnime - 100;
    window.addEventListener('scroll', function f93(e) {

        if (window.scrollY >= el9_4 - 500) {
            el9_1[2].style["animation"] = "anime 1s 0.6s both";
            window.removeEventListener('scroll', f93);
        }
    });

    const el9_5 = el9_1[3].getBoundingClientRect().top + offsetAnime - 100;
    window.addEventListener('scroll', function f94(e) {

        if (window.scrollY >= el9_5 - 500) {
            el9_1[3].style["animation"] = "anime 1s 0.6s both";
            window.removeEventListener('scroll', f94);
        }
    });


    // FOURTH SECTION


    const el10_1 = document.querySelectorAll(".fifthPageText")
    const el10_3 = document.querySelector(".fifthPageSectionImg1")
    const el10_2 = el10_1[0].getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f10(e) {

        if (window.scrollY >= el10_2) {
            el10_1[0].style["animation"] = "anime 1s 0s both";
            el10_3.style["animation"] = "anime 1s 0.5s initial";
            window.removeEventListener('scroll', f10);
        }
    });



    const el11_3 = document.querySelector(".fifthPageSectionImg2")
    const el11_2 = el10_1[1].getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f11(e) {

        if (window.scrollY >= el11_2) {
            el10_1[1].style["animation"] = "anime 1s 0s both";
            el11_3.style["animation"] = "anime 1s 0.5s initial";
            window.removeEventListener('scroll', f11);
        }
    });


    const el12_3 = document.querySelector(".fifthPageSectionImg3")
    const el12_2 = el10_1[2].getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f12(e) {

        if (window.scrollY >= el12_2) {
            el10_1[2].style["animation"] = "anime 1s 0s both";
            el12_3.style["animation"] = "anime 1s 0.5s initial";
            window.removeEventListener('scroll', f12);
        }
    });

    const el13_3 = document.querySelector(".fifthPageSectionImg4")
    const el13_2 = el10_1[3].getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f13(e) {

        if (window.scrollY >= el13_2) {
            el10_1[3].style["animation"] = "anime 1s 0s both";
            el13_3.style["animation"] = "anime 1s 0.5s initial";
            window.removeEventListener('scroll', f13);
        }
    });

    // MOBILE

    const el10_1m = document.querySelectorAll(".fifthPageText");
    const el10_3m = document.querySelectorAll(".mobBullet");

    const el10_2m = el10_1m[4].getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f10m(e) {
        if (window.scrollY >= el10_2m) {
            el10_1m[4].style["animation"] = "anime 1s 0s both";
            el10_3m[0].style["animation"] = "anime 1s 0.5s both";
            window.removeEventListener('scroll', f10m);
        }
    });

    const el11_2m = el10_1m[5].getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f11m(e) {
        if (window.scrollY >= el11_2m) {
            el10_1m[5].style["animation"] = "anime 1s 0s both";
            el10_3m[1].style["animation"] = "anime 1s 0.5s both";
            window.removeEventListener('scroll', f11m);
        }
    });

    const el12_2m = el10_1m[6].getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f12m(e) {
        if (window.scrollY >= el12_2m) {
            el10_1m[6].style["animation"] = "anime 1s 0s both";
            el10_3m[2].style["animation"] = "anime 1s 0.5s both";
            window.removeEventListener('scroll', f12m);
        }
    });

    const el13_2m = el10_1m[7].getBoundingClientRect().top + offsetAnime;
    window.addEventListener('scroll', function f13m(e) {
        if (window.scrollY >= el13_2m) {
            el10_1m[7].style["animation"] = "anime 1s 0s both";
            el10_3m[3].style["animation"] = "anime 1s 0.5s both";
            window.removeEventListener('scroll', f13m);
        }
    });


    // FIFTH SECTION

    const el14_1 = document.querySelector(".spec")
    const el14_2 = el14_1.getBoundingClientRect().top
    const el14_3 = document.querySelector(".glow")
    const el14_4 = document.querySelector(".obraz")
    const el14_5 = document.querySelector(".komp")
    window.addEventListener('scroll', function f14(e) {

        if (window.scrollY >= el14_2 - 400) {
            el14_1.style["animation"] = "anime 1s 0s both";
            el14_3.style["animation"] = "anime 1s 0.5s both";
            el14_4.style["animation"] = "anime 1s 1s both";
            el14_5.style["animation"] = "anime 1s 1.5s both";


            window.removeEventListener('scroll', f14);
        }
    });



    // SIXTH SECTION 

    const el15_1 = document.querySelector(".seventhPage")
    const el15_2 = el15_1.getBoundingClientRect().top

    const el15_3 = document.querySelector(".anime14_1")
    const el15_4 = document.querySelector(".anime14_2")
    const el15_5 = document.querySelector(".anime14_3")
    const el15_6 = document.querySelector(".anime14_4")
    const el15_7 = document.querySelector(".anime14_5")
    const el15_8 = document.querySelector(".anime14_6")
    const el15_9 = document.querySelector(".anime14_7")
    window.addEventListener('scroll', function f15(e) {

        if (window.scrollY >= el15_2 - 400) {
            el15_3.style["animation"] = "anime 1s 0s both";
            el15_4.style["animation"] = "anime 1s 0.5s both";
            el15_5.style["animation"] = "anime 1s 1s both";
            el15_6.style["animation"] = "anime 1s 1.5s both";
            el15_7.style["animation"] = "anime 1s 2s both";
            el15_8.style["animation"] = "anime 1s 2.5s both";
            el15_9.style["animation"] = "anime 1s 3s both";


            window.removeEventListener('scroll', f15);
        }
    });


    // SEVENTH PAGE

    const el16_1 = document.querySelector(".eighthPage")
    const el16_2 = el16_1.getBoundingClientRect().top

    const el16_3 = document.querySelectorAll(".anime16_1")
    const el16_4 = document.querySelector(".anime16_2")
    const el16_5 = document.querySelector(".anime16_3")

    window.addEventListener('scroll', function f16(e) {

        if (window.scrollY >= el16_2) {
            el16_3[0].style["animation"] = "anime 1s 0s both";
            el16_3[1].style["animation"] = "anime 1s 0s both";
            el16_3[2].style["animation"] = "anime 1s 0s both";
            el16_3[3].style["animation"] = "anime 1s 0s both";
            el16_4.style["animation"] = "anime 1s 0.5s both";
            el16_5.style["animation"] = "anime 1s 1s both";


            window.removeEventListener('scroll', f16);
        }
    });

    const el16_1m = document.querySelectorAll(".infosMobileAnime")
    const el16_2m = el16_1m[0].getBoundingClientRect().top - 200;

    window.addEventListener('scroll', function f16(e) {

        if (window.scrollY >= el16_2m) {
            el16_1m[0].style["animation"] = "anime 1s 0s both";
            el16_1m[1].style["animation"] = "anime 1s 0.5s both";
            el16_1m[2].style["animation"] = "anime 1s 0s both";
            el16_1m[3].style["animation"] = "anime 1s 0.5s both";

            window.removeEventListener('scroll', f16);
        }
    });

    // NINTH PAGE

    const el17_1 = document.querySelector(".ninthPage")
    const el17_2 = el17_1.getBoundingClientRect().top

    const el17_3 = document.querySelector(".ninthPageDescribe")
    const el17_4 = document.querySelector(".ninthPageForm")
    const el17_5 = document.querySelector(".ninthPageImg")

    window.addEventListener('scroll', function f17(e) {

        if (window.scrollY >= el17_2 - 400 + offsetAnime) {
            el17_3.style["animation"] = "anime 1s 0s both";
            el17_4.style["animation"] = "anime 1s 0.5s both";
            el17_5.style["animation"] = "anime 1s 1s both";

            window.removeEventListener('scroll', f17);
        }
    });


    // ACCEPT CHECKBOXES INFO

    const acceptButton1 = document.querySelector(".acceptShow1");
    const acceptButton2 = document.querySelector(".acceptShow2");
    const acceptButton3 = document.querySelector(".acceptShow3");
    const acceptButton4 = document.querySelector(".acceptShow4");

    const acceptInfos = document.querySelectorAll(".checkboxAccept");
    const ninthPageHeight = document.querySelector(".ninthPage")

    isOn = [false, false];

    const styleDescr = getComputedStyle(el17_3);
    topDescr = styleDescr.top

    topMove = 1120;

    if (window.screen.width < 440) {
        topMove = 1000;

    }

    acceptButton1.addEventListener("click", () => {
        acceptInfos[0].classList.toggle("checkboxAcceptActive");
        isOn[0] = !isOn[0];
        if (isOn[0]) {
            howPx += 200;
            if (mob) setTimeout(() => el17_3.style["top"] = `${topMove}px`, 150);

        } else {
            howPx -= 200;
            if (mob && !isOn[1]) setTimeout(() => el17_3.style["top"] = topDescr, 200);
            if (mob && isOn[1]) setTimeout(() => el17_3.style["top"] = `${850}px`, 150);
        }


        if (!mob) setTimeout(() => ninthPageHeight.style["height"] = `${howPx}px`, 150);
        else setTimeout(() => ninthPageHeight.style["height"] = `${howPx-50}px`, 150);

    })

    acceptButton2.addEventListener("click", () => {
        acceptInfos[1].classList.toggle("checkboxAcceptActive");
    })

    acceptButton3.addEventListener("click", () => {

        acceptInfos[2].classList.toggle("checkboxAcceptActive");
        isOn[1] = !isOn[1];
        if (isOn[1]) {
            howPx += 200;

            if (mob && !isOn[0]) setTimeout(() => el17_3.style["top"] = `${900}px`, 150);
        } else {
            howPx -= 200;
            if (mob && !isOn[0]) setTimeout(() => el17_3.style["top"] = topDescr, 150);

        }


        if (!mob) setTimeout(() => ninthPageHeight.style["height"] = `${howPx}px`, 150);
        else setTimeout(() => ninthPageHeight.style["height"] = `${howPx-150}px`, 150);
    })

    acceptButton4.addEventListener("click", () => {
        acceptInfos[3].classList.toggle("checkboxAcceptActive");
    })


    // COOKIES 

    function setCookie(name, val, days, path, domain, secure) {
        if (navigator.cookieEnabled) { //czy ciasteczka są włączone
            const cookieName = encodeURIComponent(name);
            const cookieVal = encodeURIComponent(val);
            let cookieText = cookieName + "=" + cookieVal;

            if (typeof days === "number") {
                const data = new Date();
                data.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000));
                cookieText += "; expires=" + data.toGMTString();
            }

            if (path) {
                cookieText += "; path=" + path;
            }
            if (domain) {
                cookieText += "; domain=" + domain;
            }
            if (secure) {
                cookieText += "; secure";
            }

            document.cookie = cookieText;
        }
    }

    const understand = document.querySelector(".understand");
    const moreInfo = document.querySelector(".moreInfo");



    moreInfo.addEventListener("click", () => {
        window.location = 'cookie.html'
    })

    understand.addEventListener("click", () => {
        setCookie("acceptCookies", "ok", 14)
        cookieInfo.style["display"] = "none";
    })
})