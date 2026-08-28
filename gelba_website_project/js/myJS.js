/* ===========================
ReqJ1 – Defensive scaffold
=========================== */
(function () {
    const form = document.querySelector("form");
    if (!form) return;

    const preview = document.getElementById("preview");
    const errorBox = document.getElementById("errorBox");

    /* ReqJ2 */
    window.updatePreview = function () {
        if (!preview) return;
        const formData = new FormData(form);
        let output = "";
        formData.forEach((value, key) => {
            output += key + ": " + value + "<br>";
        });
        preview.innerHTML = output;
    };

    /* ReqJ3 */
    window.checkValidityState = function (input) {
        if (input.checkValidity()) {
            input.classList.remove("invalid");
            input.classList.add("valid");
        } else {
            input.classList.remove("valid");
            input.classList.add("invalid");
        }
    };

    /* ReqJ4, ReqJ5, ReqJ6 */
    window.validateForm = function () {
        if (!form.checkValidity()) return false;

        if (errorBox) {
            errorBox.style.display = "none";
            errorBox.textContent = "";
        }

        const email = form.querySelector("input[type='email']");
        const confirmEmail = form.querySelector("#confirmEmail");

        if (email && confirmEmail && email.value !== confirmEmail.value) {
            if (errorBox) {
                errorBox.style.display = "block";
                errorBox.textContent = "Emails do not match.";
            }
            confirmEmail.focus();
            confirmEmail.classList.add("invalid");
            return false;
        }
        return true;
    };

    /* ReqJ7 */
    window.handleKey = function (event, element) {
        if (event.key === "Enter") {
            element.style.backgroundColor = "#d4edda";
        }
    };

    /* ReqJ8 */
    window.mouseOver = function (element) {
        element.style.border = "2px solid blue";
    };

    window.mouseOut = function (element) {
        element.style.border = "";
    };

})();