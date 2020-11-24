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
          <div class="w-100 p-4 rad card text-left">
            <div>
              <b-alert v-if="respond.status != null" show dismissible :variant="respond.status">
                {{ respond.msg }}
              </b-alert>
            </div>
            <h3 class="mText-primary viga">Reset Password</h3>
            <b-form-input :type="passwordType" v-model="password1" class="mt-3" placeholder="Password Baru"></b-form-input>
            <b-form-input :type="passwordType" v-model="password2" class="mt-2" placeholder="Ulangi Password, Biar tidak lupa"></b-form-input>
            <div class="mt-2">
              <b-form-checkbox @change="showPassword()" class="d-inline-block"></b-form-checkbox> <span class="d-inline-block">Tampilkan Password</span>
            </div>
            <div class="text-right mt-3">
              <b-button class="btn-green-primary py-2 px-5" @click="resetPassword()">Perbarui</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isLoading: false,
      color: '#14eba2',
      fullPage: true,
      isDisabled: false,
      bgColor: "#000",
      loader: 'dots',
      passwordType: 'password',
      respond: {
        status: null,
        msg: ''
      },
      password1: '',
      token: this.$route.params.token,
      password2: '',
    }
  },
  computed: {
    ...mapGetters({
      api: 'Api/getApi',
      web: 'Api/getWeb'
    })
  },
  methods: {
    showPassword() {
      if(this.passwordType == 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    resetPassword() {
      this.isLoading = true
      if(this.password1 !== this.password2) {
        this.isLoading = false
        this.respond.status = 'danger',
        this.respond.msg = 'Password tidak sesuai'
      } else {
        this.$http.post(`${this.api}reset/${this.token}/password`, {
          password: this.password1
        }).then((response) => {
          this.isLoading = false
          alert('Berhasil')
          this.$router.push({name: 'Signin'})
        })
      }
    },
    onCancel() {
      console.log('Cancelled')
    }
  }
}
</script>