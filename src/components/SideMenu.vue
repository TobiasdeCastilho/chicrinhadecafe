<script setup lang="ts">

import IconProjectLogo from './icons/IconProjectLogo.vue';

</script>

<template>
  <div tabindex="0" class="flexColumnContainer smContainer">
    <div tabindex="0" :onClick="() => $router.replace('/home')" class="smItem">
      <IconProjectLogo class="smIcon" />
    </div>
    <div class="smSeparator" />
    <div class="smItem" :onClick="() => $router.replace('/register')">
      <p>Cadastro</p>
    </div>
    <div class="smItem" :onClick="() => $router.replace('/stock')">
      <p>Estoque</p>
    </div>
    <div class="smItem" :onClick="() => $router.replace('/sales')">
      <p>Vendas</p>
    </div>
  </div>
</template>

<style scoped>
.smContainer {
  height: 100vh;
  width: 5rem;
  background-color: var(--color-background-soft);
  box-shadow: .4rem 0rem .6rem -.8rem var(--color-oposite-background);
  justify-content: flex-start;
  padding: 1rem 0;
  overflow-y: scroll;
}

.smContainer:first-child::before {
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