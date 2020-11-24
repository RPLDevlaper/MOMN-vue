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
    <b-container fluid class="position-relative overflow-hidden" style="height: 120vh;">
      <div class="img-signup position-absolute">
        <img src="~@/assets/img/icon/isometric.png" class="w-100" alt="isometric">
      </div>
      <b-container class="pb-4 pt-5">
        <b-row>
          <b-col md="6" class="text-left">
            <img src="~@/assets/img/logo/logo.png" class="d-inline-block position-relative mr-4" style="top: -10px" width="70px" alt="logo MOMN">
            <h1 class="d-inline-block viga mText-primary mb-0">Daftar</h1>
            <div :class="{'d-none' : stepSignup != 'form'}">
              <div class="mt-2 mb-3">
                <div class="line-signup d-inline-block mr-3"></div>
                <p class="mb-0 d-inline-block mText-primary" style="font-size: .75rem">Daftar Dengan</p>
              </div>
              <b-row>
                <b-col cols="6">
                  <b-button @click="socialAuth('google')" class="btn btn-other-signup w-100 py-3 text-dark rad">
                    <img src="~@/assets/img/icon/google.png" alt="google icon" class="d-inline-block mr-3" width="20px"> <span class="d-lg-inline-block d-md-none d-sm-inline-block">Signup with Google</span>
                  </b-button>
                </b-col>
                <b-col cols="6">
                  <b-button @click="socialAuth('facebook')" class="btn btn-other-signup w-100 py-3 text-dark rad">
                    <img src="~@/assets/img/icon/facebook.png" alt="google icon" class="d-inline-block mr-3" width="20px"> <span class="d-lg-inline-block d-md-none d-sm-inline-block">Signup with Facebook</span>
                  </b-button>
                </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col cols="6" class="mt-4 mb-2">
                  <b-form-input :disabled=isDisabled placeholder="Username" class="w-100 py-4 px-3 inputSignup" v-model="formSignup.username"></b-form-input>
                </b-col>
                <b-col cols="6" class="mt-4 mb-2">
                  <b-form-input placeholder="Email" :disabled=isDisabled  type="email" class="w-100 py-4 px-3 inputSignup" v-model="formSignup.email"></b-form-input>
                </b-col>
                <b-col cols="12" class="my-2">
                  <b-form-input placeholder="Phone Number" :disabled=isDisabled class="w-100 py-4 px-3 inputSignup" v-model="formSignup.phoneNumber"></b-form-input>
                </b-col>
                <b-col cols="12" class="my-2">
                  <b-form-input :type="typePassword" placeholder="Password" :disabled=isDisabled class="w-100 py-4 px-3 inputSignup" v-model="formSignup.password"></b-form-input>
                </b-col>
                <b-col cols="12" class="my-2">
                  <b-form-input :type="typeRePassword" placeholder="Confirm Password" :disabled=isDisabled class="w-100 py-4 px-3 inputSignup" v-model="formSignup.rePassword"></b-form-input>
                </b-col>
                <b-col cols="12" class="mb-2">
                  <b-form-checkbox @change="togglePassword()" id="cookie" v-model="showPassword" :disabled=isDisabled name="showPassword" value="on" unchecked-value="off">
                    Show Password
                  </b-form-checkbox>              
                </b-col>
                <b-col md="12" class="mt-4">
                  <b-button class="btn btn-green-primary shadow-primary py-3 px-4 rad" @click="onSignup()"><font-awesome-icon style="font-awesome: 1.6rem" icon="angle-right"></font-awesome-icon></b-button>
                </b-col>
              </b-row>
            </div>
            <div :class="{'d-none' : stepSignup != 'avatar'}">
              <h2 class="viga mt-3">Set Your Avatar</h2>
              <div class="avatar-trigger p-2 d-flex" @click="selectFile()">
                <div class="preview-avatar d-inline-block">
                  <img src="~@/assets/img/icon/avatar.svg" v-if="src == null" width="100%" alt="">
                  <img :src="src" v-if="src != null" width="100%" alt="">
                </div>
                <h5 class="viga my-3 ml-3 d-inline-block">Tap to change</h5>
              </div>
              <p style="font-size: .8rem">* optional</p>
              <b-form-file ref="file" id="fileAvatar" @change="fileChange" class="d-none" v-model="formSignup.avatar"></b-form-file>
              <b-col md="12" class="mt-5">
                <b-button class="btn btn-green-primary shadow-primary mr-3 py-3 px-4 rad" @click="moveStep('form')"><font-awesome-icon style="font-awesome: 1.6rem" icon="angle-left"></font-awesome-icon></b-button>
                <b-button class="btn btn-green-primary shadow-primary mr-3 py-3 px-4 rad" @click="onUpload()"><font-awesome-icon style="font-awesome: 1.6rem" icon="angle-right"></font-awesome-icon></b-button>
              </b-col>
            </div>
            <div :class="{'d-none' : stepSignup != 'email'}">
              <h2 class="viga mt-3">To Free Access</h2>
              <p>We have send a token for your verification</p>
              <b-form-input v-model="token" class="verifikasi rad d-inline-block" @keyup="verifyEmail()" placeholder="XXX XXX"></b-form-input>
              <b-col md="12" class="mt-5">
                <b-button class="btn btn-green-white shadow-primary mr-3 py-3 px-4 rad" :to="{name: 'Signin'}">Skip <font-awesome-icon class="ml-3" style="font-awesome: 1.6rem" icon="angle-right"></font-awesome-icon></b-button>
                <b-button class="btn btn-green-primary shadow-primary mr-3 py-3 px-4 rad" @keyup="verifyEmail()">Verify <font-awesome-icon class="ml-3" style="font-awesome: 1.6rem" icon="angle-right"></font-awesome-icon></b-button>
              </b-col>
            </div>
            <p class="mt-5 mText-gray" style="font-size: .8rem">Sudah punya akun ? <b-link class="mText-dark" :to="{name: 'Signin'}">Login</b-link></p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<style lang="scss">
