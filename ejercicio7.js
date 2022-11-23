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


/* 7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello
considerar que el daño que hara el pokemon es: daño = base_damage + un valor aleatorio entre el min_damage y el max_damage */

function addAtributes() {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i]['min_damage'] = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        pokemons[i]['max_damage'] = Math.floor(Math.random() * (5 - 3 + 1) + 3)
    }
}

function setDamage(index) {
    if (index < pokemons.length) {
        addAtributes()
        let selectedPokemon = pokemons[index]
        let total_damage = selectedPokemon.base_damage + Math.floor(Math.random() * (selectedPokemon.max_damage - 1 + selectedPokemon.min_damage) + selectedPokemon.min_damage)
        
        console.log(selectedPokemon)
        console.log("El total damage es: " + total_damage)
    } else {
        console.log(`Please enter a number not greater tan ${pokemons.length - 1}`)
    }
}

let valor = +prompt("Ingresar valor 1 - 9: ")
setDamage(valor)
