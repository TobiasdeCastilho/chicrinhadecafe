<script setup lang="ts">

import SideMenu from '#/SideMenu.vue';
import { useDialog } from '@/stores/dialog';

const { title } = defineProps<{
  title?: string
}>()

const dialog = useDialog()
dialog.close()

</script>

<template>
  <div id="screenContainer">
    <dialog :open="dialog.isVisible()">
      <div class="sDialog">
        <div>
          <p>{{ dialog.getTitle() }}</p>
        </div>
        <div>
          <p>{{ dialog.getMessage() }}</p>
        </div>
        <div>
        </div>
        <div class="sButtonContainer">
          <div class="sDialogButton" :onClick="() => dialog.onConfirm()">
            <p>Sim</p>
          </div>
          <div class="sDialogButton" :onClick="() => dialog.onDeny()">
            <p>Não</p>
          </div>
          <div class="sDialogButton" :onClick="() => dialog.close()">
            <p>Ok</p>
          </div>
        </div>
      </div>
    </dialog>
    <div id="screen">
      <SideMenu />
      <div class="sContainer">
        <div v-if="title">
          <div class="sTitleContainer">
            <p>{{ title ?? '' }}</p>
          </div>
        </div>
        <div class="sContent">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#screenContainer {
  display: inline-flex;
}

#screen {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: .8rem;
}

.sContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.sTitleContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-radius: .5rem;
  background-color: var(--color-background-soft);
}

.sTitleContainer>p {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-oposite-background);
  user-select: none;
}

.sContent {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

dialog {
  width: 100%;
  height: 100%;
  border: none;
  background: #00000044;
}

.sDialog {
  width: 30rem;
  background-color: var(--color-background);
}

.sButtonContainer {
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.sDialogButton {
  background-color: var(--color-oposite-background);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem 1rem;
  margin: .2rem 0;
}

.sDialogButton:hover {
  cursor: pointer;
}
</style>