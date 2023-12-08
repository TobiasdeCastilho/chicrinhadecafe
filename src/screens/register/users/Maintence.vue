<script setup lang="ts">

import { ref } from 'vue';

import Screen from '#/Screen.vue';

import BorderlessButton from '#/BorderlessButton.vue';
import BorderlessInput from '#/BorderlessInput.vue';
import { request } from '@/functions/requests';
import { useDialog } from '@/stores/dialog';
import { useRoute, type Router } from 'vue-router';

const usernameRef = ref('')
const displaynameRef = ref('')
const passwordRef = ref('')

function add(router: Router) {
  if (usernameRef.value === '' || displaynameRef.value === '' || passwordRef.value === '') {
    useDialog().alert('Preencha todos os campos!')
    return
  }

  request({
    endpoint: !route.query.id ? 'useradd' : 'userupdate',
    callback: () => {
      useDialog().alert('Usuário cadastrado com sucesso!', () => router.back())
    },
    errorCallback: (err) => {
      useDialog().alert(err)
    }
  }, {
    username: usernameRef.value,
    displayname: displaynameRef.value,
    password: passwordRef.value
  })
}

const route = useRoute()
if (route.params.id) {
  console.log('id', route.params.id)

  request<{ username: string, displayname: string }>({
    endpoint: 'userget',
    callback: (response) => {
      usernameRef.value = response.username
      displaynameRef.value = response.displayname
      passwordRef.value = ''
    },
    errorCallback: (err) => {
      useDialog().alert(err)
    }
  }, {
    id: route.params.id
  })
}

</script>

<template>
  <Screen title="Cadastros de usuários">
    <div class="center">
      <div class="container flexColumnContainer">
        <BorderlessInput label="Nome de usuário" v-model="usernameRef" />
        <BorderlessInput label="Nome de exibição" v-model="displaynameRef" />
        <BorderlessInput label="Senha" v-model="passwordRef" type="password" />
        <BorderlessButton :label="route.params.id ? 'Salvar' : 'Adicionar'" :onClick="() => add($router)" />
      </div>
    </div>
  </Screen>
</template>

<style>
.center {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  width: 26rem;
  height: 26rem;
  background-color: var(--color-background-soft);
}
</style>
