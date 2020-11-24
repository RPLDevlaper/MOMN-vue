<template>
  <div>
    <b-container fluid class="position-relative bg-green" style="min-height: 100vh">
      <b-row>
        <b-col lg="2" class="content-aside-dashboard bg-white" :class="{'toggle-visible-respond' : activeAside === true}" style="min-height: 100vh; max-height: 100vh">
          <div class="btn-toggle-aside position-absolute d-lg-none d-inline-block" @click="showAside()">
            <font-awesome-icon icon="bars" v-if="activeAside === false"></font-awesome-icon>
            <font-awesome-icon icon="times" v-if="activeAside === true"></font-awesome-icon>
          </div>
          <div class="menu-aside-parent" :class="{'menu-aside-parent-show' : activeAside === true}">
            <menu-dashboard/>
          </div>  
        </b-col>
        <b-col lg="7" v-dragscroll.y="true" class="position-relative main-dashboard bg-white py-3 px-lg-3 px-5 text-left" style="min-height: 100vh; max-height: 100vh">
          <navbar-dashboard/>
          <div class="w-100 px-lg-4 px-2">
            <b-row>
              <b-col lg="12" class="pb-5 mb-5">
                <h4 class="mText-primary viga">Penggunaan Pembayaran</h4>
                <!-- <bar-chart></bar-chart> -->
                <area-chart/>
              </b-col>
            </b-row>
            <b-row class="mb-5 pb-5">
              <b-col lg="12">
                <h4 class="mText-primary viga">TopUp</h4>
                <!-- <bar-chart></bar-chart> -->
                <line-chart/>
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
import AreaChart from '@/components/AreaChart.vue'
import LineChart from '@/components/LineChart.vue'
import VueChart from 'vue-chartjs'
import dragscroll from 'vue-dragscroll'
import {Bar, Line} from 'vue-chartjs'
import { mapGetters } from 'vuex'
export default {
  directives: {
    dragscroll
  },
  data() {
    return {
      chartdata: null,
      loaded: false,
      apiToken: localStorage.getItem('api_token'),
      activeAside: false,
      activeNotif: false,
    }
  },
  computed: {
    ...mapGetters({
      web: 'Api/getWeb',
      api: 'Api/getApi',
      user: 'Auth/getUser'
    })
  },
  created() {
    if(this.apiToken == null || this.apiToken == undefined) {
      this.$router.push({name: 'Signin'})
    }
  },
  components: {
    MenuDashboard,
    MenuNotification,
    NavbarDashboard,
    AreaChart,
    LineChart,
  },
  methods: {
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
    }
  }
}
</script>