<script setup>
import { onMounted, ref } from "vue";
import api from "@/service/api";

const pokemons = ref([]);

const fetchPokemons = () =>
  api
    .get("/pokemon/8")
    .then((response) => (pokemons.value = response.data.sprites.front_default));

onMounted(fetchPokemons);
console.log(pokemons);
</script>

<template>
  <div v-for="(pokemon, i) in pokemons" :key="i">
    <div class="card">
      <div class="box_image">
        <img v-bind:src="pokemons"  alt="Avatar" />
      </div>
      <div class="garage_title">
        <h4>
          <b>{{ pokemon.name }}</b>
        </h4>
      </div>
      <div class="car_title">
        <p>{{ pokemon.url }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 250px;
  height: 300px;
  background-color: var(--vt-c-white);
}
.box_image {
  display: flex;
  justify-content: center;
  max-height: 70%;
  object-fit: cover;
}
.box_image img {
  width: 100%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.garage_title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: var(--vt-c-white);
  background-color: var(--vt-c-orange);
  height: 10%;
}
.car_title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: var(--vt-c-gray-mute);
  font-weight: 700;
  height: 20%;
}
</style>
