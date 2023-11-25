<script setup lang="ts">

const { title } = defineProps<{
  title: string
}>()

</script>

<template>
  <header class="titleContainer">
    <p>{{ title }}</p>
  </header>
</template>

<style scoped>
.titleContainer {
  width: 100%;
}
</style>