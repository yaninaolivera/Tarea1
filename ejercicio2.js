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

/* 2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden
ingresar: type, base_damage, base_hp o speed. */

let ordenar_pokemons = function (arreglo, ordenar_por) {
    var inputs = ["type", "base_damage", "base_hp", "speed"]
    if (inputs.includes(ordenar_por)) {
        arreglo.sort(function (a, b) {
            if (a[ordenar_por] > b[ordenar_por]) {
                return 1;
            } else if (a[ordenar_por] < b[ordenar_por]) {
                return -1;
            } else {
                return 0;
            }
        });
    }else{
        console.log("Argumento no válido")
    }
    return arreglo
}

let ordenar_por = prompt("Ingresar argumento (type, base_damage, base_hp, speed): ")

let ordenar = ordenar_pokemons(pokemons, ordenar_por)
console.log(ordenar)
