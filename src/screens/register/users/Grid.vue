<script setup lang="ts">

import FilterGrid wilsinfrom '#/FilterGrid.vue';
import Screen from '#/Screen.vue';

</script>

<template>
  <Screen title="Cadastros de usuários">
    <FilterGrid deleteEndpoint="userdelete" maintenceRouter="/register/users" :columns="[
      { name: 'id', label: 'Código', type: 'number' }, { name: 'username', label: 'Nome', type: 'text' }]"
      endpoint="userlist" />
  </Screen>
</template>

<style></style>