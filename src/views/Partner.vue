<template>
	<div>
		<b-container style="overflow-x: hidden !important" class="py-5 bg-img bg-img-partner position-relative" fluid>
			<div class="overlay-black w-100 h-100 position-absolute" style="left:0px; top:0px"></div>
			<b-container style="overflow-x: hidden !important" class="py-5">
				<b-row class="py-5">
					<b-col md="10" offset-md="1" class="mt-5 py-5 text-left text-white">
						<h2 class="viga">Gabung dengan MOMN Untuk Kemudahan Transaksi Online Kapanpun dan DImanapun</h2>
						<p>Kembangkan bisnis dengan solusi sistem pembayaran yang Praktis bersama MOMN Bisnis dan MOMN Entrepreneur</p>
					</b-col>
				</b-row>
			</b-container>
		</b-container>
		<b-container style="overflow-x: hidden !important" fluid class="position-relative px-0 pt-5 pb-2 overflow-hidden">
			<img src="~@/assets/img/pattern/pattern.png" width="300px" class="position-absolute" style="transform: rotate(45deg); right: -140px; top: 100px; opacity: .3" alt="pattern">
			<b-container style="overflow-x: hidden !important" class="py-4 px-0 position-relative">
				<b-row>
					<b-col md="8" class="position-relative pb-4" offset-md="2">
						<h1 class="viga">Keuntungan Jadi Rekan MOMN</h1>
						<div class="line-transaction"></div>
					</b-col>
				</b-row>
				<b-row class="mt-5 text-center">
					<b-col md="4" sm="6" class="my-3">
						<img src="~@/assets/img/icon/mpang.png" class="w-50" alt="fitur momn kelengkapan">
						<div class="p-5">
							<h4 class="viga">Praktis</h4>
							<p>Nikmati nyamannya bertransaksi di sistem pembayaran MOMN yang langsung terkoneksi dengan sistem transaksi milik merchant.</p>
						</div>
					</b-col>
					<b-col md="4" sm="6" class="my-3">
						<img src="~@/assets/img/icon/point2.png" class="w-50" alt="fitur momn keamanan">
						<div class="p-5">
							<h4 class="viga">Aman</h4>
							<p>Setiap transaksi pasti aman dan terjamin dengan teknologi dan sistem keaman milik MOMN.</p>
						</div>
					</b-col>
					<b-col md="4" offset-md="0" sm="6" offset-sm="3" class="my-3">
						<img src="~@/assets/img/icon/point3.png" class="w-50" alt="fitur momn kemudahan">
						<div class="p-5">
							<h4 class="viga">Mudah</h4>
							<p>MOMN Merchant merupakan sistem pembayaran yang paling pas untuk semua jenis dan skala bisnis.</p>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</b-container>
		<b-container style="overflow-x: hidden !important" class="position-relative py-4 mb-5 overflow-hidden">
			<b-row>
				<b-col md="8" class="position-relative pb-4 mb-4" offset-md="2">
					<h1 class="viga">Kata Rekan MOMN</h1>
					<div class="line-transaction"></div>
				</b-col>
				<b-col md="10" offset-md="1">
					<slick v-if="testimoni.length" ref="slick" :options="testSlider" class="position-relative pt-4 test-slider">
						<div v-for="test in testimoni" :key="test.id" class="w-100 rekan-card position-relative p-0">
							<b-row class="d-md-none d-flex">
								<b-col cols="12">
									<img :src="`${web}images/testimoni/${test.photo_png}`" class="position-absolute img-png-test d-md-none d-inline-block" style="bottom: 0px" alt="photo_png">
									<div class="w-100 img-md-test" :style="`background-image: url('${web}images/testimoni/${test.photo}')`"></div>
									<div class="overlay-white position-absolute w-100 h-100"></div>
								</b-col>
							</b-row>
							<img :src="`${web}images/testimoni/${test.photo_png}`" class="position-absolute img-png-test d-md-inline-block d-none" alt="photo_png">
							<div class="w-100 partner-rekan-child position-relative overflow-hidden rad shadow">
								<b-row>
									<b-col md="6" class="p-5 text-left">
										<h4 class="viga">{{ test.caption }}</h4>
										<div style="width: 150px; height: 5px;" class="bg-green mb-4 mt-3"></div>
										<h4 class="mText-primary viga mb-0">{{ test.name }}</h4>
										<p class="mb-0" style="font-size: .85rem">{{ test.profession }} | {{ test.age }} Tahun</p>
									</b-col>
									<b-col md="6" class="text-left position-relative">
										<div class="w-100 h-100 position-absolute bg-img bg-green" :style="`background-image: url('${web}images/testimoni/${test.photo}')`"></div>	
										<div class="overlay-white position-absolute w-100 h-100"></div>
									</b-col>
								</b-row>
							</div>
						</div>
					</slick>
				</b-col>
			</b-row>
		</b-container>
		<b-container style="overflow-x: hidden !important" fluid class="px-0 bg-green py-5 position-relative">
			<div class="position-absolute w-100 text-center" style="left: 0px; top: -150px">
				<img src="~@/assets/img/pattern/pattern-white.png" style="transform: rotate(45deg); width: 300px; opacity: .4" alt="">
			</div>
			<b-container style="overflow-x: hidden !important">
				<b-row>
					<b-col md="8" offset-md="2" class="pb-4 mb-4">
						<h1 class="viga" style="color: black !important">Pilih jenis bisnismu ?</h1>
						<div class="line-transaction" style="background-color: black !important"></div>
					</b-col>
				</b-row>
				<b-row class="my-5 mx-0">
					<b-col md="6" class="py-5">
						<div class="card-bisnis bg-white w-100 rad shadow-sm position-relative">
							<div class="position-absolute w-100 text-center bg-img-bussiness" :style="{height: '160px', 'backgroundImage': 'url('+ require('@/assets/img/wallpaper/bussiness1.png') + ')'}">
								<div class="overlay-white-top"></div>
							</div>
							<div class="position-absolute w-100 text-center" style="left: 0px; top: -60px">
								<div class="card-bisnis-profile d-inline-block" :style="{'backgroundImage': 'url('+ require('@/assets/img/icon/bussiness-icon1.png') + ')'}"></div>
							</div>
							<div class="px-5 position-relative pb-4" style="padding-top: 110px !important">
								<h3 class="viga mb-5 mText-dark">UKM & Bisnis Mikro</h3>
								<p class="mt-4 py-4">Jika Anda baru merintis bisnis baru, yuk gabung dan berkembang bersama MOMN Bisnis!</p>
							</div>
							<b-button class="btn btn-green-dark py-3 px-5 w-100">
								Gabung <img src="~@/assets/img/logo/logo-white.png" width="25px" class="d-inline-block rad" alt="logo"> Bisnis
							</b-button>
						</div>
					</b-col>
					<b-col md="6" class="py-5">
						<div class="card-bisnis bg-white w-100 rad shadow-sm position-relative">
							<div class="position-absolute w-100 text-center bg-img-bussiness" :style="{height: '160px', 'backgroundImage': 'url('+ require('@/assets/img/wallpaper/bussiness2.png') + ')'}">
								<div class="overlay-white-top"></div>
							</div>
							<div class="position-absolute w-100 text-center" style="left: 0px; top: -60px">
								<div class="card-bisnis-profile d-inline-block" :style="{'backgroundImage': 'url('+ require('@/assets/img/icon/bussiness-icon2.png') + ')'}"></div>
							</div>
							<div class="px-5 position-relative pb-4" style="padding-top: 110px !important">
								<h3 class="viga mb-5 mText-dark">UKM & Bisnis Mikro</h3>
								<p class="mt-4 py-4">Jika Anda baru merintis bisnis baru, yuk gabung dan berkembang bersama MOMN Bisnis!</p>
							</div>
							<b-button class="btn btn-green-dark py-3 px-5 w-100">
								Gabung <img src="~@/assets/img/logo/logo-white.png" width="25px" class="d-inline-block rad" alt="logo"> Entrepreneur
							</b-button>
						</div>
					</b-col>
					<b-col md="12">
						<!-- <div class="w-100 py-3 bg-green-white rad shadow-sm">
							<b-row>
								<b-col md="8" class="text-left px-5 pt-4">
									<img src="@/assets/img/icon/startBussiness.png" height="72px" class="d-inline-block mr-3 position-relative" style="top: -18px" alt="startBusiness">
									<div class="d-inline-block">
										<h3 class="viga mb-0">Ingin tahu jenis usahamu ?</h3>
										<p class="mb-0">Cari tahu dan temukan solusi terbaik untuk mengembangkannya!</p>
									</div>
								</b-col>
								<b-col md="4" class="px-5">
									<b-button class="btn btn-green-primary py-3 px-5 w-100 my-4">Mulai <img src="@/assets/img/icon/next.png" width="10px" alt="next"></b-button>
								</b-col>
							</b-row>
						</div> -->
					</b-col>
				</b-row>
			</b-container>
		</b-container>
		<b-container style="overflow: hidden !important" fluid class="py-5 position-relative bg-light">
			<img src="~@/assets/img/pattern/pattern.png" class="position-absolute" width="400px" 
				style="bottom: -200px; left: 35%; transform: rotate(45deg); opacity: .3" alt="">
			<b-container style="overflow-x: hidden !important" class="pb-5 position-relative">
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
</template>
<style lang="scss">
@import '~@/assets/css/partner.scss'; 
@import '~@/assets/css/style.scss'; 
@import '~@/assets/css/home.scss';
</style>

<script>
import Slick from 'vue-slick'
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			level: 'partner',
			testimoni: {},
			activePartner: 'all',
			partners: '',
			categoryPartner: '',
			testSlider: {
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
			}
		}
	},
	components: {
		Slick
	},
	computed: {
		...mapGetters({
			api: "Api/getApi",
			web: "Api/getWeb",
		})
	},
	created() {
		this.getTestimoni()
    this.getPartners()
    this.getCategoryPartner()
	},
	methods: {
		getTestimoni() {
			this.$http.post(`${this.api}testimoni/q`, {
				level: this.level,
			}).then((response) => {
				console.log(response)
				this.testimoni = response.data.data
			})
		},
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
		getPartners() {
      this.activePartner = 'all'
      this.$http.get(`${this.api}partner`)
      .then((response) => {
        this.partners = response.data.data
      })
    },
	}
}
</script>