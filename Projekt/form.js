function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

function validateNumber(number) {
    const re = /^([0-9]{9,13})$/;
    return re.test(number);
}

const sendButton = document.querySelector(".contact1-form-btn");

const formFrame = document.querySelector(".ninthPageForm");
const formNone = document.querySelector(".validate-form");
const originalHeight = (formFrame.offsetHeight - 150) + "px";
const thanks = document.querySelector(".thanks");

let validInfo = document.querySelector(".valid");

let isSent = false;

sendButton.addEventListener("click", () => {

    name = document.querySelector(".name").value;
    email = document.querySelector(".email").value; // phone number fo real
    subject = document.querySelector(".subject").value; // subject is for real email - name error - sorry
    message = document.querySelector(".message").value;
    checkboxes = document.querySelectorAll(".checkboxValid");


    if (!isSent) {
        if (name == "" || !name.includes(" ")) {
            validInfo.innerHTML = "Wpisz poprawnie imię i nazwisko";
        } else if (!validateNumber(email)) {
            validInfo.innerHTML = "Wpisz poprawny numer telefonu";
        } else if (!validateEmail(subject)) {
            validInfo.innerHTML = "Wpisz poprawny adres email";
        } else if (message == "") {
            validInfo.innerHTML = "Wpisz wiadomość";
        } else if (checkboxes[0].checked && checkboxes[1].checked && checkboxes[2].checked && checkboxes[3].checked) {
            isSent = true;
            $.ajax({
                type: "POST",
                url: "sendMail.php",
                data: { nameKey: name, emailKey: email, subjectKey: subject, messageKey: message },

                success: function() {
                    formNone.style["display"] = "none";
                    formFrame.style["height"] = originalHeight;
                    thanks.style["display"] = "block";


                },

                error: function(error) {
                    console.log(error);
                },
            });
        }
    }




})