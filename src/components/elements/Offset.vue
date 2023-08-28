<template>
  <div>
    <div class="overlay" v-if="isOpen" @click="closeOffset"></div>
    <div class="offset" :class="{ 'offset-open': isOpen }">
      <component v-if="isOpen" :is="CurrentComponent" />
    </div>
  </div>
</template>

<script setup>
  import RegisterCompany from '@/components/forms/RegisterCompany.vue'
  import { computed } from 'vue'
  import { useOffsetStore } from '@/stores/offsetStore'

  const offsetStore = useOffsetStore()

  const isOpen = computed(() => offsetStore.isOpen)
  const mutation = computed(() => offsetStore.mutation)

  // Mapa das mutações
  const componentsMap = {
    registerCompany: RegisterCompany
  }
  const CurrentComponent = computed(() => componentsMap[mutation.value])

  const closeOffset = () => {
    offsetStore.isOpen = false
  }
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
  }
  .offset {
    z-index: 3;
    position: fixed;
    right: 0;
    top: 0;
    width: 0;
    height: 100vh;
    background-color: $Background;
    transition: width 0.3s ease;
    overflow-y: auto;

    &-open {
      width: 50%;
      padding: 32px;
    }
  }
</style>
