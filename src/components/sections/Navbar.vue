<template>
  <nav class="navigation">
    <h4 class="navigation__title">MENU</h4>
    <ul class="navigation__list">
      <li class="list__item">
        <router-link :to="{ name: 'companies' }" class="item-link">
          <Building /> Empresas
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import Building from '@/components/icons/Building.vue'
</script>

<style lang="scss" scoped>
  .navigation {
    flex: 1;

    &__title {
      color: white;
      margin-bottom: 16px;
    }

    .list__item {
      background-color: white;
      border-radius: 6px;
    }

    .item-link {
      padding: 8px 20px;
      display: flex;
      gap: 16px;
    }
  }
</style>
