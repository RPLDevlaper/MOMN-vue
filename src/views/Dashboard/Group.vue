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
            <menu-dashboard></menu-dashboard>
          </div>  
        </b-col>
        <b-col lg="7" class="position-relative main-dashboard bg-white py-3 px-lg-3 px-5 text-left" style="min-height: 100vh; max-height: 100vh">
          <navbar-dashboard></navbar-dashboard>
          <div class="p-3">
            <h3 class="mText-primary viga mb-3">Group Chat</h3>
            <div class="w-100">
              <b-row>
                <b-col md="8">
                  <b-button class="btn btn-green-primary px-5 py-3 btn-sm" v-b-modal.modal-manage-group>Buat Group</b-button>
                  <b-button class="btn btn-white border-green px-5 py-3 btn-sm ml-2" :to="{name: 'Chat'}">Buka MOMN Chat</b-button>
                </b-col>
                <b-col md="4" class="mt-md-0 mt-3">
                  <div class="text-right">
                    <b-button class="btn-white px-4 btn-sm py-3 mx-2" v-b-modal.modal-notif-group><font-awesome-icon icon="bell"></font-awesome-icon></b-button>
                    <b-button class="btn-white px-4 py-3 btn-sm" v-b-modal.modal-search><font-awesome-icon icon="search"></font-awesome-icon></b-button>
                  </div>
                </b-col>
              </b-row>
              <h3 class="mText-primary viga my-3">Group Anda</h3>
              <div class="w-100">
                <b-row>
                  <b-col md="6">
                    <div class="w-100 mb-3 rad card">
                      <div class="header-card-group position-relative" :style="`background-image: url('${web}images/blog/1604854908.jpeg')`">
                        <div class="ellipsis-menu-group position-absolute m-2 px-3 py-2" @click="showMenuGroup(1)"><font-awesome-icon icon="ellipsis-v"></font-awesome-icon></div>
                        <div class="menu-group-card position-absolute" v-if="menuGroupActive == 1">
                          <div class="menu-item-group-card" @click="onUpdateGroup(1)">Update</div>
                          <div class="menu-item-group-card delete" @click="onDeleteGroup(1)">Delete</div>
                        </div>
                      </div>
                      <div class="position-relative px-3 pb-3 pt-4 text-center">
                        <div class="avatar-group">
                          <div class="avatar-item">
                            <img :src="`${web}images/avatar/Mohammad_Khusnul_Khuluq_1604238099.png`" alt="">
                          </div>
                          <div class="avatar-item">
                            <img :src="`${web}images/avatar/ilham-sm.jpg`" alt="">
                          </div>
                          <div class="avatar-item">
                            <div class="counting viga">+2</div>
                            <img :src="`${web}images/avatar/rehan-sm.jpg`" alt="">
                          </div>
                        </div>
                        <div class="logo-parent-card position-absolute">
                          <div class="icon-group-card">
                            <img :src="`${web}images/group/teamwork.png`" class="w-100 h-100" style="object-fit: cover" alt="Team">
                          </div>
                        </div>
                        <h5 class="viga mb-0">Sidescript Developer</h5>
                        <p style="font-size: .85rem">Startup digital</p>
                      </div>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <div class="w-100 mb-3 rad card">
                      <div class="header-card-group" :style="`background-image: url('${web}images/blog/1604855029.jpeg')`"></div>
                      <div class="ellipsis-menu-group position-absolute m-2 px-3 py-2" @click="showMenuGroup(2)"><font-awesome-icon icon="ellipsis-v"></font-awesome-icon></div>
                      <div class="menu-group-card position-absolute" v-if="menuGroupActive == 2">
                        <div class="menu-item-group-card" @click="onUpdateGroup(2)">Update</div>
                        <div class="menu-item-group-card delete" @click="onDeleteGroup(2)">Delete</div>
                      </div>
                      <div class="position-relative px-3 pb-3 pt-4 text-center">
                        <div class="avatar-group">
                          <div class="avatar-item">
                            <img :src="`${web}images/avatar/Mohammad_Khusnul_Khuluq_1604238099.png`" alt="">
                          </div>
                          <div class="avatar-item">
                            <img :src="`${web}images/avatar/ilham-sm.jpg`" alt="">
                          </div>
                          <div class="avatar-item">
                            <div class="counting viga">+2</div>
                            <img :src="`${web}images/avatar/rehan-sm.jpg`" alt="">
                          </div>
                        </div>
                        <div class="logo-parent-card position-absolute">
                          <div class="icon-group-card">
                            <img :src="`${web}images/group/intaxa.png`" class="w-100 h-100" style="object-fit: cover" alt="Team">
                          </div>
                        </div>
                        <h5 class="viga mb-0">Intaxa</h5>
                        <p style="font-size: .85rem">Digital Magazine</p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
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
    <b-modal ref="modal-search" id="modal-search" class="modal-standart p-4" centered hide-footer hide-header>
      <div class="closable-any-modal" @click="closeModalManage('modal-search')"><font-awesome-icon icon="times"></font-awesome-icon></div>
      <div class="p-3">
        <h4 class="viga">Cari grub public</h4>
        <div class="w-100">
          <b-form-input v-model="modal.search" class="p-3 rad" type="text" placeholder="Cari sesuatu.."></b-form-input>
        </div>
        <h5 class="viga mt-3">Hasil pencarian</h5>
        <div class="scrollable-notif">
          <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
            <div class="join-button p-3"><font-awesome-icon icon="user-plus"></font-awesome-icon></div>
            <b-row>
              <b-col cols="2">
                <div class="avatar-group-sm d-inline-block">
                  <img :src="`${web}images/group/intaxa.png`" class="w-100 h-100" alt="Ilham">
                </div>
              </b-col>
              <b-col cols="9">
                <h6 class="viga mb-0 mt-2">Intaxa</h6>
                <p style="font-size: .85rem">Digital Magazine</p>
              </b-col>
            </b-row>
          </div>
          <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
            <div class="join-button p-3"><font-awesome-icon icon="user-plus"></font-awesome-icon></div>
            <b-row>
              <b-col cols="2">
                <div class="avatar-group-sm d-inline-block">
                  <img :src="`${web}images/group/teamwork.png`" class="w-100 h-100" alt="Ilham">
                </div>
              </b-col>
              <b-col cols="9">
                <h6 class="viga mb-0 mt-2">Sidescript</h6>
                <p style="font-size: .85rem">Startup Digital</p>
              </b-col>
            </b-row>
          </div>
          <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
            <div class="join-button p-3"><font-awesome-icon icon="user-plus"></font-awesome-icon></div>
            <b-row>
              <b-col cols="2">
                <div class="avatar-group-sm d-inline-block">
                  <img :src="`${web}images/group/momn.png`" class="w-100 h-100" alt="Ilham">
                </div>
              </b-col>
              <b-col cols="9">
                <h6 class="viga mb-0 mt-2">Momn</h6>
                <p style="font-size: .85rem">Dompet Online</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal ref="modal-manage-group" id="modal-manage-group" class="modal-standart p-4" centered hide-footer hide-header>
      <div class="closable-any-modal" @click="closeModalManage('modal-manage-group')"><font-awesome-icon icon="times"></font-awesome-icon></div>
      <div class="p-3">
        <h4 class="viga">{{ modalManageCondition }} Group</h4>
        <div class="w-100">
          <b-row>
            <b-col cols="3">
              <b-form-file v-model="groupForm.file" @change="setPreview" id="fileGroup" class="d-none"></b-form-file>
              <div class="icon-group-card hovered" :class="{'mt-4': groupForm.category == 'lain'}" @click="clickFile()">
                <img v-if="groupForm.src == null" id="previewImg" :src="`${web}images/group/momn.png`" class="w-100 h-100" style="object-fit: cover" alt="Team">
                <img v-if="groupForm.src !== null" id="previewImg" :src="`${groupForm.src}`" class="w-100 h-100" style="object-fit: cover" alt="Team">
              </div>
            </b-col>
            <b-col cols="9">
              <b-form-input class="py-3 mb-2 formGroup" type="text" v-model="groupForm.name" placeholder="Nama group"></b-form-input>
              <b-form-select class="mb-2 formGroup" v-model="groupForm.category">
                <b-form-select-option value="">Pilih Category</b-form-select-option>
                <b-form-select-option value="startup">Startup Digital</b-form-select-option>
                <b-form-select-option value="caffee">Caffee</b-form-select-option>
                <b-form-select-option value="toko">Toko / Market</b-form-select-option>
                <b-form-select-option value="restoran">Tempat makan</b-form-select-option>
                <b-form-select-option value="lain">Linnya</b-form-select-option>
              </b-form-select>
              <b-form-input v-if="groupForm.category == 'lain'" class="formGroup" placeholder="Ketikkan category" v-model="groupForm.otherCategory"></b-form-input>
            </b-col>
          </b-row>
        </div>
        <h5 class="viga mt-3">Invite beberapa orang</h5>
        <div class="d-inline-block rad invitedGroup pl-4 py-2 pr-5">
          <h6 class="viga">Ninno</h6>
          <div class="closable"><font-awesome-icon icon="times"></font-awesome-icon></div>
        </div>
        <b-form-input class="py-3 mb-2 formGroup" type="text" v-model="groupForm.personName" placeholder="Cari berdasarkan email / username"></b-form-input>
        <div class="text-right w-100">
          <b-button class="btn btn-green-primary btn-sm px-5 py-2 mt-3">Simpan</b-button>
        </div>
      </div>
    </b-modal>
    <b-modal ref="modal-notif-group" id="modal-notif-group" class="modal-standart" centered hide-footer hide-header>
      <div class="closable-any-modal" @click="closeModalManage('modal-notif-group')"><font-awesome-icon icon="times"></font-awesome-icon></div>
      <div class="p-3 scrollable-notif">
        <h4 class="viga">Notifikasi Terbaru</h4>
        <b-row>
          <b-col lg="12">
            <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
              <div class="closable position-absolute"><font-awesome-icon icon="times"></font-awesome-icon></div>
              <div class="dateChat position-absolute">2 Menit yang lalu</div>
              <b-row>
                <b-col cols="2">
                  <div class="avatar-group-sm d-inline-block">
                    <img :src="`${web}images/avatar/ilham-sm.jpg`" class="w-100 h-100" alt="Ilham">
                  </div>
                </b-col>
                <b-col cols="9">
                  <h6 class="viga mb-0 mt-2">Ilham Maghfiro</h6>
                  <p style="font-size: .85rem">Bro katanya sekarang ke sekolah ?</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col lg="12">
            <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
              <div class="closable position-absolute"><font-awesome-icon icon="times"></font-awesome-icon></div>
              <div class="dateChat position-absolute">2 Menit yang lalu</div>
              <b-row>
                <b-col cols="2">
                  <div class="avatar-group-sm d-inline-block">
                    <img :src="`${web}images/avatar/ilham-sm.jpg`" class="w-100 h-100" alt="Ilham">
                  </div>
                </b-col>
                <b-col cols="9">
                  <h6 class="viga mb-0 mt-2">Ilham Maghfiro</h6>
                  <p style="font-size: .85rem">Bro katanya sekarang ke sekolah ?</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col lg="12">
            <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
              <div class="closable position-absolute"><font-awesome-icon icon="times"></font-awesome-icon></div>
              <div class="dateChat position-absolute">2 Menit yang lalu</div>
              <b-row>
                <b-col cols="2">
                  <div class="avatar-group-sm d-inline-block">
                    <img :src="`${web}images/avatar/ilham-sm.jpg`" class="w-100 h-100" alt="Ilham">
                  </div>
                </b-col>
                <b-col cols="9">
                  <h6 class="viga mb-0 mt-2">Ilham Maghfiro</h6>
                  <p style="font-size: .85rem">Bro katanya sekarang ke sekolah ?</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col lg="12">
            <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
              <div class="closable position-absolute"><font-awesome-icon icon="times"></font-awesome-icon></div>
              <div class="dateChat position-absolute">2 Menit yang lalu</div>
              <b-row>
                <b-col cols="2">
                  <div class="avatar-group-sm d-inline-block">
                    <img :src="`${web}images/avatar/ilham-sm.jpg`" class="w-100 h-100" alt="Ilham">
                  </div>
                </b-col>
                <b-col cols="9">
                  <h6 class="viga mb-0 mt-2">Ilham Maghfiro</h6>
                  <p style="font-size: .85rem">Bro katanya sekarang ke sekolah ?</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
           <b-col lg="12">
            <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
              <div class="closable position-absolute"><font-awesome-icon icon="times"></font-awesome-icon></div>
              <div class="dateChat position-absolute">2 Menit yang lalu</div>
              <b-row>
                <b-col cols="2">
                  <div class="avatar-group-sm d-inline-block">
                    <img :src="`${web}images/avatar/ilham-sm.jpg`" class="w-100 h-100" alt="Ilham">
                  </div>
                </b-col>
                <b-col cols="9">
                  <h6 class="viga mb-0 mt-2">Ilham Maghfiro</h6>
                  <p style="font-size: .85rem">Bro katanya sekarang ke sekolah ?</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
           <b-col lg="12">
            <div class="w-100 card chat-card mb-2 rad p-3 position-relative">
              <div class="closable position-absolute"><font-awesome-icon icon="times"></font-awesome-icon></div>
              <div class="dateChat position-absolute">2 Menit yang lalu</div>
              <b-row>
                <b-col cols="2">
                  <div class="avatar-group-sm d-inline-block">
                    <img :src="`${web}images/avatar/ilham-sm.jpg`" class="w-100 h-100" alt="Ilham">
                  </div>
                </b-col>
                <b-col cols="9">
                  <h6 class="viga mb-0 mt-2">Ilham Maghfiro</h6>
                  <p style="font-size: .85rem">Bro katanya sekarang ke sekolah ?</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
