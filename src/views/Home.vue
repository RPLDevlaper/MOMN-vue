<template>
  <div class="w-100 overflow-hidden">
    <div class="pt-5">
      <b-container fluid class="px-0 jumbotron-home overflow-hidden position-relative">
        <div class="overlay-black position-absolute"></div>
        <b-container>
          <b-row>
            <b-col md="6" offset-md="1" class="py-md-5 my-md-5 mt-5 mt-md-0">
              <div class="w-100 py-5 my-5 text-left text-white">
                <h2 class="viga mb-0">APAPUN TRANSAKSINYA.</h2>
                <h6 class="viga">SELALU BISA DIANDALKAN DI SETIAP MOMENT</h6>
                <h1 class="viga" style="font-size: 4rem">#DompetOnline</h1>
                <b-row class="pt-3">
                  <b-col cols="6">
                    <img src="~@/assets/img/widget/google-play.png" class="w-100" alt="google play momn">
                  </b-col>
                  <b-col cols="6">
                    <img src="~@/assets/img/widget/app-store.png" class="w-100" alt="app store momn">
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col md="5" class="py-md-5 mt-md-4 px-0">
              <img src="~@/assets/img/device/computer-home.png" class="w-100" alt="momn device computer">
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <b-container fluid class="position-relative p-0">
        <img src="~@/assets/img/pattern/pattern-gray.png" style="z-index: 100;" class="position-absolute pattern-transaction" alt="momn background pattern">
        <img src="~@/assets/img/pattern/pattern.png" class="position-absolute pattern-introduction" alt="momn background pattern">
        <b-container class="py-5 px-0 position-relative">
          <b-row>
            <b-col md="6" class="position-relative">
              <img src="~@/assets/img/device/phone-home.png" class="w-75" alt="smartphone smart momn">
              <div class="line-introduction d-md-inline-block d-none"></div>
              <img src="~@/assets/img/icon/introduction-icon.png" class="icon-introduction d-md-inline-block d-none" width="50px" alt="icon interogative momn">
            </b-col>
            <b-col md="6" class="position-relative text-left px-5 pt-md-4">
              <h1 class="viga mb-4">Apa itu MOMN ?</h1>
              <p class="mt-md-4 d-inline-block mb-md-3 mb-2">Mau bayar apapun jadi semudah lewat sentuhan jari. Lewat MOMN, kamu bisa melakukan transaksi apapun dengan praktis mulai dari pembayaran tagihan, transaksi barcode scan, hingga e-commerce. #DompetOnline dan nikmati metode pembayaran yang lebih cepat, praktis dan aman.</p>
              <b-button class="btn btn-green-primary px-5 py-3 mt-md-5 mt-3">Temukan Caranya <img width="10px" class="ml-2" src="~@/assets/img/icon/next.png" alt=""></b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <b-container fluid class="position-relative p-0 overflow-hidden">
        <b-container class="py-4 px-0 position-relative">
          <b-row>
            <b-col md="8" class="position-relative pb-4" offset-md="2">
              <h1 class="viga">Transaksi lebih Aman dan Nyaman</h1>
              <div class="line-transaction"></div>
            </b-col>
          </b-row>
          <b-row class="mt-5 text-center">
            <b-col md="4" sm="6" class="my-3">
              <img src="~@/assets/img/icon/point1.png" class="w-50" alt="fitur momn kelengkapan">
              <div class="p-5">
                <h4 class="viga">Lengkap</h4>
                <p>Kemudahan untuk transaksi, kirim uang, pembelian pulsa, bayar tagihan dan transaksi e-commerce</p>
              </div>
            </b-col>
            <b-col md="4" sm="6" class="my-3">
              <img src="~@/assets/img/icon/point2.png" class="w-50" alt="fitur momn keamanan">
              <div class="p-5">
                <h4 class="viga">Aman</h4>
                <p>MOMN dibangun dengan teknologi keamanan kelas dunia dengan sistem jaringan yang diawasi 24 jam</p>
              </div>
            </b-col>
            <b-col md="4" offset-md="0" sm="6" offset-sm="3" class="my-3">
              <img src="~@/assets/img/icon/point3.png" class="w-50" alt="fitur momn kemudahan">
              <div class="p-5">
                <h4 class="viga">Mudah</h4>
                <p>MOMN menjamin 100% keamanan dengan garansi uang kembali</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <b-container fluid class="position-relative overflow-hidden bg-green-dark py-5 px-0">
        <img src="~@/assets/img/pattern/pattern-white.png" class="pattern-feature-top" alt="">
        <img src="~@/assets/img/pattern/pattern-white.png" class="pattern-feature-bottom" alt="">
        <div class="preview-feature d-lg-inline-block d-none">
          <div class="animation"></div>
          <div class="animation"></div>
          <div class="animation"></div>
          <div class="animation"></div>
        </div>
        <b-row class="position-relative px-0">
          <b-col md="8" offset-md="2" class="pb-4">
            <h1 class="viga text-white">Fitur MOMN Dompet Digital</h1>
            <div class="line-safety"></div>
          </b-col>
        </b-row>
        <div class="d-lg-inline-block d-none">
          <b-row>
          <b-col lg="4" offset-lg="4">
            <div @click="fiturActive(1)" :class="{'active-list' : activeFitur == 1}" class="list-feature feature-center pb-5 pt-3 mt-4 px-3">
              <h4 class="viga mb-0">Barcode Dinamis</h4>
              <p class="mb-0">Pembayaran dengan Saldo MOMN  & Kartu Bank lebih cepat dan aman</p>
              <div class="point"></div>
            </div>
          </b-col>
        </b-row>
        <b-row class="text-right">
          <b-col lg="4">
            <div @click="fiturActive(2)" :class="{'active-list' : activeFitur == 2}" class="list-feature py-3 pr-5 mt-4 pl-3">
              <h4 class="viga mb-0">Kode PIN & OTP</h4>
              <p class="mb-0">Transaksi lebih aman dengan kode PIN & OTP</p>
              <div class="point"></div>
            </div>
            <div class="pt-5 mt-5">
              <div @click="fiturActive(3)" :class="{'active-list' : activeFitur == 3}" class="list-feature mt-5 py-3 pr-5 pl-3">
                <h4 class="viga mb-0">Garansi 100%</h4>
                <p class="mb-0">Saldo & alat pembayaran yang tersimpan dijamin 100% keamanannya</p>
                <div class="point"></div>
              </div>
            </div>
          </b-col>
          <b-col lg="4" class="text-center">
            <img :src="image.src" width="100%" class="position-relative" style="top: -20px" :alt="image.alt">
          </b-col>
          <b-col lg="4" class="text-left">
            <div @click="fiturActive(4)" :class="{'active-list' : activeFitur == 4}" class="list-feature feature-left py-3 pl-5 mt-4 pr-3">
              <h4 class="viga mb-0">Semua Platform</h4>
              <p class="mb-0">Bisa digunakan untuk semua platform, dan berbagai device</p>
              <div class="point"></div>
            </div>
            <div class="pt-5 mt-5">
              <div @click="fiturActive(5)" :class="{'active-list' : activeFitur == 5}" class="list-feature feature-left mt-5 py-3 pl-5 pr-3">
                <h4 class="viga mb-0">Interface Friendly</h4>
                <p class="mb-0">Memiliki tampilan dashboard yang fresh, anti jenuh</p>
                <div class="point"></div>
              </div>
            </div>
          </b-col>
        </b-row>
        </div>
        <div class="d-lg-none d-inline-block">
          <b-row>
            <b-col cols="6" class="pl-4">
              <div @click="fiturActive(1)" :class="{'active-list' : activeFitur == 1}" class="list-feature py-3 pr-5 mt-4 pl-3 w-100">
                <h4 class="viga mb-0">Barcode Dinamis</h4>
                <p class="mb-0">Pembayaran dengan Saldo MOMN  & Kartu Bank lebih cepat dan aman</p>
                <div class="point"></div>
              </div>
              <div @click="fiturActive(2)" :class="{'active-list' : activeFitur == 2}" class="list-feature py-3 pr-5 mt-4 pl-3 w-100">
                <h4 class="viga mb-0">Kode PIN & OTP</h4>
                <p class="mb-0">Transaksi lebih aman dengan kode PIN & OTP</p>
                <div class="point"></div>
              </div>
              <div @click="fiturActive(3)" :class="{'active-list' : activeFitur == 3}" class="list-feature py-3 pr-5 mt-4 pl-3 w-100">
                <h4 class="viga mb-0">Semua Platform</h4>
                <p class="mb-0">Bisa digunakan untuk semua platform, dan berbagai device</p>
                <div class="point"></div>
              </div>
              <div @click="fiturActive(4)" :class="{'active-list' : activeFitur == 4}" class="list-feature py-3 pr-5 mt-4 pl-3 w-100">
                <h4 class="viga mb-0">Semua Platform</h4>
                <p class="mb-0">Bisa digunakan untuk semua platform, dan berbagai device</p>
                <div class="point"></div>
              </div>
              <div @click="fiturActive(5)" :class="{'active-list' : activeFitur == 5}" class="list-feature py-3 pr-5 mt-4 pl-3 w-100">
                <h4 class="viga mb-0">Interface Friendly</h4>
                <p class="mb-0">Memiliki tampilan dashboard yang fresh, anti jenuh</p>
                <div class="point"></div>
              </div>
            </b-col>
            <b-col cols="6" class="mt-5 pt-5">
              <img :src="image.srcHp" class="w-100" alt="image.alt">
            </b-col>
          </b-row>
        </div>
      </b-container>
      <b-container class="position-relative overflow-hidden">
        <div class="position-absolute w-100 text-center" style="top: -180px; left: 0px">
          <img src="~@/assets/img/pattern/pattern.png" width="400px" style="transform: rotate(45deg); opacity: .2" alt="">
        </div>
        <b-row>
          <b-col md="8" offset-md="2" class="position-relative py-4">
            <h1 class="viga">Cerita Teman MOMN</h1>
            <div class="line-stories"></div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12" class="text-center pt-4">
            <slick ref="slick" class="position-relative w-100 slider-stories" :options="storiesSlider" v-if="stories.length">
              <div v-for="story in stories" v-bind:key="story.id" class="card-stories position-relative overflow-hidden">
                <img :src="`${web}images/testimoni/${story.photo}`" width="auto" height="100%" class="position-absolute img-story" alt="">
                <div class="position-absolute w-100 h-100 bg-linear-bottom-top" style="left: 0px; top: 0px"></div>
                <div class="position-absolute w-100 text-left px-4" style="left: 0px; bottom: 0px; z-index: 20">
                  <h1 class="viga text-white petik-story">"</h1>
                  <h6 class="font-weight-bold mb-1">{{ story.name }}</h6> 
                  <p style="font-size: .8rem">{{ story.profession }} | {{ story.age }} Tahun</p> 
                </div>
                <div class="position-absolute w-100 h-100 text-left px-4" style="top: 200px; z-index: 30">
                  <h4 class="viga text-dark mb-3" style="z-index: 10">{{ story.caption }}</h4>
                </div>
              </div>
            </slick>
          </b-col> 
        </b-row>
      </b-container>
      <b-container fluid class="pt-5 pb-3 position-relative overflow-hidden" style="background-color: #E2FFF5">
        <img src="~@/assets/img/pattern/pattern.png" class="position-absolute pattern-promotion-top" alt="">
        <img src="~@/assets/img/pattern/pattern.png" class="position-absolute pattern-promotion-bottom" alt="">
        <b-container class="position-relative">
          <b-row>
            <b-col md="8" class="position-relative pb-4" offset-md="2">
              <h1 class="viga">Promosi</h1>
              <div class="line-transaction"></div>
            </b-col>
          </b-row>
          <b-row class="mt-5">
            <b-col md="12">
              <slick ref="slick" class="position-relative w-100 slider-promotions" :options="promotionsSlider" v-if="promotions.length">
                <div v-for="promo in promotions" v-bind:key="promo.id" class="card w-100 rad border-0 bg-white shadow-sm">
                  <div class="img-card overflow-hidden rad-top" style="height: 150px;">
                    <img :src="`${web}images/promo/thumbnail/${promo.banner}`" class="w-100" alt="Promotion">
                  </div>
                  <div class="position-relative text-left p-3" style="height: 100px">
                    <h6 class="viga mb-3">{{ promo.title }}</h6>
                    <p class="mb-0 position-absolute px-3 pb-2" style="bottom: 0px; left: 0px; font-size: .8rem">{{ promo.created_at }}</p>
                    <b-button class="position-absolute btn btn-green-primary px-4 py-2" :to="{name: 'PromoDetail', params: {id: promo.id}}" style="bottom: -15px; right: 0px">Selengkapnya <img width="10px" class="ml-2 d-inline-block" src="~@/assets/img/icon/next.png" alt=""></b-button>
                  </div>
                </div>
              </slick>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
      <b-container fluid class="py-5 position-relative bg-light">
        <img src="~@/assets/img/pattern/pattern.png" class="position-absolute" width="400px" 
          style="bottom: -200px; left: 35%; transform: rotate(45deg); opacity: .3" alt="">
        <b-container class="pb-5 position-relative">
          <b-row>
            <b-col md="8" class="pb-4" offset-md="2">
              <h1 class="viga">Partner</h1>
              <div class="line-transaction"></div>
            </b-col>
            <b-col md="8" offset-md="2" class="py-3">
              <b-button class="px-4 mx-2 btn-green-white" @click="getPartners()" :class="{'btn-green-primary shadow-primary' : activePartner == 'all'}">All</b-button>
              <b-button v-for='category in categoryPartner' v-bind:key="category.id" class="px-4 mx-2 btn-green-white" @click="getOtherPartner(category.id, category.name)" :class="{'btn-green-primary shadow-primary' : activePartner == category.name}" >{{ category.name }}</b-button>
            </b-col>
          </b-row>
          <b-row class="mb-5 pb-md-3 pb-5">
            <b-col v-for="partner in partners" v-bind:key="partner.id" lg="2" md="3" sm="4" xs="6" cols="6" class="px-3 my-2">
              <div class="w-100 px-3 text-center bg-white rad partner-card py-4">
                <img :src="`${web}images/partner/${partner.logo}`" alt="Partner">
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss">
@import '~@/assets/css/home.scss';
@import '~@/assets/css/style.scss';
</style>

