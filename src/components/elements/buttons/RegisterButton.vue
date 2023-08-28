<template>
  <button class="register">{{ name }} <Plus /></button>
</template>

<script setup>
  import Plus from '@/components/icons/Plus.vue'
  defineProps({
    name: { default: 'Adicionar', type: String }
  })
</script>

<style lang="scss" scoped>
  .register {
    width: fit-content;
    padding: 24px 20px;
    background-color: $BackgroundLight;
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
