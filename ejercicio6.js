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

/* /6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de
    pokemons teniendo en cuenta lo siguiente: min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero 
    entero aleatorio entre 3 y 5 */

function addAtributes() {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i]['min_damage'] = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        pokemons[i]['max_damage'] = Math.floor(Math.random() * (5 - 3 + 1) + 3)
    }

    console.log(pokemons)
}

addAtributes()
