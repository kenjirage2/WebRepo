function ValidateEmail()
{
    var EmailTextBox = document.getElementById("email-class").value
    var Message = EmailTextBox.includes("@escola.pr.gov.br") ? "Valido" : "Coloque"
}

var Button = document.getElementById("ContinueButton")

document.addEventListener("DOMContentLoaded", function()
{
    Button.addEventListener("click", ValidateEmail)
})