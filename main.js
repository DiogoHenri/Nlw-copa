

function createGame(player1, hour, player2){
    return`
    <li> 
        <img src="./Assets/Icon-${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./Assets/Icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
    `
}

let delay = -0.4
function createCard(date, day, games){
delay = delay + 0.3;
    return `
<div class="card" style="animation-delay: ${delay}">
<h2>${date} <span>${day}</span></h2>
<ul>
   ${games}
</ul>

</div>
`
}


document.querySelector('#app').innerHTML = `
<header>
            <img src="./Assets/logo.svg" alt="Logo NLW">
        </header>
        <main id="Cards">
           ${createCard("24/11","quinta", 
           createGame('switzerland','07:00','cameroon') + 
           createGame('portugal','16:00','ghana') + 
           createGame('brasil','16:00', 'serbia')
           )}

           ${createCard("28/11","Segunda", 
           createGame('SouthKorea','10:00','ghana') + 
           createGame('brasil','13:00','switzerland') + 
           createGame('portugal','16:00', 'uruguay')
           )}

        </main>


`