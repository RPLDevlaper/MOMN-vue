<template>
	<div>
		<b-container fluid class="px-0 py-5 position-relative bg-img bg-img-fitur" style="background-image: url('~@/assets/img/wallpaper/fitur.png'); overflow: hidden">
			<img src="~@/assets/img/pattern/pattern.png" width="400px" class="position-absolute" style="right: -200px; bottom: -100px; opacity: .3" alt="pattern">
			<img src="~@/assets/img/pattern/pattern.png" width="400px" class="position-absolute" style="right: -293px; bottom: -6px; opacity: .3" alt="pattern">
			<div class="overlay-black w-100 h-100 position-absolute" style="left:0px; top:0px"></div>
			<b-container class="px-0 py-5 position-relative">
				<b-row class="py-5">
					<b-col md="6" offset-md="6" class="py-5 mt-4 text-left text-white">
						<h2 class="viga mt-4">Bisa Diandalkan Di Setiap MOMN</h2>
						<p>Kenalan sama fitur-fitur DANA & cara mudah menggunakannya yuk!</p>
					</b-col>
				</b-row>
			</b-container>
		</b-container>
		<b-container fluid class="px-4 pt-5 pt-0 pb-5 mb-5">
			<b-row class="pt-4 pt-0 pb-5 mb-5">
				<b-col class="text-left px-4 pt-md-0 pt-5 position-relative nav-aside" :class="{'hide-aside col-md-2' : conditionAside === 'hide', 'show-aside col-md-3' : conditionAside === 'show'}">
					<div class="line-horizon-toggle position-absolute h-100" style="top: 0px; right: 50px"></div>
					<div class="btn-toggle-horizon bg-white" @click="toggleAside()"><font-awesome-icon :icon="arrowToggle"></font-awesome-icon></div>
					<div v-for="menu in menus" :key="menu.id">
						<div class="list-header position-relative" @click="setMenu(menu.id)" :class="{'active' : menuActive == menu.id}" style="cursor: pointer">
							<img src="~@/assets/img/logo/logo.png" height="38px" alt="logo MOMN" class="d-inline-block">
							<h5 class="d-inline-block ml-2 viga position-relative" style="top: 3px">{{ menu.name }}</h5>
						</div>
						<ul style="list-style: none;" :class="{'d-none' : menuActive != menu.id}" class="px-0 my-3 list-item">
							<li class="mb-3" v-for="list in menu.features" :key="list.id" :class="{'active' : fiturActive == list.id}" @click="setFitur(list.id)">{{ list.name }}</li>
						</ul>
					</div>
				</b-col>
				<b-col :class="{'col-md-9' : conditionAside === 'show', 'col-md-10' : conditionAside === 'hide'}">
					<div class="w-100 px-3">
						<b-row>
							<b-col md="6" cols="6" class="text-left">
								<p class="mb-0">MOMN Wallet</p>
								<h3 class="viga">MOMN Gold</h3>
								<ol class="steps-fitur">
									<li class="active">Buka aplikasi MOMN dan Login</li>
									<li>Buka Menu Profile</li>
									<li>Click Verifikasi Akun Saya</li>
									<li>Foto e-KTP milik kamu</li>
									<li>Selfi di tempat terang, pastikan wajahmu terlihat jelas.</li>
									<li>Pastikan data kamu sesuai e-KTP & Submit</li>
									<li>Verifikasi MOMN Gold berhasil</li>
								</ol>
							</b-col>
							<b-col md="6" class="d-md-inline-block d-none position-relative">
								<img src="~@/assets/img/device/macbook.png" class="h-100 position-absolute" style="left: 0px" alt="">
							</b-col>
							<b-col cols="6" class="d-md-none d-inline-block position-relative">
								<img src="~@/assets/img/device/iphone.png" class="w-100 position-relative" style="left: 0px" alt="">
							</b-col>
							<b-col cols="12 my-4">
								<div class="w-100 rad p-3 bg-green">
									<b-row>
										<b-col sm="6" class="text-left">
											<h5 class="viga mb-0">Yuk jadi MOMN Gold dan Maksimalin keuntungan dengan MOMN</h5>
										</b-col>
										<b-col sm="6">
											<div class="text-right">
												<b-button class="btn btn-white px-5 rad shadow h-100"><font-awesome-icon icon="play-circle"></font-awesome-icon> Lihat Video</b-button>
											</div>
										</b-col>
									</b-row>
								</div>
							</b-col>
						</b-row>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<style lang="scss">
@import '~@/assets/css/style.scss';
@import '~@/assets/css/fitur.scss';
</style>

<script>
export default {
	data() {
		return {
			arrowToggle: 'angle-left',
			conditionAside: 'show',
			menuActive: 1,
			fiturActive: 1,
			menus: [
				{
					id: 1,
					name: 'MOMN Wallet',
					features: [
						{ name: 'MOMN Gold', id: 1, },
						{ name: 'Top Up', id: 2, },
						{ name: 'Kartu Bank', id: 3, },
						{ name: 'Tarik Saldo', id: 4, },
						{ name: 'Bayar', id: 5, },
					]
				}, 
				{
					id: 2,
					name: 'Transaksi MOMN',
					features: [
						{ name: 'Ke MOMN', id: 1, },
						{ name: 'Ke Bank', id: 2, },
						{ name: 'Ke Link', id: 3, },
						{ name: 'Minta MOMN', id: 4, },
						{ name: 'MOMN Kaget', id: 5, },
					]
				}
			]
		}
	},
	methods: {
		setMenu(id) {
			this.menuActive = id
		},
		setFitur(id) {
			this.fiturActive = id
		},
		toggleAside() {
			if(this.arrowToggle === 'angle-left') {
				this.conditionAside = 'hide'
				this.arrowToggle = 'angle-right'
			} else if(this.arrowToggle === 'angle-right') {
				this.conditionAside = 'show'
				this.arrowToggle = 'angle-left'
			}
		}
	}
}
</script>