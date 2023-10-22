<script setup lang="ts">

import { type MenuItem } from './MenuItem.vue'
import IconProjectLogo from './icons/IconProjectLogo.vue';

</script>

<template>
  <div tabindex="0" class="flexColumnContainer smContainer">
    <div :on-click="() => $router.replace('/home')" class="smItem">
      <IconProjectLogo class="smIcon" />
    </div>
    <div class="smSeparator" />
  </div>
</template>

<style scoped>
.smContainer {
  height: 100vh;
  width: 6rem;
  background-color: var(--color-background-soft);
  box-shadow: 3rem 0rem 1rem 1rem var(--t-cl-black);
  justify-content: flex-start;
  padding: 1rem 0;
  overflow-y: scroll;
}

.smContainer:first-child::before {
  display: block;
  width: 60%;
  height: 1rem;
  background-color: var(--color-background);
}

.smItem:hover {
  cursor: pointer;
}

.smIcon {
  max-width: 4rem;
  height: auto;
}

.smSeparator {
  width: 60%;
  border-bottom: .3rem dashed var(--color-background);
  margin: 1rem 0;
}
</style>