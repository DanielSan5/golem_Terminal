
document.addEventListener('DOMContentLoaded', function() {
  /*  var infoIcon = document.querySelector('.info-icon');
    infoIcon.addEventListener('mouseover', function() {
        infoIcon.style.color = '#ff4500'; 
    });
    infoIcon.addEventListener('mouseout', function() {
        infoIcon.style.color = '#333'; 
    });*/

    
});

  //funzione che apre il popup
  function openInfoPopup() {
        var popup = document.querySelector('.info-popup');
        var closeBtn = document.createElement('span');
        closeBtn.className = 'close-popup';
        closeBtn.innerHTML = '&times;';
        popup.innerHTML = '<h2>Informazioni sulla pagina</h2><p>Questa è una pagina di accesso di esempio.</p>';
        popup.appendChild(closeBtn);
        closeBtn.addEventListener('click', closeInfoPopup);
        popup.style.display = 'block';
    }

    //funzione che chiude il popup
    function closeInfoPopup() {
        var popup = document.querySelector('.info-popup');
        popup.style.display = 'none';
    }
    
     
    /*

    // Imposta un timeout per nascondere il messaggio dopo 5 secondi
    
      setTimeout(function () {
        document.getElementById("error-message").style.display = "none";
    }, 5000);

    */