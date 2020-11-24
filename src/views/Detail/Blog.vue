<template>
  <div>
    <b-container class="px-0 py-5 jumbotron-detail overflow-hidden position-relative" :style="`background-image: url('${web}images/blog/${blog.banner}')`" fluid>
      <div class="overlay-black position-absolute w-100 h-100" style="top: 0; left: 0"></div>
      <img src="~@/assets/img/pattern/pattern-white.png" class="position-absolute" style="left: -100px; width: 300px; top: 200px; opacity: .4; transform: rotate(45deg)" alt="">
      <b-row class="py-5">
        <b-col md="12" class="px-0 py-5">
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="position-relative w-100 overflow-hidden">
      <img src="~@/assets/img/pattern/pattern.png" class="position-absolute" style="right: -100px; width: 300px; top: -10px; opacity: .2; transform: rotate(45deg)" alt="">
      <b-container class="position-relative">
        <b-row class="mb-5">
          <b-col cols="12" class="text-left pt-5 pb-5 mb-5">
            <div class="text-left pb-5 pt-4">
              <img src="~@/assets/img/icon/next.png" alt="next" height="10px" class="d-inline-block mr-4">
              <b-link class="mr-3 text-dark" :to="{name: 'Blog'}">Blogs</b-link>
              <span class="mr-3">/</span>
              <b-link class="mr-4 text-dark">{{ blog.title }}</b-link>
            </div>
            <p class="viga mText-primary mb-0">{{ blog.category.name }}</p>
            <h1 class="viga">{{ blog.title }}</h1>
            <p class="mb-0">{{ blog.created_at }}</p>
            <p class="mt-4">{{ blog.description }}</p>
            <div class="w-100">
              <b-row>
                <b-col md="6">

                </b-col>
                <b-col md="6" class="text-right">
                  <ShareNetwork
                  class="share-blog mx-2"
                  v-for="network in networks"
                  :network="network.network"
                  :key="network.network"
                  :style="{backgroundColor: network.color}"
                  :url="sharing.url"
                  :title="sharing.title"
                  :description="sharing.description"
                  :quote="sharing.quote"
                  :hashtags="sharing.hashtags"
                  :twitterUser="sharing.twitterUser">
                    <font-awesome-icon :icon="['fab', network.icon]"></font-awesome-icon>
                  </ShareNetwork>
                </b-col>
              </b-row>
            </div>
            <hr>
            <div></div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<style lang="scss">
@import '~@/assets/css/style.scss';
@import '~@/assets/css/blog.scss';
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      blogId: localStorage.getItem('blogId'),
      sharing: {
        url: this.$router.history.current.path,
        title: 'Title',
        description: 'Description',
        quote: 'Pakai Dompet Online Segera !',
      },
      networks: [
        { network: 'facebook', name: 'Facebook', icon: 'facebook', color: '#1877f2' },
        { network: 'telegram', name: 'Telegram', icon: 'telegram-plane', color: '#0088cc' },
        { network: 'twitter', name: 'Twitter', icon: 'twitter', color: '#1da1f2' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'whatsapp', color: '#25d366' },
      ],
      blog: {
        category: {
          name: 'Category'
        },
        banner: '1604854833.jpeg',
      },
    }
  },
  metaInfo() {
    return {
      meta: [
        // Twitter Card
        {name: 'twitter:card', content: 'Blogs'},
        {name: 'twitter:title', content: this.blog.title},
        {name: 'twitter:description', content: this.blog.description},
        // image must be an absolute path
        {name: 'twitter:image', content: `${this.api}images/blog/thumbnail/${this.blog.banner}`},
        // Facebook OpenGraph
        {property: 'og:title', content: this.blog.title},
        {property: 'og:site_name', content: 'MOMN.id'},
        {property: 'og:type', content: 'website'},
        {property: 'og:image', content: `${this.api}images/blog/thumbnail/${this.blog.banner}`},
        {property: 'og:description', content: this.blog.description}
      ],
    }
  },
  computed: {
    ...mapGetters({
      api: "Api/getApi",
      web: "Api/getWeb",
      base: "Api/getBase"
    })
  },
  watch: {
    "$route.params.id": {
      deep: true,
      immediate: true,
      handler: function(value) {
        this.getBlog(value)
      }
    }
  },
  created() {
    this.addViewer()
  },
  methods: {
    addViewer() {
      var localId = localStorage.getItem('blogId'+this.blogId)
      if(localId == null || localId == undefined || localId == "null") {
        this.$http.post(`${this.api}blog/${this.blogId}/addViewer`)
        .then((response) => {
          localStorage.setItem('blogId'+this.blogId, 'viewed')
        })
      } else {
        // localStorage.setItem('blogId'+this.blogId, 'viewed')
      }
    },
    getBlog(id) {
      this.$http.get(`${this.api}blog/${id}`)
      .then((response) => {
        this.blog = response.data.data
      })
    }
  }
}
</script>