<template>
  <div v-if="activeCompany" class="company">
    <h3 class="company__name">
      <strong>{{ activeCompany.name }}</strong
      ><Building />
    </h3>
    <p class="company__representative">{{ activeCompany.representative }}</p>
    <table>
      <tbody>
        <tr>
          <td class="label"><Envelope /> E-mail</td>
          <td class="email">{{ activeCompany.email }}</td>
        </tr>
        <tr>
          <td class="label"><Marker /> Localização</td>
          <td class="location">{{ activeCompany.city }}, {{ activeCompany.state }}</td>
        </tr>
        <tr>
          <td class="label"><Sparkles /> Categoria</td>
          <td class="category">{{ activeCompany.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { useCompaniesStore } from '@/stores/companies.js'
  import { computed } from 'vue'
  import { Building, Sparkles, Marker, Envelope } from '@/components/icons'

  const companiesStore = useCompaniesStore()
  const activeCompany = computed(() => companiesStore.activeCompany)
</script>

<style lang="scss" scoped>
  .company {
    z-index: 1;
    position: absolute;
    bottom: 32px;
    left: 32px;
    width: 350px;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: white;

    &__name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      font-size: 18px;
    }

    &__representative {
      font-size: 14px;
      margin-bottom: 8px;
    }

    table {
      width: 100%;

      td {
        padding-bottom: 5px;
        font-size: 14px;

        &:first-child {
          color: lightgray;

          svg {
            margin-right: 4px;
          }
        }

        &.label {
          font-weight: bold;
        }
      }
    }
  }
</style>
