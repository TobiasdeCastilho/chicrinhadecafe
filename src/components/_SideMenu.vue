<script setup lang="ts">

import { ref } from 'vue'
import IconProjectLogo from './icons/IconProjectLogo.vue';

interface Menus {
  caption: string,
  routes: { description: string, route: string }[]
}

const menus: Menus[] = [
  {
    caption: 'Cadastros',
    routes: [
      { description: 'Produtos', route: '/register/products' },
      { description: 'Produtos', route: '/register/products' },
      { description: 'Produtos', route: '/register/products' },
      { description: 'Produtos', route: '/register/products' },
    ]
  },
  {
    caption: 'Vendas',
    routes: [
      { description: 'Orçamentos', route: '/sales/budgets' }
    ]
  }
]

const currentMenu = ref(0)

const defineMenu = (index: number) => {
  if (currentMenu.value !== index)
    currentMenu.value = index
  else
    currentMenu.value = -1
}

</script>

<template>
  <div tabindex="0" class="flexColumnContainer smContainer">
    <div tabindex="0" :onClick="() => $router.replace('/home')" class="smItem">
      <IconProjectLogo class="smIcon" />
    </div>
    <div class="smSeparator" />
    <div v-for="( menu, index ) in menus" tabindex="0" :onClick="() => defineMenu(index)" class="smItem">
      <p>{{ menu.caption }}</p>
      <div class="menuOptions">
        <div v-if="currentMenu == index" v-for="route in menus[currentMenu].routes" tabindex="0"
          :onClick="() => $router.replace(route.route)" class="smItem">
          <p>{{ route.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.smContainer {
  height: 100vh;
  width: 18rem;
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