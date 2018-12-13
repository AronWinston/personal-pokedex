'use strict'

axios.get("https://pokeapi.co/api/v2/pokemon/aron/")
.then(response => {

    let data = response.data;
    console.log(data);
    
    let array = [];
    for(let i=0; i < data.abilities.length; i++){
        
        array.push(data.abilities[i].ability.name);
    }
    
    
    let aron = new Pokemon ( data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, array);

    let pokeClass = document.querySelector(".poke");
            pokeClass.innerHTML=`<p class="hp">HP:  ${aron.hp}</p><p class="attack">ATTACK: ${aron.attack}</p>
                                <p class="defense">DEFENSE: ${aron.defense}</p><p class="skills" <strong>ABILITIES: <br> </strong>${aron.ability}</p>`;
    
    


});

let stats = document.querySelector(".poke");

let ball = document.querySelector(".ball");

let card = document.querySelector(".text");

ball.addEventListener('click',(event)=>{

    stats.classList.toggle("reveal");
    card.classList.toggle("reveal");


})
