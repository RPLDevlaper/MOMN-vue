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
    <b-container class="py-5">
      <b-row>
        <b-col md="6" offset-md="3">
          <div class="w-100 card px-4 py-4 text-left rad">
            <b-alert v-if="respond.status != null" show dismissible :variant="respond.status">
              {{ respond.msg }}
            </b-alert>
            <h3 class="viga mText-primary">Reset Passwormu Aja..</h3>
            <p>Masukkan email milik kamu. nanti kami kirim link untuk mereset password.</p>
            <b-form-input type="email" v-model="email" class="px-3" placeholder="contoh@domain.com"></b-form-input>
            <div class="text-right mt-3">
              <b-button class="btn-green-primary py-2 px-5" @click="sendEmailReset()">Lanjutkan</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
export default {
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
      color: '#14eba2',
      fullPage: true,
      isDisabled: false,
      bgColor: "#000",
      loader: 'dots',
      email: '',
      respond: {
        status: null,
        msg: '',
      }
    }
  },
  computed: {
    ...mapGetters({
      api: 'Api/getApi',
      web: 'APi/getWeb',
    })
  },
  methods: {
    sendEmailReset() {
      this.isLoading = true
      this.$http.post(`${this.api}request/reset/password`, {
        email: this.email
      }).then((response) => {
        this.isLoading = false
        if(response.data.data !== null) {
          this.respond.status = 'success' 
          this.respond.msg = 'Link reset sudah dikirim'
        } else {
          this.respond.status = 'danger'
          this.respond.msg = 'Email tidak ditemukan'
        }
      })
    },
    onCancel() {
      console.log('Cancelled')
    },
  }
}
</script>