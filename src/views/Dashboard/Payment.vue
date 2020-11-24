<template>
  <div>
    <loading :active="isLoading" 
      style="z-index: 9999"
      :can-cancel="true" 
      :on-cancel="onCancel"
      :loader="loader"
      :background-color="bgColor"
      :color="color"
      :is-full-page="fullPage">
    </loading>
    <b-container fluid class="position-relative bg-green" style="min-height: 100vh">
      <b-row>
        <b-col lg="2" class="content-aside-dashboard bg-white" :class="{'toggle-visible-respond' : activeAside === true}" style="min-height: 100vh; max-height: 100vh">
          <div class="btn-toggle-aside position-absolute d-lg-none d-inline-block" @click="showAside()">
            <font-awesome-icon icon="bars" v-if="activeAside === false"></font-awesome-icon>
            <font-awesome-icon icon="times" v-if="activeAside === true"></font-awesome-icon>
          </div>
          <div class="menu-aside-parent" :class="{'menu-aside-parent-show' : activeAside === true}">
            <menu-dashboard></menu-dashboard>
          </div>  
        </b-col>
        <b-col lg="7" class="position-relative main-dashboard bg-white py-3 px-0 text-left" style="min-height: 100vh; max-height: 100vh">
          <div class="px-lg-3 px-5">
            <navbar-dashboard></navbar-dashboard>
            <div class="ml-md-3 pl-md-2 mt-4">
              <b-row>
                <b-col lg="8" md="6">
                  <h4 class="mText-primary viga">Pilih Pembayaran</h4>
                </b-col>
                <b-col lg="4" md="6">
                  <select id="" class="form-control border-0" v-model="payment">
                    <option value="MOMN">User MOMN</option>
                    <option value="App">User Aplikasi Lain</option>
                    <option value="Bank">Ke Bank</option>
                    <option value="Mitra bisnis">Mitra Bisnis</option>
                  </select>
                </b-col>
              </b-row>
            </div>

            <!-- User -->
            <div class="p-4 position-relative" v-if="payment == 'MOMN'">
              <b-row>
                <b-col md="12" class="px-2">
                  <p>Cari User</p>
                  <b-form-input class="rad w-100 px-3" @keyup="onSearch()" placeholder="Cari berdasarkan email" v-model="emailUser"></b-form-input>
                  <div class="position-absolute shadow-sm" style="top: 76px; z-index: 100; width: 98%" v-if="userSearch != null">
                    <div v-for="search in userSearch" :key="search.email" @click="setEmail(search.email)">
                      <b-row v-if="search.email !== user.email" class="toggle-search py-3 px-4">
                        <b-col cols="2" class="text-left">
                          <div class="img-avatar-search d-inline-block position-relative overflow-hidden">
                            <img :src="`${web}/images/avatar/${search.avatar}`" class="w-100 h-100" style="object-fit: cover !important" alt="">
                          </div>
                        </b-col>
                        <b-col cols="10" class="text-left">
                          <h6 class="viga mText-primary mb-0">{{ search.name }}</h6>
                          <p class="mb-0" style=".85rem">{{ search.email }}</p>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>

            <!-- User -->
            <div class="p-4" v-if="payment == 'App'">
              <div class="w-100">
                <b-row class="mt-3">
                  <b-col md="6">
                    <select id="" class="form-control rad px-3 mb-3 mb-md-0" v-model="app">
                      <option value="">Pilih Aplikasi</option>
                      <option value="OVO">OVO</option>
                      <option value="GOPAY">GOPAY</option>
                      <option value="Paypal">Paypal</option>
                      <option value="Dana">DANA</option>
                      <option value="LinkAja">LinkAja</option>
                    </select>
                  </b-col>
                  <b-col md="6">
                    <b-form-input class="rad px-3" placeholder="Nomor Hp" v-model="nomorapp"></b-form-input>
                    <small>* Nomor Hp Pemilik Aplikasi</small>
                  </b-col>
                </b-row>
              </div>
            </div>

            <!-- User -->
            <div class="p-4" v-if="payment == 'Bank'">
              <div class="w-100">
                <b-row class="mt-3">
                  <b-col md="6">
                    <select id="" class="form-control rad px-3 mb-3 mb-md-0" v-model="bank">
                      <option value="">Pilih Bank</option>
                      <option value="BCA">BCA</option>
                      <option value="BNI">BNI</option>
                      <option value="BRI">BRI</option>
                      <option value="Mandiri">Mandiri</option>
                      <option value="Bptn">Bptn</option>
                    </select>
                  </b-col>
                  <b-col md="6">
                    <b-form-input class="rad px-3" placeholder="Rekening" v-model="rekening"></b-form-input>
                  </b-col>
                </b-row>
              </div>
            </div>

            <!-- User -->
            <div class="p-4" v-if="payment == 'Mitra bisnis'">
              <b-row>
                <b-col md="12" class="px-2">
                  <p>Cari Mitra Bisnis</p>
                  <b-form-input class="rad w-100 px-3" @keyup="searchMitra()" placeholder="Cari berdasarkan nama" v-model="namaMitra"></b-form-input>
                  <div class="position-absolute shadow-sm" style="top: 76px; z-index: 100; width: 98%" v-if="business != null">
                    <div v-for="bisnis in business" :key="bisnis.id" @click="setMitra(bisnis.name)">
                      <b-row class="toggle-search py-3 px-4">
                        <b-col cols="2" class="text-left">
                          <div class="img-avatar-search d-inline-block position-relative overflow-hidden">
                            <img :src="`${web}/images/bussiness/icon/${bisnis.icon}`" class="w-100 h-100" style="object-fit: cover !important" alt="">
                          </div>
                        </b-col>
                        <b-col cols="10" class="text-left">
                          <h6 class="viga mText-primary mb-0">{{ bisnis.name }}</h6>
                          <p class="mb-0" style=".85rem">{{ bisnis.category }}</p>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>

            <div class="mt-2 px-4 py-2">
              <b-row>
                <b-col md="6">
                  <p class="mb-0">Saldo Anda</p>
                  <h3 class="viga mText-primary">Rp.{{ user.saldo - nominal }},-</h3>
                </b-col>
                <b-col md="6">
                  <p class="mb-1">Nominal Pembayaran</p>
                  <b-form-input type="number" min="0" :max="user.saldo" class="rad px-3" placeholder="Nominal" v-model="nominal"></b-form-input>
                </b-col>
                <b-col cols="12" class="text-right py-3">
                  <b-button class="btn btn-green-primary px-5 py-3" @click="onPayment()">Bayar</b-button>
                </b-col>
              </b-row>
            </div>
          </div>
          <hr>
          
          <div class="px-5">
            <b-row>
              <b-col md="12">
                <h3 class="viga mText-primary">History</h3>
                <div class="text-center mt-3 bg-green-white p-3 rad" v-if="histories.length == 0">
                  <h4 class="viga mb-0">Belum ada pembayaran</h4>
                </div>
                <div class="card p-3 w-100 rad mb-2" v-for="history in histories" :key="history.id">
                  <b-row>
                    <b-col md="6" cols="6" class="pt-md-1 pt-0 text-center">
                      <h4 class="mText-primary viga mb-0 pt-md-2 pt-0">Rp. {{ history.saldo }},-</h4>
                    </b-col>
                    <b-col md="6" cols="6" class="text-center">
                      <p style="font-size: .85rem" class="mb-0">{{ history.type }} 
                        <span v-if="history.type == 'App'">{{ history.app }}</span>
                        <span v-if="history.type == 'Bank'">{{ history.bank }}</span>
                      </p>
                      <p class="mb-0 viga" v-if="history.type == 'App'">{{ history.nomor_hp }}</p>
                      <p class="mb-0 viga" v-if="history.type == 'Bank'">{{ history.rekening }}</p>
                      <p class="mb-0 viga" v-if="history.type == 'MOMN'">{{ history.email }}</p>
                      <p class="mb-0 viga" v-if="history.type == 'Mitra bisnis'">{{ history.mitra }}</p>
                    </b-col>
                    <b-col md="12" class="pt-md-2 pt-md-3 pt-0 text-right mt-md-0 mt-2">
                      <p style="font-size: .85rem" class="mb-0">{{ history.created_at }}</p>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col lg="3" class="notification-dashboard bg-white" :class="{'toggle-visible-respond' : activeNotif === true}" style="min-height: 100vh; max-height: 100vh">
          <div class="btn-toggle-notif position-absolute d-lg-none d-inline-block" @click="showNotif()">
            <font-awesome-icon icon="bell" v-if="activeNotif === false"></font-awesome-icon>
            <font-awesome-icon icon="times" v-if="activeNotif === true"></font-awesome-icon>
          </div>
          <div>
            <menu-notification></menu-notification>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MenuDashboard from '@/components/MenuDashboard.vue'
