<script setup lang="ts">
import { reactive } from 'vue'
import Skill from './Skill.vue'
import Roulette from './Roulette.vue'
import { skills } from '../configs/roulette-items'
</script>

<template>
  <Roulette :items="skills" />
</template>
