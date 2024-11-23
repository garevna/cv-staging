<script setup lang="ts">
// import { portalDescription } from '../configs/portal-description'
import { reactive, watch } from 'vue'

const props = defineProps({
  isActive: Boolean,
  sourceData: {
    type: Array<string>,
    required: true,
  },
  role: {
    type: String,
    default: 'Senior developer',
  },
  stack: {
    type: String,
    default: 'Vue.js • Vue router • Vuetify • REST API • web-workers • IndexedDB',
  },
})

// const sourceData: string[] = reactive<string[]>(portalDescription.split('\n'))

const lines = reactive<string[]>(new Array(props.sourceData.length).fill(''))

function show(): void {
  let counter = 0
  for (let i = 0; i < props.sourceData.length; i++) {
    const line: string = props.sourceData[i] || '\n'
    for (let n = 0; n < line.length; n++) {
      setTimeout(() => {
        lines[i] = line.slice(0, n + 1)
      }, 4 * counter++)
    }
  }
}

function hide(): Promise<boolean> {
  let counter = 0
  for (let i = 0; i < lines.length; i++) {
    for (let n = 0; n <= lines[i].length; n++) {
      setTimeout(() => {
        lines[i] = lines[i].slice(0, -1)
      }, counter++)
    }
  }
  return new Promise((resolve) => resolve(true))
}

watch(props, async (newVal, oldVal) => {
  newVal.isActive ? show() : await hide()
})
</script>

<template>
  <!-- <div ref="container-for-portal-description" class="container"> -->
  <div v-if="isActive" class="grey">Role: {{ props.role }}</div>

  <div v-if="isActive" class="stack"><b>Stack: </b>{{ props.stack }}</div>

  <p v-for="(line, index) of lines" :key="index">
    <span v-if="line.length">{{ line }}</span>
  </p>
  <!-- </div> -->
</template>

<style scoped>
/* .container {
  padding: 16px 0 16px 4px;
} */
.container > p {
  margin-bottom: 8px;
  font-size: 14px;
}
.grey {
  text-align: right;
  color: #777;
}

.stack {
  color: #58b;
  margin: 16px 0;
}

/* .description {
  padding: 32px 16px;
} */
</style>
