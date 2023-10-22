<script setup lang="ts">
import { defineProps, type Component } from 'vue'

export type MenuItem = {
  label: string,
  options: MenuItem[] | (() => void)
}

const { label, options } = defineProps<MenuItem>()

</script>

<template>
  <div class="miContainer">
    <p tabindex="0" class="miLabel">{{ label }}</p>
    <div class="miIten">

    </div>
  </div>
</template>

<style scoped>
.miContainer {
  background-color: transparent;
}

.miContainer>p {
  color: var(--color-text);
}

.miContainer:hover,
.miContainer:focus {
  color: var(--color-text-soft)
}</style>