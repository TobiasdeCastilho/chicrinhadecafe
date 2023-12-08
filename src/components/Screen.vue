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
    <div v-if="dialog.isVisible()">
      <dialog open>
        <div class=" sDialog">
          <div class="sDialogTitle">
            <p>{{ dialog.getTitle() }}</p>
          </div>
          <div class="sDialogText">
            <p>{{ dialog.getMessage() }}</p>
          </div>
          <div>
          </div>
          <div class="sButtonContainer">
            <div v-if="dialog.getType() === 'confirm'">
              <div class="sDialogButton" :onClick="() => dialog.onConfirm()">
                <p>Sim</p>
              </div>
              <div class="sDialogButton" :onClick="() => dialog.onDeny()">
                <p>Não</p>
              </div>
            </div>
            <div v-if="dialog.getType() !== 'confirm'">
              <div class="sDialogButton" :onClick="() => {
                dialog.close()
                dialog.onConfirm()
              }">
                <p>Ok</p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #00000044;
  position: absolute;
  z-index: 10000;
}

.sDialog {
  width: 30rem;
  background-color: var(--color-background);
}

.sDialogTitle {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: .2rem 0;
}

.sDialogTitle>p {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-oposite-background);
  user-select: none;
}

.sDialogText {
  display: flex;
  flex: 1;
  justify-content: left;
  align-items: center;
  height: 2rem;
  padding: 0 1.5rem;
}

.sDialogText>p {
  font-size: 16px;
  color: var(--color-oposite-background);
}

.sButtonContainer>div {
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