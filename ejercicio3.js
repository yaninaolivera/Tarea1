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

/* 3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe
    aceptar un argumento para filtrar por type de pokemon. */

let filtrar_por = prompt("Ingresar tipo pokemon: ")

let filtrar_pokemons = function (arreglo, filtrar_por) {
    arreglo = arreglo.filter(arr => arr.type === filtrar_por);
    if (arreglo.length === 0) {
        console.log("No existe pokemons del tipo "+filtrar_por)
    }
    return arreglo
}

let filtrar = filtrar_pokemons(pokemons, filtrar_por)
console.log(filtrar)
