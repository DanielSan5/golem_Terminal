document.addEventListener('DOMContentLoaded', function() {

    
    document.getElementById('submit_yes').addEventListener("click", function(){

        //sound di porta che NON si apre
        document.getElementById("locked_door_audio").play(); 

    })
    

    document.getElementById('submit_no').addEventListener("click", function(){

        //sound di porta che SI apre
        document.getElementById("unlocked_door_audio").play(); 
        document.getElementById("unlocked_door_audio").addEventListener("ended", function(){
           
            document.getElementById("sub_title").style.display = "none";
            document.getElementById("sub-heading").style.display = "none";
            document.getElementById("autodistruzione").style.display = "none";
            document.getElementById("submit_yes").style.display = "none";
            document.getElementById("submit_no").style.display = "none";

            setTimeout(function() {

                document.getElementById("danger_audio").play();
                console.log("primo");
                document.body.style.backgroundColor = "#f5e400";
                document.getElementById("danger_audio").addEventListener("ended", function(){
                    document.body.style.backgroundColor = "#0a0a0a";
                    setTimeout(function() {
                        document.getElementById("danger_audio1").play();
                        console.log("secondo");
                        document.body.style.backgroundColor = "#f5e400";
                    }, 500); // 1000 millisecondi = 1 secondo
                });

                document.getElementById("danger_audio1").addEventListener("ended", function(){
                    document.body.style.backgroundColor = "#0a0a0a";
                    setTimeout(function() {
                        document.getElementById("danger_audio2").play();
                        console.log("terzo");
                        document.body.style.backgroundColor = "#f5e400";
                    }, 500); // 1000 millisecondi = 1 secondo
                });

                
                document.getElementById("danger_audio2").addEventListener("ended", function(){
                    document.body.style.backgroundColor = "#0a0a0a";
                    //Parte l'audio del countdown
                    setTimeout(function() {
                    document.getElementById("countdown").play();

                    //Quando finisce parte l'audio dell'esplosione
                        document.getElementById("countdown").addEventListener("ended", function(){
                            document.getElementById("explosion").play();
                        });

                    }, 200); // 1000 millisecondi = 1 secondo

                });                            
        
            }, 500); // 1000 millisecondi = 1 secondo

        }) //TUTTO QUESTO QUANDO è TERMINATO L'AUDIO DELLA PORTA CHE SI APRE     
    

    })

})