<script>
import $ from 'jquery'
import HelloWorld from '@/components/HelloWorld.vue'
import FiturOne from '@/assets/img/device/macbook1.png'
import FiturTwo from '@/assets/img/device/macbook2.png'
import FiturThree from '@/assets/img/device/macbook3.png'
import FiturFour from '@/assets/img/device/macbook4.png'
import FiturFive from '@/assets/img/device/macbook5.png'
import FiturHpOne from '@/assets/img/device/iphone1.png'
import FiturHpTwo from '@/assets/img/device/iphone2.png'
import FiturHpThree from '@/assets/img/device/iphone3.png'
import FiturHpFour from '@/assets/img/device/iphone4.png'
import FiturHpFive from '@/assets/img/device/iphone5.png'
import { mapGetters } from 'vuex'
import '../../src/assets/css/slick.css'
import '../../src/assets/css/slick-theme.css'
import Slick from 'vue-slick'
export default {
  name: 'Home',
  components: {
    Slick
  },
  data() {
    return {
      activePartner: 'all',
      activeFitur: 2,
      image: [
        {
          id: 1,
          src: FiturOne,
          srcHp: FiturHpOne,
          alt: "Fitur one"
        }
      ],
      categoryPartner: '',
      stories: '',
      promotions: '',
      partners: '',
      imagesFitur: [
        {
          id: 0,
          src: FiturOne,
          srcHp: FiturHpOne,
          alt: "Fitur one",
        },
        {
          id: 1,
          src: FiturOne,
          srcHp: FiturHpOne,
          alt: "Fitur one",
        },
        {
          id: 2,
          src: FiturTwo,
          srcHp: FiturHpTwo,
          alt: "Fitur two",
        },
        {
          id: 3,
          src: FiturThree,
          srcHp: FiturHpThree,
          alt: "Fitur three",
        },
        {
          id: 4,
          src: FiturFour,
          srcHp: FiturHpFour,
          alt: "Fitur four",
        },
        {
          id: 5,
          src: FiturFive,
          srcHp: FiturHpFive,
          alt: "Fitur five",
        },
      ],
      storiesSlider: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoPlay: true,
              dots: true,
              centerMode: true,
              autoplaySpeed: 15000,
            }
          }
        ]
      },
      promotionsSlider: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 15000,
            }
          }
        ]
      },
    }
  },
  computed: {
    ...mapGetters({
      api: "Api/getApi",
      web: "Api/getWeb"
    })
  },
  created() {
    console.log(window.location.href)
  },
  mounted() {
    this.fiturActive(this.activeFitur)
    this.getTests()
    this.getPromotions()
    this.getPartners()
    this.getCategoryPartner()
  },
  methods: {
    getOtherPartner(id, value) {
      this.activePartner = value
      this.$http.post(`${this.api}partner/q`, {
        category: id
      })
      .then((response) => {
        this.partners = response.data.data
      })
    },
    getCategoryPartner() {
      this.$http.get(`${this.api}category/partner`)
      .then((response) => {
        this.categoryPartner = response.data.data
      })
    },
    covertDate(date) {
      return date
    },
    getPartners() {
      this.activePartner = 'all'
      this.$http.get(`${this.api}partner`)
      .then((response) => {
        this.partners = response.data.data
      })
    },
    getPromotions() {
      this.$http.get(`${this.api}promo/paginate/6`)
      .then((response) => {
        // console.log(response)
        this.promotions = response.data.data.data
      })
    },
    getTests() {
      this.$http.post(`${this.api}testimoni/q`, {
        level: 'general'
      }).then((response) => {
        // console.log(response)
        this.stories = response.data.data
      })
    },
    fiturActive(id) {
      this.activeFitur = id
      this.image = this.imagesFitur[id]
      this.imageHp = this.imagesFitur[id]
    },
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      })
    },
    beforeUpdate() {
        if (this.$refs.slick) {
            this.$refs.slick.destroy();
        }
    },
    updated() {
        this.$nextTick(function () {
            if (this.$refs.slick) {
                this.$refs.slick.create(this.storiesSlider);
            }
        });
    },
  }
}
</script>
