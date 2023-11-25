<script setup lang="ts">

/* Dependencies */
import { ref, toRef } from 'vue';

/* Components */
import BorderlessButton from '@/components/BorderlessButton.vue';
import BorderlessInput from '@/components/BorderlessInput.vue';
import LinkStyleButton from '@/components/LinkStyleButton.vue';
import IconProjectLogo from '@/components/icons/IconProjectLogo.vue';

/* Stores */
import { useAuth } from '@/stores/auth';

const usernameRef = ref('')
const passwordRef = ref('')

function onKeyEnter(key: string) {
  if (key === "Enter")
    loginClick()
}

function forgotClick() {

}

function loginClick() {
  console.log(usernameRef.value, passwordRef.value)

  useAuth().login(usernameRef.value, passwordRef.value)
}

</script>

<template>
  <div id="screen" class="flexColumnContainer">
    <div class="container flexColumnContainer">
      <div class="logoContainer flexColumnContainer">
        <IconProjectLogo class="logo" />
      </div>
      <div class="formContainer flexColumnContainer">
        <BorderlessInput :label="'Usuário'" :name="'username'" :onEnterKey="onKeyEnter" v-model="usernameRef" />
        <BorderlessInput :label="'Senha'" :name="'password'" type="password" :onKeyPress="onKeyEnter"
          v-model="passwordRef" />
        <div class="flexRowBetweenContainer buttonsContainer">
          <LinkStyleButton :label="'Esqueci minha senha'" :name="'forgot'" :onClick="forgotClick" />
          <BorderlessButton :label="'Acessar'" :name="'login'" :onClick="loginClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 26rem;
  height: 26rem;
  background-color: var(--color-background-soft);
}

.logoContainer {
  flex: .5;
}

.logo {
  width: 6rem;
  height: auto;
}

.formContainer {
  flex: .4;
}

.buttonsContainer {
  width: 100%;
  padding-top: 1rem;
}
</style>