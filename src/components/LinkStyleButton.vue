<script setup lang="ts">
import { defineProps } from 'vue'

const { haveFocus, label, name, onClick } = defineProps<{
  label: string
  name?: string
  haveFocus?: boolean
  onClick: (name: string) => void
}>()

</script>

<template>
  <div :tabindex="haveFocus ? 0 : ''" class="flexRowContainer lsButton" :onclick="() => onClick(name ?? label)">
    <p>{{ label }}</p>
  </div>
</template>

<style scoped>
.lsButton {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .2rem .1rem;
}

.lsButton:focus {
  outline: none;
}

.lsButton:hover {
  cursor: pointer;
}

.lsButton>p {
  color: var(--color-oposite-text);
  user-select: none;
  text-decoration: underline;
}

.lsButton:hover>p,
.lsButton:focus>p {
  cursor: inherit;
  color: var(--color-text)
}
</style>