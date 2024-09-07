async function pokeFetch(){
    const name = document.getElementById("input").value.toLowerCase();
    if(name==''){
        window.alert("Please Name a Pokemon");
        console.error("user did not name a pokemon")
    }
    const sprite = document.getElementById("sprite");
    //console.log(name);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(response)
    if(response.ok!=true && name!=''){
        window.alert("Check Your Pokemon's Name")
        console.error("user did not name a correct pokemon");
    }
    const data = await response.json();
    //console.log(data)
    const spriteUrl = data.sprites.other.home.front_default;
    const hp = data.stats[0].base_stat;
    const def = data.stats[2].base_stat;
    const att = data.stats[1].base_stat;
    const spd = data.stats[5].base_stat;
    document.getElementById("hp").textContent=hp;
    document.getElementById("def").textContent=def;
    document.getElementById("att").textContent=att;
    document.getElementById("spd").textContent=spd;
    //console.log(spriteUrl);
    sprite.src = spriteUrl;
}


