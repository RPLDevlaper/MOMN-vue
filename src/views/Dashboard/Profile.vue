<template>
  <div>
    <b-container fluid class="position-relative bg-green" style="min-height: 100vh" v-if="user !== undefined && user !== null">
      <loading :active="isLoading" 
        style="z-index: 9999"
        :can-cancel="true" 
        :on-cancel="onCancel"
        :loader="loader"
        :background-color="bgColor"
        :color="color"
        :is-full-page="fullPage">
      </loading>
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
        <b-col lg="7" class="position-relative main-dashboard bg-white py-3 px-lg-3 px-5 text-left" style="min-height: 100vh; max-height: 100vh">
          <navbar-dashboard></navbar-dashboard>
          <b-row class="px-4 pb-3">
            <b-col md="6" cols="5" class="text-center position-relative" :class="{'col-12 pt-md-5 pt-0' : onEdit == true, 'col-5 ' : onEdit == false}">
              <div class="img-avatar-parent d-inline-block position-relative">
                <div class="img-avatar-profile position-relative overflow-hidden" @click="triggerAvatar()">
                  <img v-if="avatar == null" :src="`${web}images/avatar/${user.avatar}`" class="w-100" alt="Profile Avatar">
                  <img v-if="avatar != null" :src="avatarSrc" class="w-100" alt="Profile Avatar">
                  <div class="position-absolute typo-change-avatar">
                    <font-awesome-icon style="text-white" icon="image"></font-awesome-icon>
                  </div>
                </div>
                <b-button v-if="avatar != null" class="btn-white border-0 rad btn-sm position-absolute" style="right: -20px; top: 0px" @click="resetAvatar()">
                  <font-awesome-icon icon="times"></font-awesome-icon>
                </b-button>
              </div>
              <b-form-file v-model="avatar" id="avatarFile" class="d-none" @change="changeAvatar"></b-form-file>
              <div class="text-center">
                <b-button :class="{'d-none' : avatar == null, 'd-inline-block' : avatar != null}" class="btn btn-green-primary py-2 px-4" @click="updateAvatar()">Simpan</b-button>
              </div>
            </b-col>
            <b-col md="6" cols="7" class="mt-4 position-relative" :class="{'offset-md-0 col-10 offset-1 pr-5' : onEdit == true, 'col-7' : onEdit == false}">
              <b-button class="btn-white border rad btn-sm position-absolute" style="right: 0px; top: 0px" @click="editProfile()">
                <font-awesome-icon :icon="editIcon"></font-awesome-icon>
              </b-button>
              <div v-if="onEdit == false">
                <h3 class="viga">{{ user.name }}</h3>
                <p class="mb-0">{{ user.email }}</p>
              </div>
              <div class="w-100" v-if="onEdit == true">
                <div v-if="onEditForm == true">
                  <b-row>
                    <b-col md="11">
                      <b-form-input class="p-4 mb-2 rad" placeholder="Username" v-model="user.name"></b-form-input>
                      <b-form-input class="p-4 mb-2 rad" placeholder="Email" v-model="user.email"></b-form-input>
                      <b-form-input class="p-4 mb-2 rad" placeholder="Phone" v-model="user.phone_number"></b-form-input>
                      <div class="w-100 text-right">
                        <b-button class="btn btn-green-white mr-2 px-3 btn-sm py-3" @click="editPassword()">Ganti password</b-button>
                        <b-button class="btn btn-green-primary px-4 btn-sm py-3" @click="onUpdate()">Simpan</b-button>
                      </div>
                    </b-col>
                  </b-row>
                </div>
                <div v-if="onEditPassword == true">
                  <b-row>
                    <b-col md="11">
                      <b-form-input class="p-4 mb-2 rad" :type="passwordType" placeholder="Password Sekarang" v-model="passwordForm.old"></b-form-input>
                      <b-form-input class="p-4 mb-2 rad" :type="passwordType" placeholder="Password Baru" v-model="passwordForm.new"></b-form-input>
                      <b-form-input class="p-4 mb-2 rad" :type="passwordType" placeholder="Konfirmasi Password Baru" v-model="passwordForm.newConfirm"></b-form-input>
                      <b-form-checkbox @change="togglePassword()" id="cookie" v-model="showPassword" :disabled=isDisabled name="showPassword" value="on" unchecked-value="off">
                        Show Password
                      </b-form-checkbox>         
                      <div class="w-100 text-right">
                        <b-button class="btn btn-green-primary mr-2 px-3 btn-sm py-3" @click="updatePassword()">Ganti password</b-button>
                        <b-button class="btn btn-green-white px-4 btn-sm py-3" @click="toggleEditForm()">Edit profil</b-button>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row class="pt-3 border-top px-3 py-2">
            <b-col md="8" class="text-left px-md-0 px-5 pt-2 pb-md-0 pb-2">
              <p class="mb-0">Saldo Milikmu :</p>
              <h1 class="viga mText-primary">Rp. {{ user.saldo }},-</h1>
            </b-col>
            <b-col md="4" class="text-center">
              <b-button v-b-modal.topup-modal class="btn btn-green-primary mt-2 py-3 px-5">TopUp Saldo</b-button>
              <b-modal id="topup-modal" title="Topup Saldo" class="p-4 rad border-0" size="lg" hide-footer hide-header>
                <h3 class="mb-3">Topup Saldo</h3>
                <b-row>
                  <b-col md="4">
                    <b-button @click="changeModeTopup('pulsa')" class="my-md-0 my-2 viga w-100 btn py-3" :class="{'btn-green-white border-green' : topupMode == 'pulsa', 'btn-white border' : topupMode != 'pulsa'}">Dengan Pulsa</b-button>
                  </b-col>
                  <b-col md="4">
                    <b-button @click="changeModeTopup('bank')" class="my-md-0 my-2 viga w-100 btn py-3" :class="{'btn-green-white border-green' : topupMode == 'bank', 'btn-white border' : topupMode != 'bank'}">Dengan Rekening Bank</b-button>
                  </b-col>
                  <b-col md="4">
                    <b-button @click="changeModeTopup('market')" class="my-md-0 my-2 viga w-100 btn py-3" :class="{'btn-green-white border-green' : topupMode == 'market', 'btn-white border' : topupMode != 'market'}">Market Terdekat</b-button>
                  </b-col>
                </b-row>
                <div v-if="topupMode == 'pulsa'">
                  <label for="nomor_hp" class="mt-3">Nomor Hp</label>
                  <b-form-input readonly disabled id="nomor_hp" type="tel" class="py-4 px-3 rad mb-2" placholder="Nomor Telephone Kamu" v-model="user.phone_number"></b-form-input>
                </div>
                <div v-if="topupMode == 'bank'">
                  <label for="bank" class="mt-3">Bank</label>
                  <select name="bank" v-model="bank" id="bank" class="form-control px-3 rad mb-2">
                    <option value="">Pilih Bank</option>
                    <option value="BNI">BNI</option>
                    <option value="Mandiri">Mandiri</option>
                    <option value="BCA">BCA</option>
                    <option value="BRI">BRI</option>
                  </select>
                  <label for="rekening" class="mt-3">Nomor Rekening</label>
                  <b-form-input v-if="topupMode == 'bank'" id="rekening" type="text" class="py-4 px-3 rad mb-2" placholder="Nomor Telephone Kamu" v-model="rekening"></b-form-input>  
                </div>
                <label for="nominal" class="mt-3">Nominal Saldo</label>
                <b-form-input id="nominal" type="number" class="py-4 px-3 rad" placholder="Nomor Telephone Kamu" v-model="nominal"></b-form-input>
                <small v-if="topupMode == 'pulsa'" class="mb-2">* Pastikan Pulsa Anda Mencukupi</small>
                <small v-if="topupMode == 'bank'" class="mb-2">* Pastikan Saldo Atm Anda Mencukupi</small>
                <small v-if="topupMode == 'market'" class="mb-2">* Pastikan Rumah Anda Dekat Dengan Supermarket</small>
                <div class="w-100 text-right mt-4">
                  <b-button class="btn btn-green-primary px-5 py-3" @click="onFill()">Isi Saldo</b-button>
                </div>
              </b-modal>
            </b-col>
            <b-col cols="12" class="pt-4">
              <h5 class="viga">Riwayat Topup</h5>
              <div class="card rad p-3 w-100 mb-3" v-for="topup in topUps" :key="topup.id">
                <b-row>
                  <b-col cols="6">
                    <p class="mb-0" style="font-size: .8rem">Saldo :</p>
                    <h5 class="viga mText-primary">Rp {{ topup.nominal }},-</h5>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <p class="mb-0" style="font-size: .8rem">Topup On</p>
                    <p class="mb-0 viga" style="font-size: .9rem">{{ topup.created_at[0] }}</p>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
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
import Loading from 'vue-loading-overlay'
import MenuNotification from '@/components/MenuNotification.vue'
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      nominal: 0,
      topupMode: 'pulsa',
      isLoading: false,
      color: '#14eba2',
      fullPage: true,
      token: localStorage.getItem('api_token'),
      loader: 'dots',
      isDisabled: false,
      showPassword: 'off',
      bgColor: "#000",
      rekening: '',
      topUps: '',
      onEdit: false,
      userLogged: {},
      bank: '',
      passwordType: 'password',
      onEditPassword: false,
      avatar: null,
      avatarSrc: '',
      passwordForm: {
        old: '',
        new: '',
        newConfirm: '',
      },
      onEditForm: true,
      formTop: {
        phoneNumber: ''
      },
      activeAside: false,
      activeNotif: false,
      editIcon: 'pen',
    }
  },
  created() {
    if(this.token == null || this.token == undefined) {
      this.$router.push({name: 'Signin'})
    }
    this.isLoading = true    
    this.getTopUp()
    this.isLoading = false    
  },
  computed: {
    ...mapGetters({
      user: 'Auth/getUser',
      api: 'Api/getApi',
      web: 'Api/getWeb',
      // token: 'Auth/getToken',
    }), 
  },
  components: {
    Loading,
    NavbarDashboard,
    MenuDashboard,
    MenuNotification
  },
  methods: {
    resetAvatar() {
      this.avatar = null
    },
    getTopUp() {
      this.$http.get(`${this.api}user/topup`, {
        headers: {
          'Authorization' : `Bearer ${this.token}`
        }
      }).then((response) => {
        console.log(response)
        this.topUps = response.data.data.topup
      }) 
    },
    onUpdate() {
      this.isLoading = true
      let id = this.user.api_token
      this.$http.post(`${this.api}user/${id}/update`, 
        {
          name: this.user.name,
          email: this.user.email,
          phone_number: this.user.phone_number,
        },
        {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      }).then((response) => {
        this.isLoading = false
        console.log(response)
        this.onEdit = false
      })
    },
    onCancel() {
      console.log('Cancelled')
    },
    changeModeTopup(value) {
      this.topupMode = value
    },
    triggerAvatar() {
      document.getElementById('avatarFile').click()
    },
    changeAvatar(e) {
      let file = e.target.files[0]
      this.avatarSrc = URL.createObjectURL(file)
    },
    editProfile() {
      if(this.onEdit == false) {
        this.onEdit = true
        this.editIcon = 'times'
      } else {
        this.onEdit = false
        this.editIcon = 'pen'
      }
    },
    onFill() {
      this.isLoading = true
      var tanya = confirm('Yakin ?')
      if(tanya == false) {
        return false
      }
      if(this.topupMode == 'pulsa' || this.topupMode == 'market') {
        this.bank = '';
        this.rekening = ''
      }
      this.$http.post(`${this.api}user/${this.user.api_token}/topup`,
        {
          saldo: this.nominal,
          type: this.topupMode,
          rekening: this.rekening,
          bank: this.bank,
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
    togglePassword() {
      if(this.showPassword == 'off') {
        this.passwordType = 'password'
      } else if(this.showPassword == 'on') {
        this.passwordType = 'text'
      }
    },
    updatePassword() {
      if(this.passwordForm.new == this.passwordForm.newConfirm) {
        this.isLoading = true
        let token = this.user.token
        this.$http.post(`${this.api}user/${token}/update/password`, 
          {
            password: this.passwordForm.new,
            passwordOld: this.passwordForm.old,
          },
          {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          this.isLoading = false
          console.log(response)
          this.onEdit = false
        })
      } else {
        alert('password tidak sama')
      }
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
    updateAvatar() {
      if(this.avatar != null) {
        this.isLoading = true
        let userId = this.user.id
        let formData = new FormData()
        formData.append('avatar', this.avatar)
        this.$http.post(`${this.api}user/${userId}/upload`, formData)
        .then((response) => {
          this.isLoading = false
          window.location.reload()
        })
      } else {
        this.isLoading = false
        this.moveStep('email')
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
    editPassword() {
      if(this.onEditPassword == false) {
        this.onEditPassword = true
        this.onEditForm = false
      }
    },
    toggleEditForm() {
      if(this.onEditForm == false) {
        this.onEditPassword = false
        this.onEditForm = true
      }
    }
  }
}
</script>