<script>
const POKEMON_API="https://pokeapi.co/api/v2/pokemon?limit=151"

const POKEMON_IMAGE="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"



export default {
    name: 'PokedexPage',
    data() {
        return {
            pokemon: []
        };
    },
    methods: {
        async catchAll() {
           const result = await fetch(POKEMON_API);
           const data = await result.json();
           this.pokemon = data.results;
        },
    },
}
</script>

<template>
<h1>Pokedex</h1>

<button @click="catchAll">Catch Pokemon</button>

{{ pokemon }}

    <ul>
        <li v-for="(pokeman, index) in pokemon">
            <p>{{pokeman.name}}</p>
            <img 
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index +  1}.png`" 
                :alt="pokeman.name">
        </li>
    </ul>

</template>