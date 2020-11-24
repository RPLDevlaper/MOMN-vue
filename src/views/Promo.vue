<template>
  <div>
		<div class="position-relative pt-5">
			<b-container style="overflow-x: hidden !important; overflow-y: hidden !important" fluid class="pt-5 pb-3 bg-light position-relative">
        <img src="~@/assets/img/pattern/pattern.png" class="position-absolute" width="400px" 
             style="top: 100px; left: -150px; transform: rotate(45deg); opacity: .3" alt="">
				<b-row>
					<b-col md="10" offset-md="1">
						<slick ref="slick" :options="highlightSlider" v-if="highlights.length" class="mt-5 position-relative highlight-slider">
							<div v-for="highlight in highlights" v-bind:key="highlight.id" class="position-relative w-100 rad card-slider bg-green" style="z-index: 330">
								<img src="~@/assets/img/pattern/pattern-white.png" class="position-absolute pattern-slider" width="200px" alt="">
                <div class="position-absolute w-auto h-100 image-highlight">
                  <div class="overlay-green"></div>
                  <img :src="`${web}images/promo/thumbnail/${highlight.banner}`" class="h-100" alt="">
                </div>
								<img src="~@/assets/img/pattern/pattern-white.png" class="position-absolute pattern-slider-right" alt="">
                <b-row class="position-relative" style="z-index: 320">
									<b-col md="8" class="position-relative text-left px-md-5 px-5 py-md-5 py-5">
										<h1 class="viga">{{ highlight.title }}</h1>
                    <p class="mb-3" style="font-size: 1.2rem">{{ highlight.created_at }}</p>
                    <b-button class="py-3 px-4 btn-white" :to="{name: 'PromoDetail', params: {id: highlight.id}}">Lihat Selengkapnya <img src="~@/assets/img/icon/next.png" class="d-inline-block ml-3" alt="next"></b-button>
									</b-col>
                  <b-col md="4" class="position-relative">
                  </b-col>
								</b-row>
							</div>
						</slick>
					</b-col>
				</b-row>
			</b-container>
			<b-container style="overflow-x: hidden !important; overflow-y: visible !important" fluid class="mb-5 pb-5">
				<b-container style="overflow-x: hidden !important; overflow-y: visible !important" class="pb-5">
					<b-row>
						<b-col cols="12" class="pt-4">
							<b-button @click="getPromotionEvent(0, 'all', 1)" class="btn btn-green-white mx-2" :class="{'btn-green-primary shadow-primary' : activeCategory == 'all'}">All</b-button>
							<b-button v-for="ctr in categories" v-bind:key="ctr.id" @click="getPromotionEvent(ctr.id, ctr.name, 1)" class="btn btn-green-white mx-2" :class="{'btn-green-primary shadow-primary' : activeCategory == ctr.name}">{{ ctr.name }}</b-button>
						</b-col>
						<b-col v-for="promo in promotions" v-bind:key="promo.id" md="4" class="my-3 py-3">
							<div class="card w-100 rad border-0 bg-white shadow-sm">
								<div class="img-card overflow-hidden rad-top" style="height: 150px;">
									<img :src="`${web}images/promo/thumbnail/${promo.banner}`" class="w-100" alt="Promotion">
								</div>
								<div class="position-relative text-left p-3" style="height: 100px">
									<h6 class="viga mb-3">{{ promo.title }}</h6>
									<p class="mb-0 position-absolute px-3 pb-2" style="bottom: 0px; left: 0px; font-size: .8rem">{{ promo.created_at }}</p>
									<b-button class="position-absolute btn btn-green-primary px-4 py-2" :to="{name: 'PromoDetail', params: {id: promo.id}}" style="bottom: -15px; right: 0px">Selengkapnya <img width="10px" class="ml-2 d-inline-block" src="~@/assets/img/icon/next.png" alt=""></b-button>
								</div>
							</div>
						</b-col>
					</b-row>
          <b-row>
            <b-col md="12" class="text-right">
              <sliding-pagination
                :current="currentPage"
                :total="totalPages"
                @page-change="getPromotions"
              ></sliding-pagination>
            </b-col>
          </b-row>
				</b-container>
			</b-container>
		</div>
	</div>
</template>

<style lang="scss">
	@import '~@/assets/css/promo.scss';
	@import '~@/assets/css/style.scss';
</style>

<script>
import { mapGetters } from 'vuex'
import Slick from 'vue-slick'
export default {
	data() {
		return {
			currentPage: 1,
			categories: '',
      totalPages: 10,
			promotions: {},
			activeCategory: 'all',
			highlights: '',
			categorySelected: {
				name: 'all',
				id: 0,
			},
			highlightSlider: {
				dots: true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	},
	components: {
		Slick
	},
	computed: {
		...mapGetters({
			api: "Api/getApi",
			web: "Api/getWeb"
		}),
	},
	mounted() {
		this.getPromotions(1)
		this.getHighlights()
		this.getCategories()
	},
	methods: {
		getPromotionEvent(id, name, page) {
			this.categorySelected.id = id
			this.categorySelected.name = name
			this.activeCategory = name
			this.getPromotions(page)
		},
		getCategories() {
			this.$http.get(`${this.api}category/promo`)
			.then((response) => {
				this.categories = response.data.data
			})
		},
		getHighlights() {
			this.$http.get(`${this.api}promo/paginate/3`)
			.then((response) => {
				this.highlights = response.data.data.data
			})
		},
		getPromotions(page) {
			if(this.categorySelected.name == 'all' && this.categorySelected.id == 0) {
				this.$http.get(`${this.api}promo/paginate/6?page=${page}`)
				.then((response) => {
					console.log(response)
					this.currentPage = page
					this.totalPages = response.data.data.last_page
					this.promotions = response.data.data.data
					this.activeCategory = 'all'
				})
			} else {
				this.$http.post(`${this.api}promo/q/paginate/6?page=${page}`, {
					category: this.categorySelected.id
				})
				.then((response) => {
					console.log(response)
					this.currentPage = page
					this.totalPages = response.data.data.last_page
					this.promotions = response.data.data.data
					this.activeCategory = this.categorySelected.name
				})
			}
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
					this.$refs.slick.create(this.highlightSlider);
				}
			});
		},
	}
}
</script>