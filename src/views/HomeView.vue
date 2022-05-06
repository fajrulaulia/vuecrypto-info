<template>
  <div class="home">
    <h1 class="text-center text-xl font-semibold">Welcome to Crypto Info - Lisitng Asset today!!!</h1>
    <Table title="Assets" v-bind:columntitle="assets.colums" v-bind:columndatasProps="datas" />

  </div>
</template>

<script>
import Table from '../components/Table.vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    Table,
  },
  data() {
    return {
      assets: {
        colums: ['Asset Code', 'Asset Name', "Price", "Volume 1h", "Volume 1m", "Volume 1y"],
        loading: false
      },
      datas: [],

    }
  },

  async mounted() {
    await this.getAssets()
  },
  methods: {
    getAssets() {
      var config = {
        method: 'get',
        url: process.env.VUE_APP_COIN_API_IO_URL + "/v1/assets",
        headers: {
          'X-CoinAPI-Key': process.env.VUE_APP_COIN_API_IO_SECRET_KEY
        },
        maxContentLength: 10000000000000,
        maxBodyLength: 10000000000000,
      };

      axios(config)
        .then(res => this.datas = res.data)
        .catch(err => {
          console.log(err.message)
          if (err.message === "Request failed with status code 429") {
            alert("Error: Kena limit bre")
            return
          }
          alert("Error: ini kurang ngerti kenapa, cak check log bree")
        });
    }
  }
}
</script>


