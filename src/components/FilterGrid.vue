<script setup lang="ts">
import { ref } from 'vue'

import { request } from '@/functions/requests'

import LinkStyleButton from '#/LinkStyleButton.vue'
import { useDialog } from '@/stores/dialog'

export type ColumnsDefs = {
  name: string
  label: string
  type: 'text' | 'number'
  pattern?: string
  width?: number
}

const { columns, endpoint, maintenceRouter, deleteEndpoint } = defineProps<{
  columns: ColumnsDefs[]
  maintenceRouter?: string
  endpoint: string
  deleteEndpoint?: string
}>()

function deleteRegister(id: number) {
  useDialog().confirm('Confimar exclusão do registro!', async () => {
    await request({
      endpoint: deleteEndpoint ?? '',
      callback: () => {
        useDialog().alert('Registro excluído com sucesso!')
        data.value = data.value.filter((item: any) => item.id !== id)
      },
      errorCallback: (err) => {
        useDialog().alert(err)
      }
    }, { id: id })
  })
}

const data = ref<any>([])
async function fill() {
  await request<any[]>({
    endpoint: endpoint,
    callback: (response) => {
      console.log(response)
      data.value = response
    },
    errorCallback: (err) => {
      alert(err)
    }
  }, {})
}
fill()

</script>

<template>
  <table>
    <thead>
      <tr class="gHeader">
        <th v-for="column in columns">
          <p>{{ column.label }}</p>
        </th>
        <th v-if="Boolean(maintenceRouter)"></th>
        <th v-if="Boolean(deleteEndpoint)"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" class="gRow">
        <td v-for="column in columns">
          {{ row[column.name] }}
        </td>
        <td v-if="Boolean(maintenceRouter)">
          <LinkStyleButton label="Editar" :onClick="() => $router.push(maintenceRouter + '/' + row.id)" />
        </td>
        <td v-if="Boolean(deleteEndpoint)">
          <LinkStyleButton label="Excluir" :onClick="() => deleteRegister(row.id)" />
        </td>
      </tr>
    </tbody>
  </table>
  <LinkStyleButton v-if="Boolean(maintenceRouter)" label="Adicionar"
    :onClick="() => $router.push(maintenceRouter + '/maintence' ?? '')" />
</template>

<style>
table {
  width: 100%;
}

thead {
  border-radius: 5rem;
}

.gHeader {
  background-color: var(--color-background-soft);
}

.gHeader>th>p {
  font-size: 18px;
  font-weight: bold;
}

.gRow>* {
  font-size: 14px;
}
</style>