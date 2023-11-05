document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('submit_credenziali').addEventListener("click", function(){
        event.preventDefault(); // Impediamo il comportamento predefinito del pulsante

       var pass_uno = document.getElementById('password_uno').value;
       var pass_due = document.getElementById('password_due').value;

       if(pass_uno === 'meth') {

            if(pass_due === 'meth') {
                document.getElementById('error-message').textContent = "";
                document.getElementById("correct_audio").play(); 
                setTimeout(function() {
                    window.location = "autodestruction.html";
                }, 500); // 1000 millisecondi = 1 secondo
            }else{

                document.getElementById('error-message').textContent = "Le password NON sono corrette";
           
                // Svuota i campi delle password
                document.getElementById("password_uno").value = "";
                document.getElementById("password_due").value = "";

                document.getElementById("error_audio").play();   
                
                // Mostra il messaggio
                document.getElementById("error-message").style.display = "block";

                    setTimeout(function() {
                        document.getElementById("error-message").style.display = "none";
                        document.getElementById("error-message").textContent = "";
                    }, 1500); // 1000 millisecondi = 1 secondo

                }
       }else{
            document.getElementById('error-message').textContent = "Le password NON sono corrette";
           
            // Svuota i campi delle password
            document.getElementById("password_uno").value = "";
            document.getElementById("password_due").value = "";

            document.getElementById("error_audio").play();   
            
            // Mostra il messaggio
            document.getElementById("error-message").style.display = "block";

                setTimeout(function() {
                    document.getElementById("error-message").style.display = "none";
                    document.getElementById("error-message").textContent = "";
                }, 1500); // 1000 millisecondi = 1 secondo
        }

    })


});
