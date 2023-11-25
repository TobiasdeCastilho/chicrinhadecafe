<script setup lang="ts">


const { label, name, type, pattern, minimumSize, onEnterKey } = defineProps<{
  label: string
  minimumSize?: number
  name?: string
  onEnterKey?: (evt: string, _evt: any) => void
  pattern?: 'number' | 'text'
  type?: 'number' | 'password' | 'text'
  modelValue?: string
}>()

const getPattern = () => {
  switch (pattern) {
    case 'number': {
      return "[0-9]"
    }
    default: {
      return ""
    }
  }
}

function onKeyPress(evt: any) {
  onEnterKey?.(evt?.key, evt)
}

</script>

<template>
  <div class="flexRowContainer blInputContainer">
    <input v-bind="$attrs" :min="minimumSize" :name="name" :pattern="getPattern()" :type="type" placeholder=" "
      @input="$emit('update:modelValue', $event.target?.value)" v-on:keypress="onKeyPress">
    <label :for="name">{{ label }}</label>
  </div>
</template>

<style scoped>
.blInputContainer {
  background-color: var(--color-background);
  justify-content: flex-start;
  margin: .3rem 0;
  position: relative;
}

.blInputContainer>label {
  transition: all 200ms;
  background-color: transparent;
  color: var(--color-text);
  left: .4rem;
  position: absolute;
}

.blInputContainer>input {
  border: none;
  padding-left: .4rem;
  padding-top: .8rem;
  line-height: 5rem;
  width: 22rem;
  height: 2.5rem;
  font-size: 14px;
  background-color: transparent;
}

.blInputContainer>input:focus~label,
.blInputContainer>input:not(:placeholder-shown)~label {
  transition: all 300ms;
  font-size: 11px;
  left: .3rem;
  top: 0rem;
}

.blInputContainer>input:focus {
  box-shadow: .1rem .1rem var(--t-cl-black-soft);
  outline: none;
}
</style>