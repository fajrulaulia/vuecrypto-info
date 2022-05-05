<template>
  <div class="home">
    <h1 class="text-center text-xl font-semibold">Welcome to Crypto Info - Lisitng Asset today!!!</h1>
    <Table title="Assets" v-bind:columntitle="assets.colums" v-bind:columndatasProps="assets.datas" />

  </div>
</template>

<script>
import Table from '../components/Table.vue'
import datas from '../dummy/assest.json'
export default {
  name: 'HomeView',
  components: {
    Table,
  },
  data: () => {
    return {
      assets: {
        colums: ['Asset Code', 'Asset Name', "Price", "Volume 1h", "Volume 1m", "Volume 1y"],
        datas: datas,
      }
    }
  }
}
</script>


