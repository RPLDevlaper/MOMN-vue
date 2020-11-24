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
        <b-col lg="7" class="position-relative main-dashboard bg-white py-3 px-lg-3 px-5 text-left" style="min-height: 100vh; max-height: 100vh">
          <navbar-dashboard/>
          <div class="w-100">
            <b-row>
              <b-col md="6">
                <b-button v-b-modal.topup-modal class="btn btn-green-primary px-5 py-3 rad"><font-awesome-icon icon="plus"></font-awesome-icon> Tambah Bisnis Baru</b-button>
                <b-modal id="topup-modal" title="Bisnis Baru" size="lg" hide-header hide-footer>
                  <b-form-file class="d-none" @change="onChangeFile" v-model="form.icon" id="icon"></b-form-file>
                  <div class="text-center pb-3">
                    <div class="img-avatar-profile overflow-hidden" @click="onClickFile()">
                      <img v-if="form.icon == null" :src="`${web}images/bussiness/icon/sidescript.png`" class="w-100 h-100" style="object-fit: cover" alt="">
                      <img v-if="form.icon != null" :src="previewIcon" class="w-100 h-100" style="object-fit: cover" alt="">
                      <div class="typo-change-avatar">
                        <font-awesome-icon icon="image"></font-awesome-icon>
                      </div>
                    </div>
                  </div>
                  <b-form-input type="text" class="rad mb-3 py-3" placeholder="Nama" v-model="form.name"></b-form-input>
                  <select v-model="form.category" class="rad mb-3 form-control">
                    <option value="">Pilih Kategori</option>
                    <option value="Restorant">Restoran</option>
                    <option value="Toko">Toko</option>
                    <option value="Cafe">Tempat Nongkrong</option>
                    <option value="Startup">Startup Digital</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  <b-form-input type="text" class="rad mb-3 py-3" placeholder="Category apa terus ?" v-if="form.category == 'Lainnya'" v-model="form.categoryOther"></b-form-input>
                  <b-form-radio v-model="form.privacy" name="setPrivacy" value="public">Buat seluruh orang mengetahui bisnismu</b-form-radio>
                  <b-form-radio v-model="form.privacy" name="setPrivacy" value="private">Buat bisnismu seaman mungkin</b-form-radio>
                  <div class="text-right mt-3">
                    <b-button class="px-5 btn btn-green-primary py-3" @click="onSubmit()">Buat Sekarang</b-button>
                  </div>
                </b-modal>
              </b-col>
            </b-row>
            <b-row class="mt-4" v-if="busines.length > 0">
              <b-col lg="4" md="6" sm="6" v-for="bisnis in busines" :key="bisnis.id" cols="12" style="text-center">
                <div class="card border card-bussiness rad p-3 position-relative">
                  <div class="options-bussiness p-3 position-absolute" @click="toggleMenu(bisnis.id)">
                    <font-awesome-icon icon="ellipsis-v"></font-awesome-icon>
                  </div>
                  <div class="menu-bussines position-absolute" :class="{'show' : menuActive == bisnis.id}" v-if="menuActive">
                    <div class="menu-item p-2" @click.prevent="getBisnis(bisnis.id)">Update</div>
                    <div class="menu-item p-2" @click="onDelete(bisnis.id)">Delete</div>
                  </div>
                  <qrcode :value="`${url}/${bisnis.name}`" :options="{width: 150}" style="width: 250px !important; height: 250px !important" class="d-inline-block mx-auto"></qrcode>        
                  <b-row>
                    <b-col cols="3" class="text-center pt-1">
                      <div class="img-icon-bussiness d-inline-block">
                        <img :src="`${web}images/bussiness/icon/${bisnis.icon}`" alt="">
                      </div>
                    </b-col>
                    <b-col cols="9" class="text-left pt-1">
                      <h6 class="mText-primary mb-0 viga">{{ bisnis.name }}</h6>
                      <p class="mb-0" style="font-size: .8rem">{{ bisnis.category }}</p>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-modal ref="modalUpdate" id="modal-update" size="lg" hide-footer hide-header>
                <b-form-file class="d-none" @change="onChangeFileSelect" v-model="businesUpdateIcon" id="iconSelect"></b-form-file>
                <div class="text-center pb-3">
                  <div class="img-avatar-profile overflow-hidden" @click="onClickFileSelect()">
                    <img v-if="selectedFiletoUpdate == false" :src="`${web}images/bussiness/icon/${businesSelect.icon}`" class="w-100 h-100" style="object-fit: cover" alt="">
                    <img v-if="selectedFiletoUpdate == true" :src="previewIconSelect" class="w-100 h-100" style="object-fit: cover" alt="">
                    <div class="typo-change-avatar">
                      <font-awesome-icon icon="image"></font-awesome-icon>
                    </div>
                  </div>
                </div>
                <b-form-input type="text" class="rad mb-3 py-3" placeholder="Nama" v-model="businesSelect.name"></b-form-input>
                <select v-model="businesSelect.category" class="rad mb-3 form-control">
                  <option value="">Pilih Kategori</option>
                  <option value="Restorant">Restoran</option>
                  <option value="Toko">Toko</option>
                  <option value="Cafe">Tempat Nongkrong</option>
                  <option value="Startup">Startup Digital</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                <b-form-input type="text" class="rad mb-3 py-3" placeholder="Category apa terus ?" v-if="businesSelect.category == 'Lainnya'" v-model="businesSelect.categoryOther"></b-form-input>
                <b-form-radio v-model="businesSelect.privacy" name="setPrivacy" value="public">Buat seluruh orang mengetahui bisnismu</b-form-radio>
                <b-form-radio v-model="businesSelect.privacy" name="setPrivacy" value="private">Buat bisnismu seaman mungkin</b-form-radio>
                <div class="text-right mt-3">
                  <b-button class="px-5 btn btn-green-primary py-3" @click="onUpdate(businesSelect.id)">Update</b-button>
                </div>
              </b-modal>
            </b-row>
            <b-row>
              <b-col lg="12" class="mt-3" v-if="busines.length < 0">
                <div class="w-100 p-3 text-center rad bg-green-white">
                  <h4 class="viga">Belum ada bisnis</h4>
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
import { mapGetters } from 'vuex'
import $ from 'jquery'
import Loading from 'vue-loading-overlay';
export default {
  data() {
    return {
      activeAside: false,
      url: window.location.href,
      activeNotif: false,
      previewIconSelect: '',
      businesSelect: {
        id: 1,
        name: 'Sidescript',
        privacy: 'public',
        icon: 'sidescript.png',
        qr: 'Sidescript_QR_Codde',
        category: 'Startup',
        categoryOther: '',
      },
      menuActive: 0,
      busines: {
        length: 0,
      },
      loader: 'dots',
      bgColor: "#000",
      isLoading: false,
      selectedFiletoUpdate: false,
      businesUpdateIcon: null,
      color: '#14eba2',
      fullPage: true,
      token: localStorage.getItem('api_token'),
      previewIcon: '',
      form: {
        name: '',
        category: '',
        icon: null,
        privacy: 'public'
      },
    }
  },
  mounted() {
    $(this.$refs.modalUpdate).on("hidden.bs.modal", this.selectedFiletoUpdate = false)
  },
  created() {
    if(this.token == null || this.token == undefined) {
      this.$router.push({name: 'Signin'})
    }
    this.getBussinesUser()
  },
  components: {
    MenuDashboard,
    NavbarDashboard,
    Loading,
    MenuNotification,
  },
  computed: {
    ...mapGetters({
      web: 'Api/getWeb',
      api: 'Api/getApi',
      user: 'Auth/getUser',
      isAuth: 'Auth/isAuth'
    })
  },
  methods: {
    onUpdate(id) {
      this.isLoading = true
      let formBussines = new FormData()
      formBussines.append('name', this.businesSelect.name)
      formBussines.append('category', this.businesSelect.category)
      formBussines.append('privacy', this.businesSelect.privacy)
      formBussines.append('userId', this.user.id)
      formBussines.append('icon', this.businesUpdateIcon)
      formBussines.append('_method', 'PATCH')
      this.$http.post(`${this.api}user/business/${id}`, formBussines, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        console.log(this.businesUpdateIcon)
        console.log(this.businesSelect.name)
        console.log(this.businesSelect.category)
        console.log(this.businesSelect.privacy)
        console.log(this.user.id)
        this.isLoading = false
        console.log(response)
        window.location.reload()
      })
    },
    getBisnis(id) {
      this.isLoading = true
      this.$refs['modalUpdate'].show()
      this.$http.get(`${this.api}user/business/${id}`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      }).then((response) => {
        this.isLoading = false
        this.businesSelect = response.data.data
        console.log(this.businesSelect)
      })
    },
    getBussinesUser() {
      this.$http.get(`${this.api}user/business?token=${this.token}`, {
        headers: {
          'Authorization' : `Bearer ${this.token}`
        }
      }).then((response) => {
        this.busines = response.data.data.bussiness
        console.log(this.busines)
      })
    },
    onChangeFileSelect(e) {
      let file = e.target.files[0]
      this.selectedFiletoUpdate = true
      this.previewIconSelect = URL.createObjectURL(file)
    },
    onSelectedFile() {
      this.selectedFiletoUpdate = false
    },
    toggleMenu(value) {
      if(this.menuActive == value) {
        this.menuActive = 0
      } else {
        this.menuActive = value
      }
    },
    onSubmit() {
      this.isLoading = true
      let formBussines = new FormData()
      formBussines.append('name', this.form.name)
      formBussines.append('category', this.form.category)
      formBussines.append('privacy', this.form.privacy)
      formBussines.append('userId', this.user.id)
      formBussines.append('icon', this.form.icon)
      this.$http.post(`${this.api}user/business`, formBussines, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      }).then((response) => {
        console.log(this.form.icon)
        this.isLoading = false
        console.log(response)
        window.location.reload()
      })
    },
    onDelete(id) {
      let tanya = confirm('Serius ?')
      if(tanya == false) {
        return false;
      }
      this.isLoading = true
      this.$http.delete(`${this.api}user/business/${id}`, {
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
    onCancel() {
      console.log('Canceled')
    },
    onClickFile() {
      document.getElementById('icon').click()
    },
    onClickFileSelect() {
      document.getElementById('iconSelect').click()
    },
    onChangeFile(e) {
      let file = e.target.files[0]
      this.previewIcon = URL.createObjectURL(file)
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