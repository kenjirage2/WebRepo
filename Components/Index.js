document.addEventListener("DOMContentLoaded", function(){
    var Button = document.getElementById("ContinueButton")

    if (Button)
    {
        Button.addEventListener("click", function(){
            var EmailBox = document.getElementById("email-class")

            let Input = EmailBox.value.trim()

            if (Input === "") 
            {
                alert("Coloque seu Email.")
            } 
            else if (Input.includes("@escola.pr.gov.br")) 
            {
                var Panel = document.getElementById("LoginPanel")
                Panel.hidden = true;
            } 
            else 
            {
                alert("Email invalido, deve contem '@escola.pr.gov.br.");
            }
        });
    }
});