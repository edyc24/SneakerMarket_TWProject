window.onload=()=>{
    let Anunturi=[];

    let timeout;

    function THEFINALCOUNTDOWN() {
        timeout = setTimeout(showTime, 3000);
    }

    ceas=document.getElementById('ceas');
    function showTime(){
        setInterval(()=>{
            const d=new Date();
            ceas.innerHTML=d.toLocaleTimeString();
        }, 1000);
    }
    THEFINALCOUNTDOWN();

    const giveURL = (input) => {
        console.log("Inputul este: " + input.files[0].name);
        if (input.files && input.files[0]) {
            return input.files[0].name;
        }
    }

    numePereche=document.getElementById('nume');
    numePereche.value=window.localStorage.getItem('nume');
    pozaPereche=document.getElementById('poza-pereche');
    descrierePereche=document.getElementById('descriere');
    descrierePereche.value=window.localStorage.getItem('descriere');

    butonPostare=document.getElementById('post');
    butonPostare.onclick=()=>{
        const re=/^[ a-zA-Z]+$/;
        if (re.test(numePereche.value)) {
        console.log(numePereche.value);
        console.log(descrierePereche.value);
        console.log(descrierePereche.value, re.test(numePereche.value), re.test(descrierePereche.value));
            if (re.test(descrierePereche.value)) {
                console.log(numePereche.value);
                console.log(descrierePereche.value);
                console.log(descrierePereche.value, re.test(numePereche.value), re.test(descrierePereche.value));
                
                window.localStorage.setItem('nume', numePereche.value);
                window.localStorage.setItem('descriere', descrierePereche.value);
                anunt=document.createElement('div');
                imagineAnunt=document.createElement('img');
                imagineAnunt.src=`./photo/${giveURL(pozaPereche)}`;
                numeAnunt=document.createElement('h2');
                numeAnunt.innerHTML=numePereche.value;
                numeAnunt.style.color=`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
                descriereAnunt=document.createElement('p');
                descriereAnunt.innerHTML=descrierePereche.value;
                deleteButton=document.createElement('button');
                deleteButton.type='button';
                deleteButton.innerHTML='DELETE';
                anunt.append(imagineAnunt, numeAnunt, descriereAnunt, deleteButton);
                document.getElementsByClassName('new-item')[0].append(anunt);

                Anunturi.push(anunt);

                Anunturi[Anunturi.length-1].onclick=()=>{
                    let aux=Anunturi[Anunturi.length-1];
                    console.log(aux);
                    let anuntNou=[];
                    for(let i=0;i<Anunturi.length;i++) {
                        if(Anunturi[i]===aux)
                            continue;
                        anuntNou.push(Anunturi[i]);
                    }

                    aux.remove();

                    Anunturi=anuntNou;
                    console.log(Anunturi);
                }
            } 
            else{
                alert("Descriere incorecta!");
            }
        } 
        else{
            alert("Numele incorect!");
        }
    }
}