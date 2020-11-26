<template>
  <div>
    <b-container class="overflow-hidden" fluid >
      <b-row>
        <b-col :class="{'col-lg-3 col-9': asideLeft == true, 'col-lg-1 col-3 px-0 asideLeftHide': asideLeft == false}" class="menu-aside-parent asideLeft bg-full-page">
          <div :class="{'text-center': asideLeft == false, 'text-left': asideLeft == true}" class="nav-brand px-4 py-3">
            <img src="@/assets/img/logo/chat.png" alt="Momn Chat" height="40px" class="d-inline-block">
            <h3 v-if="asideLeft == true" class="viga mText-primary d-inline-block position-relative ml-2" style="top: 6px">MOMN Chat</h3>
          </div>
          <div :class="{'px-4': asideLeft == true, 'px-2': asideLeft == false}">
            <div class="profile-preview bg-green-white rad" :class="{'p-4 py-2': asideLeft == true, 'p-1': asideLeft == false}">
              <div class="avatar-profile" :class="{'mb-4': asideLeft == true, 'minimize': asideLeft == false}">
                <img :src="`${web}images/avatar/${user.avatar}`" alt="User Profile">
              </div>
              <h4 v-if="asideLeft == true" class="viga mb-0">{{ user.name }}</h4>
              <p v-if="asideLeft == true" class="mb-0">Developer MOMN</p>
            </div>
            <div class="text-left w-100">
              <h5 class="viga my-3" v-if="asideLeft == true">History Chat</h5>
              <div :class="{'p-3': asideLeft == true, 'p-2': asideLeft == false}" class="w-100 card card-chat rad m mb-2 position-relative border-0">
                <div class="position-relative parent-profile-chat d-inline-block">
                  <div class="avatar-profile-chat mb-4 d-inline-block">
                    <img :src="`${web}images/avatar/umik-sm.jpg`" alt="User Profile">
                  </div>
                  <!-- <div class="isActiveChat"></div> -->
                  <div class="d-inline-block name-chat" v-if="asideLeft == true">
                    <h6 class="viga d-inline-block">Umik</h6>
                  </div>
                </div>
                <div class="widget-chat">
                  <!--  <div v-if="asideLeft == true" class="mute-message"><font-awesome-icon icon="volume-mute"></font-awesome-icon></div> -->
                  <div v-if="asideLeft == true" class="pinned-message"><font-awesome-icon icon="thumbtack"></font-awesome-icon></div>
                  <div class="new-messsage">1</div>
                </div>
                <div class="menu-chat text-right p-3" @click="toggleMenuChat(2)">
                  <font-awesome-icon v-if="menuChatActive !== 2" icon="ellipsis-v"></font-awesome-icon>
                  <font-awesome-icon v-if="menuChatActive == 2" icon="times"></font-awesome-icon>
                </div>
                <div class="list-menu-chat" v-if="menuChatActive == 2">
                  <div class="list-menu py-2 px-3" @click="muteChat(2)">Mute</div>
                  <div class="list-menu py-2 px-3" @click="pinChat(2)">Pin Chat</div>
                  <div class="list-menu delete py-2 px-3" @click="deleteChat(2)">Delete</div>
                </div>
              </div>
              <div :class="{'p-3': asideLeft == true, 'p-2': asideLeft == false}" class="w-100 card card-chat rad m mb-2 position-relative border-0">
                <div class="position-relative parent-profile-chat d-inline-block">
                  <div class="avatar-profile-chat mb-4 d-inline-block">
                    <img :src="`${web}images/avatar/adell-sm.jpg`" alt="User Profile">
                  </div>
                  <div class="isActiveChat"></div>
                  <div class="d-inline-block name-chat" v-if="asideLeft == true">
                    <h6 class="viga d-inline-block">Adell</h6>
                  </div>
                </div>
                <div class="widget-chat">
                  <!--  <div v-if="asideLeft == true" class="mute-message"><font-awesome-icon icon="volume-mute"></font-awesome-icon></div> -->
                  <div v-if="asideLeft == true" class="pinned-message"><font-awesome-icon icon="thumbtack"></font-awesome-icon></div>
                  <div class="new-messsage">2</div>
                </div>
                <div class="menu-chat text-right p-3" @click="toggleMenuChat(1)">
                  <font-awesome-icon v-if="menuChatActive !== 1" icon="ellipsis-v"></font-awesome-icon>
                  <font-awesome-icon v-if="menuChatActive == 1" icon="times"></font-awesome-icon>
                </div>
                <div class="list-menu-chat" v-if="menuChatActive == 1">
                  <div class="list-menu py-2 px-3" @click="muteChat(1)">Mute</div>
                  <div class="list-menu py-2 px-3" @click="pinChat(1)">Pin Chat</div>
                  <div class="list-menu delete py-2 px-3" @click="deleteChat(1)">Delete</div>
                </div>
              </div>
              <div :class="{'p-3': asideLeft == true, 'p-2': asideLeft == false}" class="w-100 card card-chat rad m mb-2 position-relative border-0 bg-green-white">
                <div class="position-relative parent-profile-chat d-inline-block">
                  <div class="avatar-profile-chat mb-4 d-inline-block">
                    <img :src="`${web}images/group/teamwork.png`" alt="User Profile">
                  </div>
                  <!-- <div class="isActiveChat"></div> -->
                  <div class="d-inline-block name-chat" v-if="asideLeft == true">
                    <h6 class="viga d-inline-block">Sidescript</h6>
                  </div>
                </div>
                <div class="widget-chat">
                  <!--  <div v-if="asideLeft == true" class="mute-message"><font-awesome-icon icon="volume-mute"></font-awesome-icon></div> -->
                  <!-- <div v-if="asideLeft == true" class="pinned-message"><font-awesome-icon icon="thumbtack"></font-awesome-icon></div> -->
                  <div class="new-messsage">2</div>
                </div>
                <div class="menu-chat text-right p-3" @click="toggleMenuChat(3)">
                  <font-awesome-icon v-if="menuChatActive !== 3" icon="ellipsis-v"></font-awesome-icon>
                  <font-awesome-icon v-if="menuChatActive == 3" icon="times"></font-awesome-icon>
                </div>
                <div class="list-menu-chat" v-if="menuChatActive == 3">
                  <div class="list-menu py-2 px-3" @click="muteChat(3)">Mute</div>
                  <div class="list-menu py-2 px-3" @click="pinChat(3)">Pin Chat</div>
                  <div class="list-menu delete py-2 px-3" @click="deleteChat(3)">Delete</div>
                </div>
              </div>
              <div :class="{'p-3': asideLeft == true, 'p-2': asideLeft == false}" class="w-100 card card-chat rad m mb-2 position-relative border-0">
                <div class="position-relative parent-profile-chat d-inline-block">
                  <div class="avatar-profile-chat mb-4 d-inline-block">
                    <img :src="`${web}images/group/intaxa.png`" alt="User Profile">
                  </div>
                  <!-- <div class="isActiveChat"></div> -->
                  <div class="d-inline-block name-chat" v-if="asideLeft == true">
                    <h6 class="viga d-inline-block">Intaxa</h6>
                  </div>
                </div>
                <div class="widget-chat">
                  <!--  <div v-if="asideLeft == true" class="mute-message"><font-awesome-icon icon="volume-mute"></font-awesome-icon></div> -->
                  <!-- <div v-if="asideLeft == true" class="pinned-message"><font-awesome-icon icon="thumbtack"></font-awesome-icon></div> -->
                  <div class="new-messsage">2</div>
                </div>
                <div class="menu-chat text-right p-3" @click="toggleMenuChat(3)">
                  <font-awesome-icon v-if="menuChatActive !== 4" icon="ellipsis-v"></font-awesome-icon>
                  <font-awesome-icon v-if="menuChatActive == 4" icon="times"></font-awesome-icon>
                </div>
                <div class="list-menu-chat" v-if="menuChatActive == 4">
                  <div class="list-menu py-2 px-3" @click="muteChat(4)">Mute</div>
                  <div class="list-menu py-2 px-3" @click="pinChat(4)">Pin Chat</div>
                  <div class="list-menu delete py-2 px-3" @click="deleteChat(4)">Delete</div>
                </div>
              </div>
            </div>
          </div>
          <div class="toggleLeftAside" :class="{'asideLeftFalse': asideLeft == false}" @click="toggleAsideLeft()">
            <font-awesome-icon v-if="asideLeft == true" icon="angle-left"></font-awesome-icon>
            <font-awesome-icon v-if="asideLeft == false" icon="angle-right"></font-awesome-icon>
            </div>
        </b-col>


        <b-col :class="{'col-lg-10': asideRight == false && asideLeft == false}" class="bg-full-page bg-green" style="z-index: 0">
          <button class="btn-patungan shadow">
            <img src="@/assets/img/icon/patungan.png" width="25px" alt="">
          </button>
          <ul class="w-100 p-0 chat-content" v-chat-scroll style="list-style: none">
            <li class="px-3 my-2 position-relative">
              <div class="p-3 text-left bg-white rad position-relative chatBox me-chat">
                <div class="menu-chatBox" @click="toggleMenuChatting(1)">
                  <font-awesome-icon v-if="menuChatting != 1" icon="ellipsis-v"></font-awesome-icon>
                  <font-awesome-icon v-if="menuChatting == 1" icon="times"></font-awesome-icon>
                </div>
                <div class="from">
                  <div class="avatar-chat-content">
                    <img :src="`${web}images/avatar/${user.avatar}`" alt="">
                  </div>
                  <span class="d-inline-block position-relative ml-2 viga" style="top: -9px">{{ user.name }}</span>
                </div>
                <div class="msg">Assalamu'alaikum</div>
                <div class="position-absolute py-2 px-4" style="bottom: 0px; right: 0px">
                  <p style="font-size: .7rem" class="mb-0">10 Menit yang lalu</p>
                </div>
                <div v-if="menuChatting == 1" class="menu-list-chatBox text-left shadow">
                  <div class="menu-list py-2 px-3" @click="replyChatting(1)">Balas</div>
                  <div class="menu-list py-2 px-3" @click="editChatting(1)">Edit</div>
                  <div class="menu-list py-2 px-3" @click="starChatting(1)">Bintang</div>
                  <div class="menu-list delete py-2 px-3" @click="deleteChatting(1)">Hapus</div>
                </div>
              </div>
            </li>
            <li>
              <div class="w-100 text-center">
                <div class="px-5 d-inline-block rad bg-white py-2 shadow">2 Pesan Baru</div>
              </div>
            </li>
            <li class="px-3 my-2 position-relative">
              <div class="p-3 text-left bg-green-white rad position-relative chatBox other-chat">
                <div class="menu-chatBox" @click="toggleMenuChatting(2)">
                  <font-awesome-icon v-if="menuChatting != 2" icon="ellipsis-v"></font-awesome-icon>
                  <font-awesome-icon v-if="menuChatting == 2" icon="times"></font-awesome-icon>
                </div>
                <div class="from">
                  <div class="avatar-chat-content">
                    <img :src="`${web}images/avatar/rehan-sm.jpg`" alt="">
                  </div>
                  <span class="d-inline-block position-relative ml-2 viga" style="top: -9px">Rehan</span>
                </div>
                <div class="msg">Wa'alaikumsalam</div>
                <div class="position-absolute py-2 px-4" style="bottom: 0px; right: 0px">
                  <p style="font-size: .7rem" class="mb-0">2 Menit yang lalu</p>
                </div>
                <div v-if="menuChatting == 2" class="menu-list-chatBox text-left shadow">
                  <div class="menu-list py-2 px-3" @click="replyChatting(2)">Balas</div>
                  <div class="menu-list py-2 px-3" @click="starChatting(2)">Bintang</div>
                  <div class="menu-list delete py-2 px-3" @click="deleteChatting(2)">Hapus</div>
                </div>
              </div>
            </li>
            <li class="px-3 my-2 position-relative">
              <div class="p-3 text-left bg-green-white rad position-relative chatBox other-chat">
                <div class="menu-chatBox" @click="toggleMenuChatting(3)">
                  <font-awesome-icon v-if="menuChatting != 3" icon="ellipsis-v"></font-awesome-icon>
                  <font-awesome-icon v-if="menuChatting == 3" icon="times"></font-awesome-icon>
                </div>
                <div class="from">
                  <div class="avatar-chat-content">
                    <img :src="`${web}images/avatar/ilham-sm.jpg`" alt="">
                  </div>
                  <span class="d-inline-block position-relative ml-2 viga" style="top: -9px">Ilham</span>
                </div>
                <div class="msg">Wa'alaikumsalam bro..</div>
                <div class="position-absolute py-2 px-4" style="bottom: 0px; right: 0px">
                  <p style="font-size: .7rem" class="mb-0">3 Menit yang lalu</p>
                </div>
                 <div v-if="menuChatting == 3" class="menu-list-chatBox text-left shadow">
                  <div class="menu-list py-2 px-3" @click="replyChatting(3)">Balas</div>
                  <div class="menu-list py-2 px-3" @click="starChatting(3)">Bintang</div>
                  <div class="menu-list delete py-2 px-3" @click="deleteChatting(3)">Hapus</div>
                </div>
              </div>
            </li>
          </ul>
          <div class="message-content shadow">
            <b-row>
              <b-col cols="9" class="py-2">
                <b-form-input class="border-0 mt-1" v-model="message" placeholder="Ketikkan sesuatu.."></b-form-input>
              </b-col>
              <b-col cols="3" class="py-2">
                <b-button class="btn btn-white mx-1"><font-awesome-icon icon="smile" class="mText-primary"></font-awesome-icon></b-button>
                <b-button class="btn btn-white mx-1"><font-awesome-icon icon="link" class="mText-primary"></font-awesome-icon></b-button>
              </b-col>
            </b-row>
          </div>  
        </b-col>


        <b-col class="bg-full-page asideRight" :class="{'col-lg-3 col-9': asideRight == true, 'col-lg-1 px-1 pt-3 asideRightHide': asideRight == false}">
          <div :class="{'px-3 py-3': asideRight == true, 'p-1': asideRight == false}">
            <div class="bg-green-white rad position-relative" :class="{'p-4': asideRight == true, 'p-1': asideRight == false}">
              <div class="avatar-profile" :class="{'minimize my-2': asideRight == false, 'mb-4': asideRight == true}">
                <img :src="`${web}images/group/teamwork.png`" alt="User Profile">
              </div>
              <h4 v-if="asideRight == true" class="viga mb-0">Sidescript</h4>
              <p v-if="asideRight == true" class="mb-0">Developer Team</p>
              <div class="avatar-group-chat">
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
            </div>
            <div class="pt-4">
              <div class="w-100 bg-light rad pt-3 px-3 pb-2 text-left">
                <h6 class="viga">Resources</h6>
                <b-row>
                  <b-col :class="{'col-6': asideRight == true, 'col-12': asideRight == false}" class="pl-2 pr-1">
                    <div class="w-100 card-resource mb-2 rad pb-0 px-2" :class="{'text-center pt-3': asideRight == false, 'pt-2': asideRight == true}">
                      <div class="d-inline-block icon-resource position-relative" style="top: -10px"><font-awesome-icon icon="image"></font-awesome-icon></div>
                      <div class="d-inline-block ml-2" v-if="asideRight == true">
                        <span class="d-block font-weight-bold" style="font-size: .9rem">Images</span>
                        <span class="d-block" style="font-size: .75rem">2 Item</span>
                      </div>
                    </div>
                  </b-col>
                  <b-col :class="{'col-6': asideRight == true, 'col-12': asideRight == false}" class="pl-1 pr-2">
                    <div class="w-100 card-resource mb-2 rad pb-0 px-2" :class="{'text-center pt-3': asideRight == false, 'pt-2': asideRight == true}">
                      <div class="d-inline-block icon-resource position-relative" style="top: -10px"><font-awesome-icon icon="link"></font-awesome-icon></div>
                      <div class="d-inline-block ml-2" v-if="asideRight == true">
                        <span class="d-block font-weight-bold" style="font-size: .9rem">Link</span>
                        <span class="d-block" style="font-size: .75rem">4 Item</span>
                      </div>
                    </div>
                  </b-col>
                  <b-col :class="{'col-6': asideRight == true, 'col-12': asideRight == false}" class="pl-2 pr-1">
                    <div class="w-100 card-resource mb-2 rad pb-0 px-2" :class="{'text-center pt-3': asideRight == false, 'pt-2': asideRight == true}">
                      <div class="d-inline-block icon-resource position-relative" style="top: -10px"><font-awesome-icon icon="file"></font-awesome-icon></div>
                      <div class="d-inline-block ml-2" v-if="asideRight == true">
                        <span class="d-block font-weight-bold" style="font-size: .9rem">File</span>
                        <span class="d-block" style="font-size: .75rem">5 Item</span>
                      </div>
                    </div>
                  </b-col>
                  <b-col :class="{'col-6': asideRight == true, 'col-12': asideRight == false}" class="pr-2 pl-1">
                    <div class="w-100 card-resource mb-2 rad pb-0 px-2" :class="{'text-center pt-3': asideRight == false, 'pt-2': asideRight == true}">
                      <div class="d-inline-block icon-resource position-relative" style="top: -10px"><font-awesome-icon icon="video"></font-awesome-icon></div>
                      <div class="d-inline-block ml-2" v-if="asideRight == true">
                        <span class="d-block font-weight-bold" style="font-size: .9rem">Video</span>
                        <span class="d-block" style="font-size: .75rem">1 Item</span>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
            <div class="pt-3">
              <div class="text-left">
                <h6 class="viga">Patungan</h6>
              </div>
              <div class="card mt-2 p-3 position-relative rad border-0" :class="{'text-center': asideRight == false}">
                <div class="avatar-profile-chat d-inline-block" :class="{'text-center mx-auto': asideRight == false}">
                  <img :src="`${web}images/group/patungan/spotify.png`" alt="User Profile">
                </div>
                <div class="d-inline-block name-chat ml-4 mt-1 text-left" v-if="asideRight == true">
                  <h6 class="viga d-inline-block mb-0">Spotify</h6>
                  <p style="font-size: .75rem">Rp. 75.000,-</p>
                </div>
                <div class="position-absolute py-2 px-4" style="bottom: 0px; right: 0px" v-if="asideRight == true">
                  <p style="font-size: .7rem" class="mb-0">Kemarin</p>
                </div>
              </div>
              <div class="card mt-2 p-3 position-relative rad border-0" :class="{'text-center': asideRight == false}">
                <div class="avatar-profile-chat d-inline-block" :class="{'text-center mx-auto': asideRight == false}">
                  <img :src="`${web}images/group/patungan/netflix.jpg`" alt="User Profile">
                </div>
                <div class="d-inline-block name-chat ml-4 mt-1 text-left" v-if="asideRight == true">
                  <h6 class="viga d-inline-block mb-0">Netflix</h6>
                  <p style="font-size: .75rem">Rp. 250.000,-</p>
                </div>
                <div class="position-absolute py-2 px-4" style="bottom: 0px; right: 0px" v-if="asideRight == true">
                  <p style="font-size: .7rem" class="mb-0">1 Minggu yang lalu</p>
                </div>
              </div>
              <div class="card mt-2 p-3 position-relative rad border-0" :class="{'text-center': asideRight == false}">
                <div class="avatar-profile-chat d-inline-block" :class="{'text-center mx-auto': asideRight == false}">
                  <img :src="`${web}images/group/patungan/jagoan_hosting.png`" alt="User Profile">
                </div>
                <div class="d-inline-block name-chat ml-4 mt-1 text-left" v-if="asideRight == true">
                  <h6 class="viga d-inline-block mb-0">Jagoan hosting</h6>
                  <p style="font-size: .75rem">Rp. 420.000,-</p>
                </div>
                <div class="position-absolute py-2 px-4" style="bottom: 0px; right: 0px" v-if="asideRight == true">
                  <p style="font-size: .7rem" class="mb-0">1 Bulan yang lalu</p>
                </div>
              </div>
            </div>
          </div>
          <div class="toggleRightAside" :class="{'asideRightFalse': asideRight == false}" @click="toggleAsideRight()">
            <font-awesome-icon v-if="asideRight == true" icon="angle-right"></font-awesome-icon>
            <font-awesome-icon v-if="asideRight == false" icon="angle-left"></font-awesome-icon>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import '@/assets/css/chat.scss';
