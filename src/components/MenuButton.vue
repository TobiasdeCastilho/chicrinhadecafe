<script setup lang="ts">

const { label, name, onClick } = defineProps<{
  label: string
  name?: string
  onClick: (name: string) => void
}>()

</script>

<template>
  <button tabindex="0" class="flexColumnContainer mButton" :onclick="() => onClick(name ?? label)">
    <slot></slot>
    <p>{{ label }}</p>
  </button>
</template>

<style scoped>
.mButton {
  display: flex;
  height: 10rem;
  width: 10rem;
  background-color: var(--color-background-soft) !important;
  border: none;
  border-radius: 1rem;
  flex: columns;
  gap: 1.5rem;
}

.mButton:hover {
  cursor: pointer;
}

.mButton:focus {
  outline: none;
}

.mButton:hover,
.mButton:focus {
  border: .1 rem solid var(--color-background);
}

.mButton>p {
  color: var(--color-oposite-background);
  font-weight: bold;
  user-select: none;
}

.mButton:hover,
.mButton:focus {
  box-shadow: .3rem .3rem 1rem var(--color-background-soft);
}
</style>