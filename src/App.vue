<template>
  <div id="app">
    <layout-header v-if="rutNem != 'Dashboard'"/>
    <router-view/>
    <layout-footer v-if="rutNem != 'Dashboard'"/>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      rutNem: this.$route.matched[0].props.default.type
    }
  },
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  computed: {
    ...mapGetters({
      user: 'Auth/getUser',
      api: 'Api/getApi',
      token: 'Auth/getToken',
      isAuth: 'Auth/isAuth',
    })
  },
  created() {
    this.getUser()
  },
  methods: {
    ...mapMutations("Auth", ["set_user", "set_token"]),
    getUser() {
      if(this.user.length === 0 || this.isAuth) {
        this.$http.get(`${this.api}auth/user`, {
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        }).then((response) => {
          if(response.data.status == 'success') {
            this.set_token(response.data.data.api_token)
            this.set_user(response.data.data)
            console.log(this.user)
          }
        })
        .catch(e => console.log)
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/css/style.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