@import '@/assets/css/signin.scss';
@import '@/assets/css/style.scss';
</style>

<script>
import Loading from 'vue-loading-overlay'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isLoading: false,
      color: '#14eba2',
      fullPage: true,
      isDisabled: false,
      bgColor: "#000",
      apiToken: localStorage.getItem('api_token'),
      local: {
        username: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        phoneNumber: localStorage.getItem('phoneNumber'),
        password: localStorage.getItem('password'),
      },
      formSignup: {
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        rePassword: '',
        tokenVerify: '',
        avatar: null,
      },
      eyePassword: 'eye',
      eyeRePassword: 'eye',
      showPassword: 'off',
      loader: 'dots',
      token: '',
      typeRePassword: 'password',
      typePassword: 'password',
      stepSignup: 'form',
      src: null,
    }
  },
  computed: {
    ...mapGetters({
      api: "Api/getApi",
      web: "Api/getWeb",
      isAuth: 'Auth/isAuth',
    })
  }, 
  created() {
    if(this.isAuth) {
			this.$router.push({name: 'Dashboard'})
		}
  },
  components: {
    Loading
  },
  methods: {
    socialAuth(provider) {
      var self = this
      this.$auth.authenticate(provider).then((response) => {
        self.sosialLogin(provider, response)
      }).catch((err) => {
        console.log({err: err})
      })
    },
    socialLogin(provoder, response) {
      this.$http.post(`${this.api}socialLogin/`+ provider,response).then((response) => {
				console.log(response.data)
			}).catch((err) => {
				console.log({err: err})
			})
    },
    onCancel() {
      console.log('Cancelled')
    },
    onSignup() {
      this.isLoading = true
      if((localStorage.getItem('name') == null || localStorage.getItem('name') == undefined) && 
        (localStorage.getItem('email') == null || localStorage.getItem('email') == undefined) &&
        (localStorage.getItem('phoneNumber') == null || localStorage.getItem('phoneNumber') == undefined) &&
        (localStorage.getItem('password') == null || localStorage.getItem('password') == undefined)) {
        if(this.formSignup.password === this.formSignup.rePassword) {
          this.$http.post(`${this.api}signup`, {
            name: this.formSignup.username,
            email: this.formSignup.email,
            phone_number: this.formSignup.phoneNumber,
            password: this.formSignup.password,
            level: 'user'
          }).then((response) => {
            console.log(response)
            localStorage.setItem('userId', response.data.data.id)
            localStorage.setItem('name', this.formSignup.username)
            localStorage.setItem('email', this.formSignup.email)
            localStorage.setItem('phoneNumber', this.formSignup.phoneNumber)
            localStorage.setItem('password', this.formSignup.password)
            this.isLoading = false
            this.isDisabled = true
            this.moveStep('avatar')
          })
        } else {
          this.isLoading = false
          alert('password tidak sama')
        }
      } else {
        this.isLoading = false
        this.moveStep('avatar')
      }
    },
    onUpload() {
      this.isLoading = true
      if(this.formSignup.avatar != null) {
        let userId = localStorage.getItem('userId')
        let formData = new FormData()
        formData.append('avatar', this.formSignup.avatar)
        this.$http.post(`${this.api}user/${userId}/upload`, formData)
        .then((response) => {
          console.log(response)
          localStorage.setItem('avatar', 'done');
          this.isLoading = false
          this.moveStep('email')
        })
      } else {
        this.isLoading = false
        this.moveStep('email')
      }
    },
    togglePassword() {
      if(this.showPassword == 'off') {
        this.typeRePassword = 'password'
        this.typePassword = 'password'
      } else if(this.showPassword == 'on') {
        this.typeRePassword = 'text'
        this.typePassword = 'text'
      }
    },
    verifyEmail() {
      this.isLoading = true
      let userId = localStorage.getItem('userId')
      this.$http.post(`${this.api}user/${userId}/verify`, {
        token: this.token
      }).then((response) => {
        localStorage.removeItem('userId')
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('phoneNumber')
        localStorage.removeItem('password')
        localStorage.removeItem('avatar')
        this.isLoading = true
        this.$router.push({name: 'Signin'})
      })
    },
    fileChange(e) {
      let file = e.target.files[0]
      this.src = URL.createObjectURL(file)
    },
    moveStep(value) {
      if((localStorage.getItem('name') != null || localStorage.getItem('name') != undefined) && 
        (localStorage.getItem('email') != null || localStorage.getItem('email') != undefined) &&
        (localStorage.getItem('phoneNumber') != null || localStorage.getItem('phoneNumber') != undefined) &&
        (localStorage.getItem('password') != null || localStorage.getItem('password'))) {
          this.formSignup.name = localStorage.getItem('name')
          this.formSignup.email = localStorage.getItem('email')
          this.formSignup.phone_number = localStorage.getItem('phoneNumber')
          this.formSignup.password = localStorage.getItem('password')
          this.stepSignup = value
      }
      this.stepSignup = value
    },
    selectFile() {
      document.getElementById('fileAvatar').click()
    }
  }
}
</script>