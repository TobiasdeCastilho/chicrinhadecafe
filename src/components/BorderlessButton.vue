<script setup lang="ts">
import { defineProps } from 'vue'

const { label, name, onClick } = defineProps<{
  label: string
  name?: string
  onClick: (name: string) => void
}>()

</script>

<template>
  <div tabindex="0" class="flexColumnContainer blButton" :onclick="() => onClick(name ?? label)">
    <p>{{ label }}</p>
  </div>
</template>

<style scoped>
.blButton {
  background-color: var(--color-oposite-background);
  width: 8.8rem;
  height: 1.8rem;
  margin: .2rem .1rem;
  padding: .1rem .1rem;
}

.blButton:hover {
  cursor: pointer;
}

.blButton:focus {
  outline: none;
}

.blButton:hover,
.blButton:focus {
  border: .1 rem solid var(--color-background);
}

.blButton>p {
  color: var(--color-background);
  font-weight: bold;
  user-select: none;
}

.blButton:hover>p,
.blButton:focus>p {
  color: var(--color-oposite-focus);
}
</style>