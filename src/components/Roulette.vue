<script setup lang="ts">
import { useTemplateRef, reactive, ref, onMounted, inject, computed } from 'vue'

interface Win {
  width: number
  height: number
}

let win = inject('win') as Win

onMounted(() => {})

const rouletteSize = ref(360)
const offset = ref('180px')

console.log(import.meta)

const image = `url(${import.meta.env.BASE_URL}images/roulette.svg)`
const center = `url(${import.meta.env.BASE_URL}images/JS.gif)`

const rouletteImage = ref(image)
const centerImage = ref(center)

console.log(rouletteImage)

const rouletteWeelAngle = ref('0deg')

interface RouletteItem {
  src: string
  width: number
  height: number
  alt: string
}

const props = defineProps({
  items: Array<RouletteItem>,
})

const state = reactive<{ angles: number[] }>({
  angles: [],
})
console.log(import.meta.env.BASE_URL)

function showDescription(item: RouletteItem) {
  // console.log(item)
}

function rotateWeel(event: Event): void {
  let angle = parseInt(rouletteWeelAngle.value)
  angle += angle < 330 ? 30 : 0
  rouletteWeelAngle.value = `${angle + 30}deg`
  state.angles.forEach(
    (angle, index) =>
      (state.angles[index] = state.angles[index] < 330 ? state.angles[index] + 30 : 0),
  )
  console.log(rouletteWeelAngle.value)
}

onMounted(() => {
  props.items &&
    props.items.map((item, index) => {
      state.angles.push(index * 30)
    })
})
</script>

<template>
  <main ref="roulete-container">
    <div class="skills-container">
      <h4 v-for="(item, index) of items" :key="index">
        {{ item.alt }}
      </h4>
    </div>
    <div ref="roulette-wheel" class="roulette-wheel" @click="rotateWeel">
      <div
        v-for="(item, index) of props.items"
        :key="index"
        class="roulette-item"
        :style="{ transform: `rotate(${state.angles[index]}deg)` }"
        @click="showDescription(item)"
      >
        <img
          :src="item.src"
          :width="item.width"
          :height="item.height"
          :alt="item.alt"
          :style="{ transform: `rotate(${-state.angles[index]}deg)` }"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 50vw;
  height: 50vw;
}
.roulette-wheel {
  position: relative;
  width: 360px;
  height: 360px;
  box-sizing: content-box;
  right: 0px;
  border-radius: 50%;
  background: transparent;
  border: solid 64px transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  cursor: pointer;
}

.roulette-wheel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 10px transparent;
  background-image: v-bind(centerImage), v-bind(rouletteImage);
  background-size: 80px, cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate(v-bind(rouletteWeelAngle));
  z-index: -1;
  transition: all 0.5s;
  cursor: pointer;
}
.roulette-item {
  position: absolute;
  width: 64px;
  height: 64px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.5s;
  text-align: center;
  border-radius: 50%;
  transform-origin: v-bind(offset) v-bind(offset);
}
</style>