@import '@/assets/css/style.scss';
@import '@/assets/css/dashboard.scss';
</style>

<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'
export default {
  data() {
    return {
      menuChatActive: 0,
      menuChatting: 0,
      message: '',
      asideLeft: false,
      asideRight: true,
    }
  },
  computed: {
    ...mapGetters({
      api: 'Api/getApi',
      web: 'Api/getWeb',
      user: 'Auth/getUser',
    })
  },
  methods: {
    toggleMenuChat(id) {
      if(this.menuChatActive == id) {
        this.menuChatActive = 0
      } else {
        this.menuChatActive = id
      }
    },
    toggleMenuChatting(id) {
      if(this.menuChatting == id) {
        this.menuChatting = 0
      } else {
        this.menuChatting = id
      }
    },
    muteChat(id) {
      //
      this.toggleMenuChat(this.menuChatActive)
    },
    pinChat(id) {
      //
      this.toggleMenuChat(this.menuChatActive)
    },
    deleteChat(id) {
      var tanya = confirm('Yakin ?')
      if(tanya == false) {
        return false
      }
      //
      this.toggleMenuChat(this.menuChatActive)
    },
    replyChatting(id) {
      //
      this.toggleMenuChatting(this.menuChatting)
    },
    editChatting(id) {
      //
      this.toggleMenuChatting(this.menuChatting)
    },
    starChatting(id) {
      //
      this.toggleMenuChatting(this.menuChatting)
    },
    deleteChatting(id) {
      //
      this.toggleMenuChatting(this.menuChatting)
    },
    toggleAsideLeft() {
      if(this.asideLeft == false) {
        this.asideLeft = true
        this.asideRight = false
      } else {
        this.asideLeft = false
      }
    },
    toggleAsideRight() {
      if(this.asideRight == false) {
        this.asideRight = true
        this.asideLeft = false
      } else {
        this.asideRight = false
      }
    }
  }
}
</script>