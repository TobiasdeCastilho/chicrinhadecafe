<script setup lang="ts">

import MenuButton from '#/MenuButton.vue'
import Screen from '#/Screen.vue'

import IconMaterial from '@/components/icons/IconMaterial.vue'
import IconUser from '@/components/icons/IconUser.vue';
import { useDialog } from '@/stores/dialog'

const dialog = useDialog()

</script>

<template>
  <Screen title="Cadastros">
    <MenuButton class="rButton" label="Materiais" :onClick="() => $router.push('register/materials')">
      <IconMaterial class="rIcon" />
    </MenuButton>
    <MenuButton class="rButton" label="Usuários" :onClick="() => $router.push('register/users')">
      <IconUser class="rIcon" />
    </MenuButton>
    <MenuButton class="rButton" label="Dialog" name="materials"
      :onClick="() => dialog.confirm('merda?', () => console.log('cu'))">
    </MenuButton>
  </Screen>
</template>

<style scoped>
.rIcon {
  height: 5rem;
  width: auto;
}
</style>