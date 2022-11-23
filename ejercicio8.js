let pokemons = [
    { id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30 },
    { id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26 },
    { id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26 },
    { id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32 },
    { id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35 },
    { id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32 },
    { id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30 },
    { id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30 },
    { id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36 },
    { id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30 },
]


/* 8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons.
    El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage 
    sea el que este primero en la lista y asi sucesivamente. */

let pokemon_master = {
    id: 1, name: "master", created_date: "22/11/2022", pokemon: []
}

function setTotalDamage() {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i]['min_damage'] = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        pokemons[i]['max_damage'] = Math.floor(Math.random() * (5 - 3 + 1) + 3)
        pokemons[i]['total_damage'] = pokemons[i]["base_damage"] + Math.floor(Math.random() * (pokemons[i]["max_damage"] - 1 + pokemons[i]["min_damage"]) + pokemons[i]["min_damage"])
    }

    pokemons.sort(function (a, b) {
        if (a.total_damage > b.total_damage) {
            return -1;
        } else if (a.total_damage < b.total_damage) {
            return 1;
        } else {
            return 0;
        }
    })

    pokemon_master.pokemon.push(pokemons)
    console.log(pokemon_master)
}

setTotalDamage()
