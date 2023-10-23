//VALUTA QUESTE OPZIONI

//aggiungere anche che vicino ad ogni numero del countdown si aggiunga anche l'immagine del pericolo delle centrali nucleari
//Tra ogni numero c'è un attimo di schermo nero con  l'immagine del pericolo delle centrali nucleari

document.addEventListener('DOMContentLoaded', function() {

    var elemento_DOM = document.getElementById('countdown');
    const cifre_conto = ['.. ten ..','.. nine ..','.. eight ..','.. seven ..','.. six ..','.. five ..','.. four ..','.. three ..','.. two ..','.. one ..'];
    
    for(var i=0; i<cifre_conto.length; i++){
        elemento_DOM.textContent = cifre_conto[i];
        
    }

})