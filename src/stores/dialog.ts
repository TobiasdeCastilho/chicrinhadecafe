/* Dependencies */
import { defineStore } from 'pinia'
import { ref } from 'vue'

type DialogType = 'confirm' | 'alert' | 'error' | undefined

interface Dialog { type?: DialogType, title: string, message: string, onConfirm?: () => void, onDeny?: () => void }

export const useDialog = defineStore('message', () => {
  const dialog = ref<Dialog>({ type: undefined, title: '', message: '' })
  const visible = ref<boolean>(false)

  function close() {
    visible.value = false
  }

  function alert(message: string) {
    dialog.value = { type: 'alert', title: 'Atenção', message }
    visible.value = true
  }

  async function confirm(message: string, onConfirm: () => void, onDeny?: () => void) {
    dialog.value = {
      type: 'confirm', title: 'Atenção', message, onConfirm, onDeny
    }
    visible.value = true
  }

  function error(message: string) {
    dialog.value = { type: 'error', title: 'Erro', message }
    visible.value = true
  }

  function isVisible(): boolean {
    return visible.value
  }

  function onConfirm() {
    dialog.value.onConfirm?.()
    visible.value = false
  }

  function onDeny() {
    dialog.value.onDeny?.()
    visible.value = false
  }

  function getMessage() {
    return dialog.value.message
  }

  function getTitle() {
    return dialog.value.title
  }

  return { alert, confirm, error, isVisible, close, onConfirm, onDeny, getMessage, getTitle }
})
