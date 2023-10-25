document.addEventListener('DOMContentLoaded', function() {

    
    document.getElementById('submit_yes').addEventListener("click", function(){

        //sound di porta che NON si apre
        document.getElementById("locked_door_audio").play(); 

    })
    

    document.getElementById('submit_no').addEventListener("click", function(){

        //sound di porta che SI apre
        document.getElementById("unlocked_door_audio").play();  

        setTimeout(function() {
            window.location = "countdown.html";
        }, 1500); // 1000 millisecondi = 1 secondo
    })

})