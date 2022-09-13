let Anunturi=[];

window.onload=()=>{
    clockElement=document.getElementById('ceas');
    setInterval(()=>{
        const d=new Date();
        clockElement.innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }, 1000);

    numePereche=document.getElementById('nume');
    numePereche.value=window.localStorage.getItem('nume');
    pozaPereche=document.getElementById('poza-pereche');
    descrierePereche=document.getElementById('descriere');
    descrierePereche.value=window.localStorage.getItem('descriere');
      
    
}