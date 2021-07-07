if (window.screen.width < 1200) {
    isMobile = 600;
} else {
    isMobile = 0;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

function validateNumber(number) {
    const re = /^([0-9]{9,13})$/;
    return re.test(number);
}

let packet = "";

const logo = document.querySelector(".logo");
const buttonBack = document.querySelector(".buyButton");

function goToMain() {
    window.location = 'index.html';
}
logo.addEventListener("click", goToMain);
buttonBack.addEventListener("click", goToMain);


/* FORM 1 */

const nextButton = document.querySelector(".nextButton");
const sendButton = document.querySelector(".contact1-form-btn");

const basic = document.getElementById("basic");
const advance = document.getElementById("advance");

const choose1 = document.querySelector(".chooseStep1");
const choose2 = document.querySelector(".chooseStep2");
const choose3 = document.querySelector(".chooseStep3");
const thanks = document.querySelector(".thanks");

const stepDescribe = document.querySelector(".stepDescribe");

const steps = document.querySelectorAll(".step");
const stepIcons = document.querySelectorAll(".stepIcon");

const progressBar = document.querySelector(".progress")
const header = document.querySelector("header").offsetHeight


nextButton.addEventListener("click", function step1() {
    if (basic.checked === false && advance.checked === false) {
        error.innerHTML = "Wybierz przynajmniej jedną opcję";
        error.style.display = "block";
    } else if (basic.checked == true) {
        choose1.style["display"] = "none";
        choose2.style["display"] = "flex";
        stepDescribe.innerHTML = "KROK 2<br><span>Wybierz wyposażenie dodatkowe</span>";
        steps[0].classList.remove("colorStep");
        steps[1].classList.add("colorStep");
        stepIcons[0].classList.remove("stepIcon");
        stepIcons[0].classList.add("stepIconShow");
        error.style.display = "none";
        packet = "b";
        window.scrollTo(0, progressBar.offsetTop - header + isMobile);
        nextButton.removeEventListener("click", step1);
        nextButton.addEventListener("click", step2)
    } else {
        choose1.style["display"] = "none";
        choose2.style["display"] = "flex";
        stepDescribe.innerHTML = "KROK 2<br><span>Wybierz wyposażenie dodatkowe</span>";
        steps[0].classList.remove("colorStep");
        steps[1].classList.add("colorStep");
        stepIcons[0].classList.remove("stepIcon");
        stepIcons[0].classList.add("stepIconShow");
        error.style.display = "none";
        packet = "a";
        window.scrollTo(0, progressBar.offsetTop - header + isMobile);
        nextButton.removeEventListener("click", step1);
        nextButton.addEventListener("click", step2)

    }
})


/* FORM 2 */

const gift1 = document.getElementById("gift1");
const gift2 = document.getElementById("gift2");
const gift3 = document.getElementById("gift3");

const step2Checkbox1 = document.querySelector(".step2choose1");
const step2Checkbox2 = document.querySelector(".step2choose2");
const step2Checkbox3 = document.querySelector(".step2choose3");

const error = document.querySelector(".error");
const yourChoose = document.querySelector(".chooseStep3Header");

step2Checkbox1.addEventListener("click", () => {
    gift1.checked = !gift1.checked;
    if (gift1.checked) {
        gift2.checked = false;
        gift3.checked = false;

    }
})

step2Checkbox2.addEventListener("click", () => {
    gift2.checked = !gift2.checked;
    if (gift1.checked) {
        gift1.checked = false;
    }
})

step2Checkbox3.addEventListener("click", () => {
    gift3.checked = !gift3.checked;
    if (gift1.checked) {
        gift1.checked = false;
    }
})

function step2() {






    if (gift1.checked === false && gift2.checked === false && gift3.checked === false) {
        error.innerHTML = "Wybierz przynajmniej jedną opcję";
        error.style.display = "block";

    } else {

        if (gift1.checked) {
            packet === "b" ? yourChoose.innerHTML = "Wybrałeś pakiet<br><b>SonoEye Pakiet Basic</b><br>bez dodatkowego wyposażenia" : yourChoose.innerHTML = "Wybrałeś pakiet<br><b>SonoEye Pakiet Advance</b><br>bez dodatkowego wyposażenia";

        } else if (gift2.checked && gift3.checked) {
            packet === "b" ? yourChoose.innerHTML = "Wybrałeś pakiet<br><b>SonoEye Pakiet Basic</b><br>oraz tablet z etui i szkolenie USG Trener" : yourChoose.innerHTML = "Wybrałeś pakiet<br><b>SonoEye Pakiet Advance</b><br>oraz tablet z etui i szkolenie USG Trener";
        } else if (gift2.checked) {
            packet === "b" ? yourChoose.innerHTML = "Wybrałeś pakiet<br><b>SonoEye Pakiet Basic</b><br>oraz tablet z etui" : yourChoose.innerHTML = "Wybrałeś pakiet<br><b>SonoEye Pakiet Advance</b><br>oraz tablet z etui";
        } else {
            packet === "b" ? yourChoose.innerHTML = "Wybrałeś pakiet<br><b>SonoEye Pakiet Basic</b><br>oraz szkolenie USG Trener" : yourChoose.innerHTML = "Wybrałeś pakiet<br><b>SonoEye Pakiet Advance</b><br>oraz szkolenie USG Trener";
        }



        window.scrollTo(0, progressBar.offsetTop - header + isMobile);
        choose2.style["display"] = "none";
        choose3.style["display"] = "flex";
        nextButton.style["display"] = "none";
        stepDescribe.innerHTML = "KROK 3<br><span>Uzupełnij formularz, skontaktujemy się z Tobą</span>";
        steps[1].classList.remove("colorStep");
        steps[2].classList.add("colorStep");
        stepIcons[1].classList.remove("stepIcon");
        stepIcons[1].classList.add("stepIconShow");
        error.style.display = "none";
        nextButton.removeEventListener("click", step2);

        nameV = document.querySelector(".name");
        emailV = document.querySelector(".email");
        subjectV = document.querySelector(".subject");
        checkboxesValid = document.querySelectorAll(".checkboxValid");


        sendButton.addEventListener("click", () => {


            if (nameV != "" && validateEmail(subjectV.value) && validateNumber(emailV.value) && checkboxesValid[0].checked == true && checkboxesValid[1].checked == true && checkboxesValid[2].checked == true && checkboxesValid[3].checked == true) {
                step3();
            }
        })
    }

}


function step3() {
    window.scrollTo(0, progressBar.offsetTop - header + isMobile);
    choose3.style["display"] = "none";
    thanks.style["display"] = "flex";
    stepDescribe.style["display"] = "none";
    steps[2].classList.remove("colorStep");
    stepIcons[2].classList.remove("stepIcon");
    stepIcons[2].classList.add("stepIconShow");
    sendButton.removeEventListener("click", step3);
}


// CHECKBOXES WALIDATION 

const checkbox1 = document.getElementById("basic");
const checkbox2 = document.getElementById("advance");

const divBox1 = document.querySelector(".choose_1");
const divBox2 = document.querySelector(".choose_2");

let isCheck1 = false;
let isCheck2 = false;

divBox1.addEventListener("click", () => {
    if (checkbox1.checked && !checkbox2.checked) {
        checkbox1.checked = !checkbox1.checked;
        isCheck1 = false;
    } else if (checkbox2.checked) {
        checkbox1.checked = false;
        isCheck1 = false;
    } else {
        checkbox1.checked = true;
        isCheck1 = true;
    }
})

divBox2.addEventListener("click", () => {
    if (checkbox2.checked && !checkbox1.checked) {
        checkbox2.checked = false;
        isCheck2 = false;
    } else if (checkbox1.checked) {
        checkbox2.checked = false;
        isCheck2 = false;
    } else {
        checkbox2.checked = true;
        isCheck2 = true;
    }
})


// HAMBURGER

let hamburgerOn = false;
//const icon = document.querySelector(".ham");

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

//const buttonHamburger = document.querySelector(".hamburgerButton");
//buttonHamburger.addEventListener("click", menuHamburger);


// SCROLL ANIMATION

const el1_1 = document.querySelectorAll(".seventhPage")
const el1_2 = el1_1[0].getBoundingClientRect().top
window.addEventListener('scroll', function f1(e) {

    if (window.scrollY >= el1_2 - 400) {
        el1_1[0].style["animation"] = "anime 1s 0s both";
        el1_1[1].style["animation"] = "anime 1s 0.5s both";


        window.removeEventListener('scroll', f1);
    }
});


const el2_1 = document.querySelectorAll(".item")
const el2_2 = el2_1[0].getBoundingClientRect().top
window.addEventListener('scroll', function f2(e) {

    if (window.scrollY >= el2_2 - 400) {
        el2_1[0].style["animation"] = "anime 1s 0s both";
        el2_1[1].style["animation"] = "anime 1s 0.5s both";
        el2_1[2].style["animation"] = "anime 1s 1s both";


        window.removeEventListener('scroll', f2);
    }
});


const el3_1 = document.querySelector(".chooseStep3")
const el3_2 = el3_1.getBoundingClientRect().top
window.addEventListener('scroll', function f3(e) {

    if (window.scrollY >= el3_2 - 400) {
        el3_1.style["animation"] = "anime 1s 0s both";



        window.removeEventListener('scroll', f3);
    }
});

const el4_1 = document.querySelector(".thanks")
const el4_2 = el4_1.getBoundingClientRect().top
window.addEventListener('scroll', function f4(e) {

    if (window.scrollY >= el4_2 - 400) {
        el4_1.style["animation"] = "anime 1s 0s both";



        window.removeEventListener('scroll', f4);
    }
});


// ACCEPT CHECKBOXES INFO

const acceptButton1 = document.querySelector(".acceptShow1");
const acceptButton2 = document.querySelector(".acceptShow2");
const acceptButton3 = document.querySelector(".acceptShow3");
const acceptButton4 = document.querySelector(".acceptShow4");

const acceptInfos = document.querySelectorAll(".checkboxAccept");


acceptButton1.addEventListener("click", () => {
    acceptInfos[0].classList.toggle("checkboxAcceptActive");
})

acceptButton2.addEventListener("click", () => {
    acceptInfos[1].classList.toggle("checkboxAcceptActive");
})

acceptButton3.addEventListener("click", () => {
    acceptInfos[2].classList.toggle("checkboxAcceptActive");
})

acceptButton4.addEventListener("click", () => {
    acceptInfos[3].classList.toggle("checkboxAcceptActive");
})