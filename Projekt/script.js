window.addEventListener('load', function() {

    const buyButton = document.querySelector(".buyButton");
    const buyButton2 = document.querySelector(".buyNow");


    function goToForm() {
        window.location = 'form.html';
    }

    buyButton.addEventListener("click", goToForm);
    buyButton2.addEventListener("click", goToForm);



    const heightPage = document.documentElement.clientHeight;
    const header = document.querySelector("header");


    window.addEventListener('scroll', function f(e) {
        console.log(window.scrollY)
        console.log(heightPage)
        if (window.scrollY > heightPage * 0.1) {
            header.style["background-color"] = "white";
        } else {
            header.style["background-color"] = "rgba(0,0,0,0)";
        }
    });




})