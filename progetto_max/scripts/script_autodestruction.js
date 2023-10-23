document.addEventListener('DOMContentLoaded', function() {

    /*
    document.getElemetnById('submit_yes').addEventListener("click", function(){

        //sound di porta che non si apre

    })
    */

    document.getElementById('submit_no').addEventListener("click", function(){

        //aggiungere il sound di un beep tipo di porta che si apre 

        setTimeout(function() {
            window.location = "countdown.html";
        }, 1200); // 1000 millisecondi = 1 secondo
    })

})