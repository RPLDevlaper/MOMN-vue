<template>
  <div class="w-100 p-4 py-5 text-left">
    <div class="line-horizon-notif position-absolute h-100"></div>
    <h4 class="viga">Informasi Terbaru</h4>
    <b-row>
      <b-col v-for="promo in promotions" v-bind:key="promo.id" md="12" class="my-3 py-3">
        <div class="card w-100 rad border-0 bg-white shadow-sm">
          <div class="img-card overflow-hidden rad-top" style="height: 90px;">
            <img :src="`${web}images/promo/thumbnail/${promo.banner}`" class="w-100 h-100" style="object-fit: cover" alt="Promotion">
          </div>
          <div class="position-relative text-left p-3" style="height: 80px">
            <h6 class="viga mb-1">{{ promo.title }}</h6>
            <b-button class="position-absolute btn btn-green-primary px-4 py-2" :to="{name: 'PromoDetail', params: {id: promo.id}}" style="bottom: -15px; right: 0px">Selengkapnya <img width="10px" class="ml-2 d-inline-block" src="~@/assets/img/icon/next.png" alt=""></b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
			promotions: {},
    }
  },
  computed: {
		...mapGetters({
			api: "Api/getApi",
			web: "Api/getWeb"
		}),
	},
  created() {
    this.getPromotions(1)
  },
  methods: {
    getPromotions(page) {
      this.$http.get(`${this.api}promo/paginate/2?page=${page}`)
      .then((response) => {
        console.log(response)
        this.currentPage = page
        this.totalPages = response.data.data.last_page
        this.promotions = response.data.data.data
        this.activeCategory = 'all'
      })
		},
  }
}
</script>