document.addEventListener('DOMContentLoaded', function() {
const immagine_cd = document.getElementById("immagine");
immagine_cd.style.display = "none"; //OSCURO L'IMMAGINE

    document.getElementById('submit_no').addEventListener("click", function(){

        //sound di porta che NON si apre
        document.getElementById("locked_door_audio").play(); 

    })
    

    document.getElementById('submit_yes').addEventListener("click", function(){

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
                    }, 360); // 1000 millisecondi = 1 secondo
                });

                document.getElementById("danger_audio1").addEventListener("ended", function(){
                    document.body.style.backgroundColor = "#0a0a0a";
                    setTimeout(function() {
                        document.getElementById("danger_audio2").play();
                        console.log("terzo");
                        document.body.style.backgroundColor = "#f5e400";
                    }, 360); // 1000 millisecondi = 1 secondo
                });

                
                document.getElementById("danger_audio2").addEventListener("ended", function(){
                    document.body.style.backgroundColor = "#0a0a0a";
                    //Parte l'audio del countdown
                    setTimeout(function() {
                    document.getElementById("countdown").play();
                        document.getElementById("gif_warning").style.display = "block";
                            //RIPETERSI DI TIMOUT E CAMBIO DI IMMAGINI PER IL COUNTDOWN
                            setTimeout(function() {
                                document.getElementById("gif_warning").style.display = "none";
                                immagine_cd.style.display = "block"; //VISIONO L'IMMAGINE
                                immagine_cd.src = "../files/images/ten.jpg";
                            }, 4166);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/nine.jpg";
                            }, 5881);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/eight.jpg";
                            }, 7024);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/seven.jpg";
                            }, 7892);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/six.jpg";
                            }, 8773);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/five.jpg";
                            }, 9884);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/four.jpg";
                            }, 10905);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/three.jpg";
                            }, 11916);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/two.jpg";
                            }, 13087);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/one.jpg";
                            }, 14128);

                            setTimeout(function() {
                                immagine_cd.src = "../files/images/zero.jpg";
                            }, 15421);

                    //Quando finisce parte l'audio dell'esplosione
                        document.getElementById("countdown").addEventListener("ended", function(){
                            immagine_cd.style.display = "none";
                            document.getElementById("explosion_sound").play();
                           // document.body.style.backgroundColor = "#ffffff";
                           // document.getElementById("explosion_img").style.display = "block";

                            document.getElementById("flash_video").style.display = "block";
                            document.getElementById("flash_video").play();
                            
                        });

                        document.getElementById("explosion_sound").addEventListener("ended", function(){
                           // document.getElementById("explosion_img").style.display = "none";
                           // document.getElementById("victory_first").style.display = "block";
                           document.getElementById("flash_video").style.display = "none";
                           document.getElementById("victory_second").style.display = "block";
                        })

                    }, 200); // 1000 millisecondi = 1 secondo

                });                            
        
            }, 360); // 1000 millisecondi = 1 secondo

        }) //TUTTO QUESTO QUANDO è TERMINATO L'AUDIO DELLA PORTA CHE SI APRE     
    

    })

})