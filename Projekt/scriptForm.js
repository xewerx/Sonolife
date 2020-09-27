console.log("script is work")

let packiet = "";



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


nextButton.addEventListener("click", function step1() {
    console.log("dupa");
    if (basic.checked == true && advance.checked == true) {
        console.log("2 na raz");
    } else if (basic.checked == false && advance.checked == false) {
        console.log("żaden");
    } else {
        if (basic.checked == true) {
            packiet = "basic";
            choose1.style["display"] = "none";
            choose2.style["display"] = "flex";
            stepDescribe.innerHTML = "KROK 2<br><span>Wybierz wyposażenie dodatkowe</span>";
            steps[0].classList.remove("colorStep");
            steps[1].classList.add("colorStep");
            stepIcons[0].classList.remove("stepIcon");
            stepIcons[0].classList.add("stepIconShow");
            nextButton.removeEventListener("click", step1);
            nextButton.addEventListener("click", step2)
        } else {
            packiet = "advance";
            choose1.style["display"] = "none";
            choose2.style["display"] = "flex";
            stepDescribe.innerHTML = "KROK 2<br><span>Wybierz wyposażenie dodatkowe</span>";
            steps[0].classList.remove("colorStep");
            steps[1].classList.add("colorStep");
            stepIcons[0].classList.remove("stepIcon");
            stepIcons[0].classList.add("stepIconShow");
            nextButton.removeEventListener("click", step1);
            nextButton.addEventListener("click", step2)

        }
    }
})


/* FORM 2 */

const gift1 = document.getElementById("gift1");
const gift2 = document.getElementById("gift2");
const gift3 = document.getElementById("gift3");

function step2() {

    choose2.style["display"] = "none";
    choose3.style["display"] = "flex";
    nextButton.style["display"] = "none";
    stepDescribe.innerHTML = "KROK 3<br><span>Uzupełnij formularz, skontaktujemy się z Tobą</span>";
    steps[1].classList.remove("colorStep");
    steps[2].classList.add("colorStep");
    stepIcons[1].classList.remove("stepIcon");
    stepIcons[1].classList.add("stepIconShow");
    nextButton.removeEventListener("click", step2);
    sendButton.addEventListener("click", step3)

}

function step3() {
    choose3.style["display"] = "none";
    thanks.style["display"] = "flex";
    stepDescribe.style["display"] = "none";
    steps[2].classList.remove("colorStep");
    stepIcons[2].classList.remove("stepIcon");
    stepIcons[2].classList.add("stepIconShow");
    sendButton.removeEventListener("click", step3);
}