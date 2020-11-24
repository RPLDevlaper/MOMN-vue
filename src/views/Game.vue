<template>
  <div>
		<div class="position-relative pt-5">
			<b-container fluid class="bg-light py-5 position-relative">
				<b-container class="py-2">
					<b-row>
						<b-col md="6" class="position-relative mt-4" offset-md="3">
							<b-form-input @keyup="onTypeSearch" v-model="name" class="w-100 bg-white input-search" placeholder="Search Your Game..."></b-form-input>
							<b-button class="button-condition" @click="clickConditional()">
								<font-awesome-icon class="text-dark" :icon="conditionSearch"></font-awesome-icon>
							</b-button>
						</b-col>
					</b-row>
				</b-container>	
			</b-container>
			<b-container fluid class="pt-5 px-0 w-100 mb-md-0 mb-5 overflow-hidden">
				<b-row :class="{'d-none': conditionSearch != 'search'}">
					<b-col v-for="pop in popular" v-bind:key="pop.id" md="6" v-b-modal.modal-game @click="getDataGame(pop.id)" class="text-left position-relative px-0 card-popular">
						<h1 class="viga ml-5">{{ pop.name }}</h1>
						<div class="w-100 popular-card position-relative overflow-hidden" :style="`background-image: url('${web}images/game/${pop.cover}')`">
							<div class="overlay-green"></div>
						</div>
						<div class="logo-card" style="z-index: 100">
							<img :src="`${web}images/game/logo/${pop.logo}`" class="w-50" alt="">
						</div>
					</b-col>
					<b-col md="6" class="pt-5">
						<div class="w-100 pl-md-3 pl-5 pr-5 other-game">
							<b-row>
								<b-col cols="6" v-for="game in games" v-bind:key="game.id" v-b-modal.modal-game @click="getDataGame(game.id)" class="text-left mb-3">
									<h5 class="viga">{{ game.name }}</h5>
									<div class="w-100 rad py-5 card-other-game position-relative" :style="`background-image: url('${web}images/game/thumbnail/${game.cover}')`">
										<div class="overlay-green"></div>
									</div>
								</b-col>
								<b-col cols="12" class="text-right">
									<sliding-pagination
										:current="currentPage"
										:class="{'d-none' : displayPaginate == 'hide'}"
										:total="totalPages"
										@page-change="getGames"
									></sliding-pagination>
								</b-col>
							</b-row>
						</div>
					</b-col>
				</b-row>
			</b-container>
			<b-container :class="{'d-none' : conditionSearch == 'search'}" class="mb-5 pb-5 other-game">
				<b-row class="mb-5" v-if="searchGame.length > 0">
					<b-col md="4" cols="6" v-for="search in searchGame" :key="search.id" v-b-modal.modal-game @click="getDataGame(search.id)" class="text-left">
						<h4 class="viga">{{ search.name }}</h4>
						<div class="w-100 rad py-5 card-other-game position-relative" :style="`background-image: url('${web}images/game/thumbnail/${search.cover}')`">
							<div class="overlay-green"></div>
						</div>
					</b-col>
				</b-row>
				<b-row v-if="searchGame.length == 0">
					<b-col cols="12">
						<h1 class="viga">Not Found</h1>
					</b-col>
				</b-row>
			</b-container>
			<b-modal id="modal-game" style="overflow-x: hidden !important;" class="border-0 rad p-5 mb-5" hide-header hide-footer hide-header-close size="xl">
				<div class="cover-modal" :style="`background-image: url('${web}images/game/thumbnail/${game.cover}')`">
					<div class="overlay-white-top"></div>
					<div class="overlay-white-left"></div>
				</div>
				<div class="px-5 pt-5 position-relative">
					<h2 class="viga">{{ game.name }}</h2>
					<b-row>
						<b-col md="6" class="py-4">
							<label for="">Enter Your OpenID <font-awesome-icon class="mText-primary" icon="info-circle"></font-awesome-icon></label>
							<b-form-input v-model="openId" placeholder="1234567" style="letter-spacing: 10px" class="py-4 rad px-3 w-100"></b-form-input>
						</b-col>
					</b-row>
					<b-row class="mb-3">
						<b-col v-for="price in prices" :key="price.id" class="my-2" lg="4" md="6">
							<div class="w-100 position-relative rounded price-card overflow-hidden" @click="setPrice(price.id)" :class="{'price-card-active' : priceId == price.id}">
								<img :src="`${web}images/game/pricing/${price.banner}`" class="w-100 h-100" style="object-fit: cover" alt="">
								<div class="position-absolute show-price px-3 pt-5" :class="{'price-active' : priceId == price.id}">
									<h2 class="viga d-inline-block">{{ price.point }}</h2> <span class="position-relative" style="top: -5px">point</span>
									<p class="position-absolute" style="bottom: -47px">Rp. {{ price.price }},-</p>
								</div>
							</div>
						</b-col>
					</b-row>
					<b-button :disabled="openId == ''" @click="nextForm()" class="position-absolute btn btn-green-primary py-3 px-5" style="bottom: -60px; right: 20px">Lanjutkan</b-button>
				</div>
			</b-modal>
		</div>
	</div>
</template>

<style lang="scss">
@import '~@/assets/css/style.scss';
@import '~@/assets/css/game.scss';
</style>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			displayPaginate: 'show',
			name: '',
			openId: '',
			totalPages: 5,
			currentPage: 1,
			priceId: 0,
			prices: {},
			gameId: '',
			popular: {},
			game: {
				name: 'Valorant',
				cover: 'Cover.1604818057.jpeg'
			},
			games: {},
			searchGame: {},
			conditionSearch: 'search',
		}
	},
	computed: {
		...mapGetters({
			api: "Api/getApi",
			web: "Api/getWeb",
			isPrice: "Transaction/isPrice",
			isGame: "Transaction/isGame",
		})
	},
	mounted() {
		this.getPopularGame()
		this.getGames()
		// this.checkLocal()
	},
	methods: {
		checkLocal() {
			if(this.isPrice && this.isGame) {
				window.location.href = '/#/game/transaction'
			}
		},
		getGames(page = 1) {
			this.$http.get(`${this.api}game/not/popular/8?page=${page}`)
			.then((response) => {
				this.games = response.data.data.data
				if(response.data.data.last_page <= 1) {
					this.displayPaginate = 'hide'
				} else {
					this.displayPaginate = 'show'
				}
				this.totalPages = response.data.data.last_page
			})
		},
		nextForm() {
			localStorage.setItem('priceId', this.priceId)
			localStorage.setItem('gameId', this.gameId)
			localStorage.setItem('openId', this.openId)
			window.location.href = '/#/game/transaction'

		},
		getPopularGame() {
			this.$http.post(`${this.api}game/q/paginate/1`, {
				category: 4
			}).then((response) => {
				this.popular = response.data.data.data
			})
		},
		setPrice(id) {
			this.priceId = id
		},
		onTypeSearch() {
			var n = this.name.length
			this.$http.post(`${this.api}game/q/paginate/8`, {
				name: this.name,
			}).then((response) => {
				this.searchGame = response.data.data.data
			})
			if(n >= 3) {
				this.conditionSearch = 'redo'
			} else {
				this.conditionSearch = 'search'
			}
		},
		getDataGame(id) {
			this.gameId = id
			this.$http.get(`${this.api}game/${id}`)
			.then((response) => {
				this.game = response.data.data
				this.prices = response.data.data.price
			})
		},
		clickConditional() {
			var n = this.name.length
			if(n >= 3) {
				this.conditionSearch = 'search'
				this.name = ''
			}
		}
	}
}
</script>