<template>
	<div>
		<b-navbar toggleable="lg" type="dark" class="py-3 px-5 nav" 
		v-if="$route.name != 'Signin' && $route.name != 'Signup' && $route.matched[0].props.default.type != 'Dashboard' 
		&& $route.name != 'ForgotPassword' && $route.name != 'ResetPassword'">
			<b-navbar-brand class="no-active" :to="{name: 'Home'}"><img src="../assets/img/logo/logo-white.png" width="50px" alt=""> MOMN</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item class="py-2 link" :to="{name: 'Home'}">Home</b-nav-item>
					<!-- <b-nav-item class="py-2 link" :to="{name: 'Career'}">Career</b-nav-item> -->
					<b-nav-item class="py-2 link" :to="{name: 'Fitur'}">Fitur</b-nav-item>
					<b-nav-item class="py-2 link" :to="{name: 'Partner'}">Partner</b-nav-item>
					<b-nav-item class="py-2 link" :to="{name: 'Promo'}">Promo</b-nav-item>
					<b-nav-item class="py-2 link" :to="{name: 'Blog'}">Blog</b-nav-item>
					<b-nav-item class="py-2 link" :to="{name: 'Game'}">Game</b-nav-item>
					<b-nav-item class="text-primary">
						<b-button class="btn-green-light px-4 no-active text-dark" :to="{name: 'Signin'}">SigIn</b-button>
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "LayoutHeader",
	data() {
		return {
			link: '',
      rutNem: this.$route.matched[0].props.default.type,
			author: "Sidescript Developer"
		}
	},
	created() {
		console.log(this.$route)
	},
}
</script>