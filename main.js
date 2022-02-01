/*Consegna 
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

document.getElementById('start-play').addEventListener('click', play);

//funzione che gestisce tutto il gioco
function play() {

    const NUMERO_BOMBE = 16;

    console.log('Avvio del gioco');

    const gioco = document.getElementById('grid');
    //resetto il campo di gioco
    gioco.innerHTML = "";
    
    const difficolta = document.getElementById('difficolta').value;


    //Costruisco campo


    let numeroCelle;
    let cellePerRiga;

    switch (difficolta) {
        case "easy":
        default:
            numeroCelle = 100;
            break;
        case "medium":
            numeroCelle = 81;
            break;
        case "difficult":
            numeroCelle = 49;
            break;
    }
generaCampoGioco(numeroCelle);
const bombs = generateBombs(NUMERO_BOMBE, numeroCelle);

console.log(bombs);

    function generaCampoGioco(numeroCelle) {

        cellePerRiga = Math.sqrt(numeroCelle);

        for (let i = 1; i <= numeroCelle; i++) {

            const nodo = document.createElement('div');
            nodo.classList.add('square');

            const dimensione = `calc(100% / ${cellePerRiga})`;
            nodo.style.width = dimensione;
            nodo.style.height = dimensione;
        
            nodo.innerText = i;
        
            nodo.addEventListener('click', gestisciClickCella);
            grid.appendChild(nodo);
        
        }

        return true;

    }

    function gestisciClickCella() {
        this.classList.add('clicked');
        alert(this.innerText);
        this.removeEventListener('click', gestisciClickCella);
    }

    function generateBombs (bombNumber, numeroCelle) {
        const activeBombs = [];
        while (activeBombs.length < bombNumber) {

            const bomBa = getRandomNumber(1, numeroCelle);

          if  activeBombs.push();
        }
        return activeBombs;
    }
}






function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
























// const options = [
//     'easy',
//     'medium',
//     'expert'
// ];

// let tables = '';

// for (let i = 0; i < options.length; i++) {


//     .addEventListener('click', function() {
//         console.log(this);
//         this.classList.add('');
//     })
// }




// const gridElement = document.getElementById('grid');

// for (let i = 1; i <=100; i++) {

//     const node = document.createElement('div');
//     node.innerHTML = i;
//     node.classList.add('square');
//     gridElement.appendChild(node);

//      node.addEventListener('click', function() {
//          console.log(this);
//          this.classList.add('clicked');
//      })
// }