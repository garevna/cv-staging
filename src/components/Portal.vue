<script setup lang="ts">
import { portalDescription } from '../configs/portal-description'
import ExpandedText from './ExpandedText.vue'
import { ref, reactive, useTemplateRef, onMounted, watch } from 'vue'

const props = defineProps({
  isActive: Boolean,
})

const sourceData: string[] = reactive<string[]>(portalDescription.split('\n'))

// const lines = reactive<string[]>(new Array(sourceData.length).fill(''))

const container = useTemplateRef('container-for-portal-description')

interface Bounds {
  width: number
}

let bounds = reactive<Bounds>({ width: 320 })

let frameWidth = ref(360)
let frameHeight = ref(360 * 1.77777777777)

onMounted(() => {
  if (container.value) {
    const bounds = container.value.getBoundingClientRect()
    frameWidth.value = bounds.width
    frameHeight.value = Math.floor(bounds.width / 1.77777777777)
  }
})
</script>

<template>
  <div ref="container-for-portal-description" class="container">
    <ExpandedText :isActive="isActive" :sourceData="sourceData" />
  </div>
  <div v-if="isActive" class="container">
    <iframe
      :width="frameWidth"
      :height="frameHeight"
      src="https://www.youtube.com/embed/videoseries?list=PLaum0i8Jzw-uzioRfS95KUfMyH4Y3unkT&autoplay=1"
      title="Portal"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>
