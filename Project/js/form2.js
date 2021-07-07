const sendButton2 = document.querySelector(".contact1-form-btn2")
const orderValue = document.querySelector(".chooseStep3Header");
let isSent = false;

let validInfo = document.querySelector(".valid");

function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

function validateNumber(number) {
    const re = /^([0-9]{9,13})$/;
    return re.test(number);
}

sendButton2.addEventListener("click", () => {

    name = document.querySelector(".name").value;
    email = document.querySelector(".email").value; // phone number fo real
    subject = document.querySelector(".subject").value; // subject is for real email - name error - sorry
    checkboxes = document.querySelectorAll(".checkboxValid");

    order = "Zamówienie klienta:<br>" + orderValue.innerHTML.substr(22);


    if (!isSent) {
        if (name == "" || !name.includes(" ")) {
            validInfo.innerHTML = "Wpisz poprawnie imię i nazwisko";
        } else if (!validateNumber(email)) {
            validInfo.innerHTML = "Wpisz poprawny numer telefonu";
        } else if (!validateEmail(subject)) {
            validInfo.innerHTML = "Wpisz poprawny adres email";
        } else if (checkboxes[0].checked && checkboxes[1].checked && checkboxes[2].checked && checkboxes[3].checked) {
            isSent = true;
            $.ajax({
                type: "POST",
                url: "sendMail.php",
                data: { nameKey: name, emailKey: email, subjectKey: subject, messageKey: order },

                success: function() {



                },

                error: function(error) {
                    console.log(error);
                },
            });
        }
    }



})