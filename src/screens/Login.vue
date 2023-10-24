<script setup lang="ts">
import BorderlessInput from '../components/BorderlessInput.vue'
import BorderlessButton from '../components/BorderlessButton.vue'
import LinkStyleButton from '../components/LinkStyleButton.vue'
import IconProjectLogo from '../components/icons/IconProjectLogo.vue'

const forgotClick = () => {

}

const loginClick = () => {
}

</script>

<template>
  <div id="screen" class="flexColumnContainer">
    <div class="container flexColumnContainer">
      <div class="logoContainer flexColumnContainer">
        <IconProjectLogo class="logo" />
      </div>
      <div class="formContainer flexColumnContainer">
        <BorderlessInput :label="'Usuário'" :name="'user'" />
        <BorderlessInput :label="'Senha'" :name="'password'" type="password" />
        <div class="flexRowBetweenContainer buttonsContainer">
          <LinkStyleButton :label="'Esqueci minha senha'" :name="'forgot'" :onClick="(t) => console.log(t)" />
          <BorderlessButton :label="'Acessar'" :name="'login'" :onClick="(t) => $router.replace('/home')" />
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