import MenuDashboard from '@/components/MenuDashboard.vue'
import MenuNotification from '@/components/MenuNotification.vue'
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeAside: false,
      activeNotif: false,
      modalManageCondition: 'Buat',
      menuGroupActive: 0,
      groupForm: {
        file: null,
        src: null,
        name: '',
        category: '',
        otherCategory: '',
      },
      personName: '',
      modal: {
        search: '',
      }
    }
  },
  computed: {
    ...mapGetters({
      api: 'Api/getApi',
      web: 'Api/getWeb',
    })
  },
  components: {
    NavbarDashboard,
    MenuDashboard,
    MenuNotification
  },
  methods: {
    onUpdateGroup(id) {
      this.modalManageCondition = 'Edit'
      // get group by id
      this.$refs['modal-manage-group'].show()
    },
    onDeleteGroup(id) {
      confirm('Yakin mau dihapus ?')
    },
    showMenuGroup(id) {
      if(this.menuGroupActive == id) {
        this.menuGroupActive = 0
      } else {
        this.menuGroupActive = id
      }
    },
    toggleMenuGroup(id) {
      if(this.menuGroupActive == 0) {
        this.menuGroupActive = id
      } else {
        this.menuGroupActive = 0
      }
    },
    closeModalManage(ref) {
      if(ref == 'modal-manage-group') {
        this.modalManageCondition = 'Buat'
      }
      this.$refs[ref].hide()
    },
    clickFile() {
      document.getElementById('fileGroup').click()
    },
    setPreview(e) {
      let file = e.target.files[0]
      this.groupForm.src = URL.createObjectURL(file)
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
    }
  }
}
</script>