import MenuNotification from '@/components/MenuNotification.vue'
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import Loading from 'vue-loading-overlay'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeAside: false,
      activeNotif: false,
      isLoading: false,
      color: '#14eba2',
      namaMitra: '',
      bgColor: '#000',
      emailUser: '',
      token: localStorage.getItem('api_token'),
      payment: 'MOMN',
      histories: {
        length: 0,
      },
      nominal: 0,
      bank: '',
      business: null,
      userSearch: null,
      fullPage: true,
      app: '',
      nomorapp: '',
      rekening: '',
      token: localStorage.getItem('api_token'),
      loader: 'dots',
    }
  },
  computed: {
    ...mapGetters({
      user: 'Auth/getUser',
      isAuth: 'Auth/isAuth',
      api: 'Api/getApi',
      web: 'Api/getWeb'
    })
  },
  created() {
    if(this.token == null || this.token == undefined) {
      this.$router.push({name: 'Signin'})
    }
    this.getHistories()
  },
  components: {
    MenuDashboard,
    MenuNotification,
    Loading,
    NavbarDashboard,
  },
  methods: {
    searchMitra() {
      if(this.namaMitra.length >= 3) {
        this.$http.post(`${this.api}user/q/business`, {
          name: this.namaMitra,
        },
        {
          headers: {
            'Authorization' : `Bearer ${this.token}`
          }
        }).then((response) => {
          this.business = response.data.data
          console.log(response)
        })
      } 
      if(this.emailUser.length < 3) {
        this.business = null
      }
    },
    onSearch() {
      if(this.emailUser.length >= 3) {
        this.$http.post(`${this.api}user/q/search`, {
            email: this.emailUser,
            name: '',
          },
          {
          headers : {
            'Authorization' : `Bearer ${this.token}`
          }
        }).then((response) => {
          console.log(response)
          this.userSearch = response.data.data
        })
      } 
      if(this.emailUser.length < 3) {
        this.userSearch = null
      }
    },
    setEmail(value) {
      this.emailUser = value
      this.userSearch = null
    },
    setMitra(value) {
      this.namaMitra = value
      this.business = null
    },
    getHistories() {
      this.$http.get(`${this.api}user/payments`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      }).then((response) => {
        console.log(response)
        this.histories = response.data.data.payments
      })
    },
    onPayment() {
      var tanya = confirm('Yakin ingin melanjutkan ?')
      if(tanya == false) {
        return false
      }
      if(this.type == 'MOMN' && this.emailUser == '') {
        return false
      }
      if(this.type == 'App' && this.nomorapp == '') {
        return false
      }
      if(this.type == 'Bank' && this.rekening == '') {
        return false
      }
      if(this.type == 'Mitra bisnis' && this.namaMitra == '') {
        return false
      }
      if(this.type == 'App') {
        this.emailUser = ''
        this.rekening = ''
        this.namaMitra = ''
      } 
      if(this.type == 'Bank') {
        this.namaMitra = ''
        this.emailUser = ''
        this.nomorapp = ''
      } 
      if(this.type == 'MOMN') {
        this.rekening = ''
        this.namaMitra = ''
        this.nomorapp = ''
      }
      if(this.type == 'Mitra bisnis') {
        this.rekening = ''
        this.nomorapp = ''
        this.emailUser = ''
      }
      this.isLoading = true
      this.$http.post(`${this.api}user/${this.user.api_token}/payments`, {
        app: this.app,
        rekening: this.rekening,
        nomor_hp: this.nomorapp,
        bank: this.bank,
        email: this.emailUser,
        saldo: this.nominal,
        type: this.payment,
        mitra: this.namaMitra,
      }, 
      {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      }).then((response) => {
        this.isLoading = false
        window.location.reload()
      })
    },
    showAside() {
      if(this.activeAside == false) {
        this.activeAside = true
      } else {
        this.activeAside = false
      }
      if(this.activeNotif == true) {
        this.activeNotif = false
      }
    },
    showNotif() {
      if(this.activeNotif == false) {
        this.activeNotif = true
      } else {
        this.activeNotif = false
      }
      if(this.activeAside == true) {
        this.activeAside = false
      }
    },
    onCancel() {
      console.log('Cancelled')
    },
  }
}
</script>