import axios from 'axios';

 function getPokemnon () {
 const ret = axios.get("https://pokeapi.co/api/v2/pokemon/1/");
 console.log(ret);
 }

 getPokemnon ()