<template>
  <div class="home">
    <p>Home View</p>
    <Table title="Assets" v-bind:columntitle="assets.colums" />

  </div>
</template>

<script>
import Table from '../components/Table.vue'
export default {
  name: 'HomeView',
  components: {
    Table,
  },
  data: () => {
    return {
      assets: {
        colums: ['Asset Code', 'Asset Name', "Price", "Volume 1h", "Volume 1m", "Volume 1y"]
      }
    }
  }
}
</script>


