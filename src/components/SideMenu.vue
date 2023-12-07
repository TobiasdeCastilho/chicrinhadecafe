<script setup lang="ts">

import { useAuth } from '@/stores/auth';
import { useDialog } from '@/stores/dialog';

import IconProjectLogo from './icons/IconProjectLogo.vue';

import IconAdd from './icons/IconAdd.vue';
import IconLogout from './icons/IconLogout.vue';

const auth = useAuth()

</script>

<template>
  <div tabindex="0" class="smContainer">
    <div class="flexColumnContainer smMenu">
      <div tabindex="0" :onClick="() => $router.replace('/home')" class="smItem">
        <IconProjectLogo class="smIcon" />
      </div>
      <div class="smSeparator" />
      <div class="smItem" :onClick="() => $router.replace('/register')">
        <IconAdd class="smIcon" />
      </div>
      <div class="smItem" :onClick="() => auth.logout($router)">
        <IconLogout class="smIcon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.smContainer {
  height: 100%;
}

.smMenu {
  height: 100%;
  width: 5rem;
  padding: .5rem 0;
  background-color: var(--color-background-soft);
  justify-content: flex-start;
  border-radius: .8rem;
  overflow-y: scroll;
}

.smMenu:first-child::before {
  display: block;
  width: 90%;
  height: 1rem;
  background-color: var(--color-background);
}

.smItem:hover {
  cursor: pointer;
}

.smIcon {
  max-width: 2.5rem;
  height: auto;
}

.smSeparator {
  width: 60%;
  border-bottom: .2rem dashed var(--color-background);
  margin: 1rem 0;
}

.menuOptions>div {
  width: auto;
  height: 2rem;
}
</style>