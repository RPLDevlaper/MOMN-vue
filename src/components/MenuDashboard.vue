<template>
  <div>
    <div class="w-100 px-2 py-5 text-left">
      <div class="line-horizon-dashboard position-absolute"></div>
      <img src="~@/assets/img/logo/logo.png" width="35px" alt="logo MOMN" class="d-inline-block position-relative mr-2" style="top: -5px">
      <h3 class="viga d-inline-block mText-primary">MOMN</h3>
      <div class="pl-xl-5 pl-lg-3 pt-2 position-relative">
        <div class="menu-dashboard py-2 position-relative" v-for="menu in menus" :key="menu.name">
          <!-- <div class="position-absolute arrow-nav-dashboard" @click="showSubMenu(menu.name)" v-if="menu.subMenu" style="right: 0px; top: 13.5px; z-index: 100;">
            <font-awesome-icon icon="angle-down" v-if="activeMenu == menu.name"></font-awesome-icon>
            <font-awesome-icon icon="angle-right" v-if="activeMenu != menu.name"></font-awesome-icon>
          </div> -->
          <div class="menu-dashboard-item py-2" @click="movePage(menu.name)" :class="{'active-menu' : menu.name == $route.name}">
            <p style="font-size: .85rem" class="mb-0">{{ menu.name }}</p>
          </div>
          <!-- <div class="sum-menu-dashboard" v-if="menu.subMenu" :class="{'d-none' : menu.name != $route.name, 'd-none' : activeMenu != menu.name}">
            <div class="sub-menu-dashboard-item pl-2 py-2" v-for="subMenu in menu.subMenu" :key="subMenu.name">
              <p class="mb-0" style="font-size: .8rem">{{ subMenu.name }}</p>
            </div>
          </div> -->
        </div>
        <div class="position-absolute" style="bottom: 10px">
        </div>
      </div>
    </div>
    <b-button class="btn btn-green-white py-2 px-5" @click="onLogout()">Logout</b-button>
  </div>
</template>

<style lang="scss">
@import '@/assets/css/dashboard.scss';
@import '@/assets/css/style.scss';
</style>

<script>
export default {
  data() {
    return {
      menus: [
        { name: 'Dashboard'},
        { name: 'Pembayaran' , subMenu : [{ name: 'Ke User' }, { name: 'Ke Aplikasi Lain' }, { name: 'Ke Bank' }] },
        { name: 'Group' },
        { name: 'Bisnis' },
        // { name: 'Games'}
      ],
      activeMenu: this.$route.name
    }
  },
  methods: {
    onLogout() {
      var tanya = confirm('Yakin Logout ?');
      if(tanya == false) {
        return false
      }
      localStorage.removeItem('api_token')
      window.location.reload()      
    },
    movePage(value) {
      this.$router.push({name: value})
    },
    showSubMenu(value) {
      if(this.activeMenu == value) {
        this.activeMenu = 'close'
      } else {
        this.activeMenu = value
      }
    }
  }
}
</script>