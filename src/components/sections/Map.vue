<template>
  <div id="map"></div>
</template>

<script setup>
  import 'ol/ol.css'
  import { ref, onMounted } from 'vue'
  import { Map, View } from 'ol'
  import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
  import { OSM, Vector as VectorSource } from 'ol/source'
  import { Point } from 'ol/geom'
  import { Feature } from 'ol'
  import { fromLonLat } from 'ol/proj'
  import { Style, Icon } from 'ol/style'
  import icon from '@/assets/imgs/fill-marker.svg'
  import iconSelected from '@/assets/imgs/fill-marker-selected.svg'
  import { useCompaniesStore } from '@/stores/companies.js'

  const companiesStore = useCompaniesStore() // Store
  const companies = ref(companiesStore.companies)

  // MAP OPENLAYERS
  const map = ref(null)

  onMounted(() => {
    const companyFeatures = companies.value.map(company => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([company.longitude, company.latitude])),
        company: company
      })
      return feature
    })

    const vectorSource = new VectorSource({
      features: companyFeatures
    })

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: function (feature) {
        const company = feature.get('company')
        const currentIcon = company === companiesStore.activeCompany ? iconSelected : icon
        return new Style({
          image: new Icon({
            src: currentIcon,
            scale: 1.5
          })
        })
      }
    })

    map.value = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([-46.633308, -23.55052]), // Foca na cidade de SP
        zoom: 12
      })
    })

    map.value.on('click', showCompanyInfo)

    function showCompanyInfo(event) {
      let clickedOnFeature = false

      map.value.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
        const company = feature.get('company')
        companiesStore.updateActiveCompany(company)
        clickedOnFeature = true
      })

      // Se não clicou em nenhum ícone, atualize a empresa ativa para um objeto vazio
      if (!clickedOnFeature) {
        companiesStore.updateActiveCompany(null)
      }

      // Atuliza o icon
      vectorLayer.changed()
    }
  })
</script>

<style lang="scss" scoped>
  .companies {
    display: flex;
    flex-direction: column;
    gap: 32px;

    #map {
      border-radius: 16px;
      overflow: hidden;
      height: calc(100vh - 160px);
      width: 100%;
    }
  }
</style>
