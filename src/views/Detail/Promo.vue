<template>
	<div>
		<b-container fluid class="py-5">
			<b-container class="py-5">
				<b-row class="pt-3">
					<b-col md="12" class="pt-5">
						<div class="text-left pb-3">
							<img src="~@/assets/img/icon/next.png" alt="next" height="10px" class="d-inline-block mr-4">
							<b-link class="mr-3 text-dark" :to="{name: 'Promo'}">Promotions</b-link>
							<span class="mr-3">/</span>
							<b-link class="mr-4 text-dark">{{ promo.title }}</b-link>
						</div>
						<div class="w-100 highlight-slider">
							<div class="position-relative w-100 rad card-slider bg-green" style="z-index: 330; height: 200px !important">
								<img src="~@/assets/img/pattern/pattern-white.png" class="position-absolute pattern-slider" width="200px" alt="">
                <div class="position-absolute w-auto h-100 image-highlight">
                  <div class="overlay-green"></div>
                  <img :src="`${web}images/promo/${promo.banner}`" class="h-100" alt="">
                </div>
								<img src="~@/assets/img/pattern/pattern-white.png" class="position-absolute pattern-slider-right" alt="">
                <b-row class="position-relative" style="z-index: 320">
									<b-col md="8" class="position-relative text-left px-md-5 px-5 py-md-5 py-5">
										<h1 class="viga">{{ promo.title }}</h1>
                    <p class="mb-3" style="font-size: 1.2rem">{{ promo.created_at }}</p>
                    <!-- <b-button class="py-3 px-4 btn-white" :to="{name: 'PromoDetail', params: {id: promo.id}}">Lihat Selengkapnya <img src="~@/assets/img/icon/next.png" class="d-inline-block ml-3" alt="next"></b-button> -->
									</b-col>
                  <b-col md="4" class="position-relative">
                  </b-col>
								</b-row>
							</div>
						</div>
					</b-col>
				</b-row>
				<b-row class="py-5">
					<b-col md="8">
						<div class="text-left px-4 w-100">
							<h2 class="viga">{{ promo.title }}</h2>
						</div>
					</b-col>
					<b-col md="4">
						<div class="text-right">
							<p class="mb-0">Berlaku sampai</p>
							<b-button class="btn btn-green-primary px-5 py-3 shadow-primary">{{ promo.ex_date }}</b-button>
						</div>
					</b-col>
					<b-col md="12 pb-4 pt-5 text-left">
						<p>{{ promo.description }}</p>
					</b-col>
				</b-row>
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
			</b-container>
		</b-container>
	</div>
</template>

<style lang="scss">
	@import '~@/assets/css/promo.scss';
	@import '~@/assets/css/style.scss';
</style>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			promo: {
				banner: "1.png"
			},
			sharing: {
        url: window.location.href,
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
		}
	},
	computed: {
		...mapGetters({
			api: 'Api/getApi',
			web: 'Api/getWeb',
		})
	},
	metaInfo() {
    return {
      meta: [
        // Twitter Card
        {name: 'twitter:card', content: 'Blogs'},
        {name: 'twitter:title', content: this.promo.title},
        {name: 'twitter:description', content: this.promo.description},
        // image must be an absolute path
        {name: 'twitter:image', content: `${this.api}images/blog/thumbnail/${this.promo.banner}`},
        // Facebook OpenGraph
        {property: 'og:title', content: this.promo.title},
        {property: 'og:site_name', content: 'MOMN.id'},
        {property: 'og:type', content: 'website'},
        {property: 'og:image', content: `${this.api}images/blog/thumbnail/${this.promo.banner}`},
        {property: 'og:description', content: this.promo.description}
      ],
    }
  },
	watch: {
		"$route.params.id": {
			deep: true,
			immediate: true,
			handler: function(value) {
				this.$http.get(`${this.api}promo/${value}`)
				.then((response) => {
					console.log(response)
					this.promo = response.data.data
				})
			}
		}
	},
}
</script>