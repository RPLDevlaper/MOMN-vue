<template>
	<div>
		<b-container fluid class="bg-green py-5 position-relative" style="z-index: 300" 
		v-if="$route.name != 'Signin' && $route.name != 'Signup' && $route.name != 'Dashboard' 
		&& $route.name != 'ForgotPassword' && $route.name != 'ResetPassword' && $route.matched[0].props.default.type != 'Dashboard' ">
			<img src="~@/assets/img/pattern/pattern-footer.png" class="position-absolute h-100" style="bottom: 0px; right: 0px; opacity: .5" alt="">
			<b-container class="position-relative">
				<b-row>
					<b-col md="5" class="position-relative mb-md-0 mb-3">
						<img src="~@/assets/img/device/computer-home.png" class="w-75 position-absolute img-footer" alt="">
					</b-col>
					<b-col md="7" class="position-relative text-left pt-md-0 pt-5 mt-md-0 mt-4">
						<h1 class="viga">Ayo Pakai #DompetOnline Sekarang Juga</h1>
						<b-button class="btn btn-white rad px-5 py-3 no-active" :to="{name: 'Signin'}">Login Sekarang</b-button>
						<img src="~@/assets/img/widget/app-store.png" class="d-inline-block btn-store-app" alt="app store momn">
						<img src="~@/assets/img/widget/google-play.png" class="d-inline-block btn-store-app mt-md-0 mt-2" alt="app store momn">
					</b-col>
					<b-col cols="12 position-relative pt-5 mt-4">
						<div class="line-footer-white"></div>
					</b-col>
				</b-row>
				<b-row class="mt-4 pb-5">
					<b-col md="6">
						<div class="w-100 text-left">
							<img src="~@/assets/img/logo/logo-black.png" height="70px" class="d-inline-block mr-4" alt="">
							<h2 class="d-inline-block viga my-2 position-relative" style="color: black; top: 10px">MOMN</h2>
						</div>
						<div class="w-100 text-left">
							<b-link class="mr-md-3 mr-0 mx-md-0 mx-2 link-footer pb-3" :to="{name: 'Home'}">Home</b-link>
							<b-link class="mr-md-3 mr-0 mx-md-0 mx-2 link-footer pb-3" :to="{name: 'Partner'}">Partner</b-link>
							<!-- <b-link class="mr-md-3 mr-0 mx-md-0 mx-2 link-footer pb-3" :to="{name: 'Career'}">Career</b-link> -->
							<b-link class="mr-md-3 mr-0 mx-md-0 mx-2 link-footer pb-3" :to="{name: 'Fitur'}">Fitur</b-link>
							<b-link class="mr-md-3 mr-0 mx-md-0 mx-2 link-footer pb-3" :to="{name: 'Promo'}">Promo</b-link>
							<b-link class="mr-md-3 mr-0 mx-md-0 mx-2 link-footer pb-3" :to="{name: 'Blog'}">Blog</b-link>
							<b-link class="mr-md-3 mr-0 mx-md-0 mx-2 link-footer pb-3" :to="{name: 'Game'}">Game</b-link>
						</div>
					</b-col>
					<b-col md="6">
						<div class="w-100 text-right">
							<h5 style="color: black">Follow Us</h5>
							<a class="ml-md-3 mr-0 mx-md-0 mx-2 link-footer" href="https://www.instagram.com/sidescript_dev/"><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon></a>
							<a class="ml-md-3 mr-0 mx-md-0 mx-2 link-footer" href="https://web.facebook.com/NulShit83"><font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon></a>
						</div>
					</b-col>
				</b-row>
			</b-container>
			<b-row class="position-absolute w-100" style="left: 0px; bottom: 0px">
				<b-col md="6">
					<div class="w-100 py-3 px-5 bg-white d-flex licensi-footer">
						<img src="~@/assets/img/team.png" width="50px" alt="">
						<p class="mb-0 mt-2 ml-3">@2020 Developed by SideScript Dev</p>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
      rutNem: this.$route.matched[0].props.default.type,
		}
	}
}
</script>