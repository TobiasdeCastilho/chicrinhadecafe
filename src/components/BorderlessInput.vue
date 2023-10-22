<script setup lang="ts">
import { defineProps } from 'vue'

const { label, name, type, pattern, minimumSize } = defineProps<{
  label: string
  name: string
  type?: 'number' | 'password' | 'text'
  pattern?: 'number' | 'text'
  minimumSize?: number
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

</script>

<template>
  <div class="flexRowContainer blInputContainer">
    <input placeholder=" " :min="minimumSize" :type="type" :pattern="getPattern()" :name="name">
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
  font-size: 11px;
  left: .3rem;
  top: 0rem;
}

.blInputContainer>input:focus {
  box-shadow: .1rem .1rem var(--t-cl-black-soft);
  outline: none;
}
</style>