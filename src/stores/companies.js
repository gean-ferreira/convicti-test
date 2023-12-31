import { defineStore } from 'pinia'
import companiesJSON from '@/utils/companies.json'
// IMPORT SERVICE

export const useCompaniesStore = defineStore({
  id: 'companies',
  state: () => ({
    companies: companiesJSON,
    activeCompany: null
  }),
  actions: {
    updateActiveCompany(company) {
      this.activeCompany = company
    }
    // CRUD API SERVICE EMPRESAS
  }
})
