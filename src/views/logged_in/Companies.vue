<template>
  <main class="companies">
    <RegisterButton
      @click="offsetStore.open('registerCompany')"
      :name="'Adicionar Empresa'"
      style="margin-left: auto"
    />
    <CompanieCard />
    <Map />
  </main>
</template>

<script setup>
  import Map from '@/components/sections/Map.vue'
  import RegisterButton from '@/components/elements/buttons/RegisterButton.vue'
  import CompanieCard from '@/components/elements/cards/CompanieCard.vue'
  import { useOffsetStore } from '@/stores/offsetStore.js'

  const offsetStore = useOffsetStore()
</script>

<style lang="scss" scoped>
  .companies {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
  }
</style>
