<script setup lang="ts">
import Portal from '../components/Portal.vue'
import { ref } from 'vue'
let show = ref(false)
let buttonChar = ref('▼')

function clickHandler(): void {
  show.value = !show.value
  buttonChar.value = show.value ? '▲' : '▼'
}
</script>

<template>
  <main>
    <h2>Portfolio</h2>
    <button @click="clickHandler">
      <img src="../assets/dgtek.png" alt="DGtek logo" width="64" />
      <h4>Portal {{ buttonChar }}</h4>
    </button>
    <div>
      <Portal :isActive="show" />
    </div>
    <a href="https://garevna.github.io/js-lessons/" target="_blank" rel="noopener">
      <img width="64" src="../assets/JS.gif" alt="js-lessons icon" />
    </a>
    <a href="https://garevna.github.io/js-quiz/" target="_blank" rel="noopener">
      <img width="64" src="../assets/JS.gif" alt="js-quiz icon" />
    </a>
  </main>
</template>

<style>
button {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content;
  grid-template-areas: 'image title';
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  background: #ddd;
  outline: none;
  padding: 4px 8px;
}
button > img {
  grid-area: image;
  align-self: center;
}
button > h4 {
  grid-area: title;
  align-self: center;
  text-align: end;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #075;
}

button > h4:hover {
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
