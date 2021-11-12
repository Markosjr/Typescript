import axios from 'axios';

 async function getPokemon() {
 const ret = await axios.get("https://pokeapi.co/api/v2/pokemon/1/");
 console.log(ret);
 }

 getPokemon()