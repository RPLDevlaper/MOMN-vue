<template>
  <div>
    <loading :active.sync="isLoading" 
      :can-cancel="true" 
      :on-cancel="onCancel"
      :loader="loader"
      :background-color="bgColor"
      :color="color"
      :is-full-page="fullPage">
    </loading>
    <b-container fluid class="py-5 position-relative">
      <div class="cover-tf position-absolute">
        <img :src="`${web}images/game/${games.cover}`" class="w-100 position-absolute" style="right: 0px; top: 50px" alt="cover game">
        <div class="position-absolute overlay-white-top w-100 h-100" style="right: 0px; bottom: 0px"></div>
      </div>
      <b-container class="py-5 position-relative">
        <b-row class="py-5">
          <b-col md="6">
            <b-button class="btn btn-green-dark py-3 px-5" @click="onBack">Kembali</b-button>  
          </b-col> 
          <b-col md="8" class="pt-5" offset-md="2">
            <div class="w-100 bg-white rad shadow-sm px-4 pt-4 pb-4">
              <img :src="`${web}images/game/logo/${games.logo}`" width="50px" class="mb-2" alt="">
              <h2 class="viga">TopUp {{ games.name }}</h2>
              <div class="text-left">
                <label for="openId">OpenId</label>
                <b-form-input class="py-4 px-4 rad mb-3" style="letter-spacing: 10px" disabled readonly v-model="form.openId"></b-form-input>
                <label for="openId">Username akun {{ games.name }}</label>
                <b-form-input class="py-4 px-4 rad mb-3" v-model="form.username" placeholder="Username"></b-form-input>
                <label for="openId">Email pribadi</label>
                <b-form-input class="py-4 px-4 rad mb-3" v-model="form.email" placeholder="contoh@domain.com"></b-form-input>
                <label for="openId">Phone Number</label>
                <b-form-input class="py-4 px-4 rad mb-3" v-model="form.phone" placeholder="+62 xxx-xxx-xxx"></b-form-input>
              </div>
              <div class="w-100 text-right pt-3">
                <b-button class="btn btn-green-primary px-5 py-3" @click="submitForm()">Lanjutkan</b-button>
              </div>
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
      verified: localStorage.getItem('verified'),
      bgColor: "#000",
      idgame: '',
      loader: 'dots',
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
  created() {
    this.getGame()
    // this.checkLocal()
    this.getPrice()
  },
  methods: {
    onBack() {
      localStorage.removeItem('priceId')
      localStorage.removeItem('gameId')
      localStorage.removeItem('openId')
      localStorage.removeItem('tf_email')
      window.location.href = '/#/game'
    },
    submitForm() {
      this.isLoading = true
      this.$http.post(`${this.api}transaction/game`, {
        id_account: this.form.openId,
        name_account: this.form.username,
        phone: this.form.phone,
        email: this.form.email,
        id_game: this.gameId,
        id_price: this.priceId,
      })
      .then((response) => {
        console.log(response)
        this.isLoading = false
        console.log(response)
        localStorage.setItem('verified', 0)
        localStorage.setItem('tf_id', response.data.data.id)
        localStorage.setItem('tf_email', response.data.data.email)
        window.location.href = '/#/game/verify'
        // this.checkLocal()
      })
    },
    onCancel() {
      console.log('Cancelled')
    },
    checkLocal() {
      if(this.isPrice && this.isGame) {
        this.$router.push({name: 'Game'})
      } 
      if(this.verified != null && this.verified != undefined && this.verified == 0) {
        this.$router.push({name: 'VerifyGame'})
      }
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

