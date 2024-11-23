<script setup lang="ts">
import { reactive } from 'vue'
import Skill from './Skill.vue'
import Roulette from './Roulette.vue'
import { skills } from '../configs/roulette-items'

const titles = reactive(skills.map((item) => item.alt))
</script>

<template>
  <Roulette :items="skills" />

  <!-- <Skill>
    <template #icon>
      <img src="../assets/JS.gif" width="64" height="64" />
    </template>
    <template #heading>Native JS</template>

    <a href="https://garevna.github.io/js-lessons/" target="_blank" rel="noopener"> JS </a>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/typescript.svg" width="52" height="52" alt="Typescript" />
    </template>
    <template #heading>Typescript</template>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/vue.svg" width="56" height="56" alt="Vue.js" />
    </template>
    <template #heading>Vue</template>

    <a href="https://garevna.github.io/js-quiz/" target="_blank" rel="noopener"> Vue </a>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/vue3.png" width="56" height="36" alt="Vue3.js" />
    </template>
    <template #heading>Vue 3 (Composition API)</template>

    <a href="https://garevna.github.io/js-quiz/" target="_blank" rel="noopener"> Vue </a>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/nuxt.svg" width="56" height="56" alt="Nuxt.js" />
    </template>
    <template #heading>Nuxt</template>
    <a href="https://github.com/garevna/nuxt-app" target="_blank" rel="noopener"> SSR </a>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/postman.png" width="120" height="44" alt="Postman" />
    </template>
    <template #heading>Postman</template>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/swagger.jpeg" width="120" height="40" alt="Swagger" />
    </template>
    <template #heading>Swagger</template>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/git.svg" width="48" height="48" alt="git" />
    </template>
    <template #heading>Git</template>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/npm.svg" width="60" height="20" alt="npm" />
    </template>
    <template #heading>39 packages published</template>
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/github.svg" width="48" height="48" alt="github" />
    </template>
    <template #heading
      >80+
      <a href="https://github.com/garevna?tab=repositories" target="_blank" rel="noopener">
        github repos
      </a></template
    >
  </Skill> -->

  <!-- <Skill>
    <template #icon>
      <img src="../assets/indexedDB.png" width="48" height="48" alt="IndexedDB" />
    </template>
    <template #heading>IndexedDB</template>
  </Skill>

  <Skill>
    <template #icon>
      <img src="../assets/web-workers.jpg" width="56" height="42" alt="Web-workers" />
    </template>
    <template #heading>Web-workers</template>
  </Skill> -->
</template>

<style scoped>
.skills-container {
}
</style>
