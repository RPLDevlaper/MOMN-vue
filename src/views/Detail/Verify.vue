<template>
  <div>
    <b-container fluid class="py-5 position-relative">
      <div class="cover-tf position-absolute">
        <img :src="`${web}images/game/${games.cover}`" class="w-100 position-absolute" style="right: 0px; top: 50px" alt="cover game">
        <div class="position-absolute overlay-white-top w-100 h-100" style="right: 0px; bottom: 0px"></div>
      </div>
      <b-container class="py-5 position-relative" v-if="verified == false">
        <b-row class="py-5">
          <b-col md="6">
            <b-button class="btn btn-green-dark py-3 px-5" @click="onBack()">Kembali</b-button>  
          </b-col> 
          <b-col md="8" class="pt-5" offset-md="2">
            <div class="w-100 bg-white text-left rad shadow-sm px-4 pt-4 pb-4">
              <h2 class="viga">Check email Anda</h2>
              <p>Kami telah mengirimkan email ke <span class="mText-primary">{{ transactions.email }}</span> yang berisi kode transaksi untuk keperluan TopUp Game {{ games.name }}. hal ini memastikan bahwa anda benar benar memiliki email</p>
              <div class="text-center">
                <b-form-input v-model="token" class="verifikasi d-inline-block" placeholder="XXX XXX" @keyup="checkTransaction"></b-form-input>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="py-5 position-relative" v-if="verified == true">
        <b-row class="py-5">
          <b-col md="8" class="pt-5" offset-md="2">
            <div class="w-100 bg-white text-left rad shadow-sm px-4 pt-4 pb-4">
              <h2 class="viga">Berhasil Verifikasi</h2>
              <p>Selamat transaksi anda sudah berhasil, Terimakasih telah menggunakan MOMN untuk keperluan Game anda. Sampai Jumpa</p>
              <div class="text-center">
                <b-form-input v-model="token" class="verifikasi d-inline-block" readonly disabled placeholder="XXX XXX" @keyup="checkTransaction"></b-form-input>
              </div>
              <b-button @click="onBack()" class="btn mt-3 btn-green-primary py-3 w-100">Kembali ke Game List</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<style lang="scss">
@import '~@/assets/css/style.scss';
@import '~@/assets/css/game.scss';
</style>

<script>
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
export default {
  data() {
    return {
      isLoading: false,
      color: '#14eba2',
      fullPage: true,
      verified: false,
      verified: localStorage.getItem('verified'),
      tf_id: localStorage.getItem('tf_id'),
      bgColor: "#000",
      loader: 'dots',
      token: '',
      idgame: '',
      tf_email: localStorage.getItem('email'),
      transactions: {
        email: 'dummy@email.com'
      },
      prices: {
        banner: 'price.1604830765.jpeg'
      },
      check: '<font-awesom-icon icon="check"></font-awesom-icon>',
      form: {
        email: '',
        phone: '',
        username: '',
        openId: localStorage.getItem('openId'),
      },
      games: {
        name: 'Game',
        cover: 'Cover.1604818057.jpeg',
        logo: 'Logo.1604818057.png'
      },
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapGetters({
      priceId: 'Transaction/price',
      gameId: 'Transaction/game',
      isPrice: 'Transaction/isPrice',
      isGame: 'Transaction/isGame',
      api: 'Api/getApi',
      web: 'Api/getWeb',
    })
  },
  mounted() {
    // this.checkLocal()
    this.getGame()
    this.getPrice()
    this.getTransaction()
    this.sendEmail()
  },
  methods: {
    checkTransaction() {
      if(this.token.length == 6) {
        this.$http.post(`${this.api}transaction/game/verify`, {
          token: this.token
        }).then((response) => {
          console.log(response)
          if(response.data.data != null) {
            alert('Berhasil')
            this.verified = true
          } else {
            // alert('Gagal')
          }
        })
      }
    },
    sendEmail() {
      console.log(this.tf_email)
      this.$http.post(`${this.api}transaction/game/${this.tf_id}/sendEmail`, {
        email: this.tf_email
      }).then((response) => {
        console.log(response)
      })
    },
    onBack() {
      localStorage.removeItem('priceId')
      localStorage.removeItem('gameId')
      localStorage.removeItem('openId')
      localStorage.removeItem('tf_id')
      localStorage.removeItem('verified')
      localStorage.removeItem('email')
      window.location.href = '/#/game'
    },
    checkLocal() {
      if(this.verified == null && this.verified == undefined) {
        this.$router.push({name: 'Game'})
      }
    },
    getTransaction() {
      this.$http.get(`${this.api}transaction/game/${this.tf_id}`)
      .then((response) => {
        this.transactions = response.data.data
      })
    },
    getGame() {
      this.idgame = localStorage.getItem('gameId')
      this.$http.get(`${this.api}game/${this.idgame}`)
      .then((response) => {
        this.games = response.data.data
      })
    },
    getPrice() {
      this.$http.get(`${this.api}price/game/${this.priceId}`)
      .then((response) => {
        console.log(response)
        this.prices = response.data.data
      })
    }
  }
}
</script>

