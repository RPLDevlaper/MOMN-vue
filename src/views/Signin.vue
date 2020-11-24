<template>
	<div>
		<div class="toggle-manually d-lg-none" :class="{'d-none' : loginConditional == 'manual', 'd-inline-block' : loginConditional != 'manual'}" @click="changeSignin('manual')">
			<font-awesome-icon icon="keyboard"></font-awesome-icon>
		</div>
		<div class="toggle-qr d-lg-none" :class="{'d-none' : loginConditional == 'QR', 'd-inline-block' : loginConditional != 'QR'}" @click="changeSignin('QR')">
			<font-awesome-icon icon="qrcode"></font-awesome-icon>
		</div>
		<b-container fluid class="position-relative overflow-hidden">
			<b-row>
				<div :class="{'col-md-4 col-1' : loginConditional == 'QR', 'col-md-8 col-11' : loginConditional == 'manual'}" class="loginManual position-relative overflow-hidden">
					<img src="~@/assets/img/pattern/pattern.png" class="position-absolute" style="width: 400px; left: -200px; top: -100px; opacity: 0.1; transform: rotate(45deg)" alt="">
					<div class="w-100 position-absolute text-center" style="left: 0; bottom: 20px" :class="{'loginHide' : loginConditional != 'manual'}">
						<p class="mText-gray mb-1" style="font-size: .85rem">
							<b-link class="mText-primary" :to="{name: 'ForgotPassword'}">Anda Lupa Password ?</b-link> <br> Atau masuk dengan</p>
						<div>
							<p>
								<font-awesome-icon @click="socialAuth('google')" class="mx-3 icon-login" :icon="['fab', 'google']"></font-awesome-icon>
								<font-awesome-icon @click="socialAuth('facebook')" class="mx-3 icon-login" :icon="['fab', 'facebook']"></font-awesome-icon>
							</p>
						</div>
						<p><span class="mText-gray">Belum punya akun ?</span> <b-link class="mText-dark" :to="{name: 'Signup'}">Daftar</b-link></p>
					</div>
					<div class="content-login position-relative w-100" :class="{'loginHide' : loginConditional != 'manual'}">
						<b-row>
							<div :class="{'col-md-10 offset-md-1 col-10 offset-1' : loginConditional != 'manual', 'col-lg-6 offset-lg-3 col-8 offset-2' : loginConditional == 'manual'}">
								<div class="py-5 mt-4">
									<img src="~@/assets/img/logo/logo.png" width="70px" alt="logo">
									<h3 class="viga mText-primary mb-5">MOMN SIGNIN</h3>
									<b-form-input @focus="changeSignin('manual')" class="inputLogin py-4 px-4 my-3" v-model="formLogin.email" placeholder="Your Email Here"></b-form-input>
									<div class="w-100 my-3">
										<b-row>
											<b-col cols="9">
												<b-form-input @focus="changeSignin('manual')" class="inputLogin py-4 px-4" v-model="formLogin.password" :type="typePassword" placeholder="Password"></b-form-input>
											</b-col>
											<b-col cols="3">
												<b-button class="btn w-100 h-100 btn-toggle-show" @click="togglePassword()" :class="{'btn-green-primary shadow-primary' : eyePassword == 'eye', 'btn-white' : eyePassword == 'eye-slash'}"><font-awesome-icon :icon="['fas', eyePassword]"></font-awesome-icon></b-button>
											</b-col>
										</b-row>
									</div>
									<div class="w-100 mb-3 mt-4">
										<b-row>
											<b-col cols="6" class="text-left">
												<b-form-checkbox id="cookie" v-model="cookie" name="cookie" value="on" unchecked-value="off">
													Remember Me ?
												</b-form-checkbox>
											</b-col>
											<b-col cols="6" class="text-right">
												<b-button class="btn-green-primary shadow-primary w-100 py-3" @click="onLogin()">Masuk <font-awesome-icon icon="caret-right"></font-awesome-icon></b-button>
											</b-col>
										</b-row>
									</div>
								</div>
							</div>
						</b-row>						
					</div>
				</div>
				<div :class="{'col-md-4 col-1' : loginConditional == 'manual', 'col-md-8 col-11' : loginConditional == 'QR'}" class="loginQR overflow-hidden">
					<img src="~@/assets/img/pattern/pattern-white.png" class="position-absolute" style="width: 400px; right: -100px; bottom: -200px; opacity: 0.4; transform: rotate(45deg)" alt="">
					<div class="content-login py-4 px-5" :class="{'loginHide' : loginConditional != 'QR'}">			
						<b-row>
							<div :class="{'col-lg-6 offset-lg-3 col-10 offset-1' : loginConditional == 'QR', 'col-lg-12 offset-md-0' : loginConditional != 'QR' }">
								<div class="card border-0 rad shadow-sm w-100 py-5 my-4 bg-white text-center" @click="changeSignin('QR')">
									<img src="~@/assets/img/logo/logo.png" class="d-inline-block mx-auto" width="50px" alt="logo">
									<h4 class="viga mText-primary mb-3 d-inline-block">MOMN</h4>
									<qrcode :value="qrCodeToken" :options="{width: 200}" style="width: 250px !important; height: 250px !important" class="d-inline-block mx-auto"></qrcode>
									<div class="px-3">
										<h5 class="viga mt-3">Scan QR Code ini dengan Aplikasi MOMN di Hpmu</h5>
										<p style="font-size: .75rem">Semua terhubung jadi lebih mudah untuk bertransaksi dengan kami</p>
									</div>
								</div>
							</div>
						</b-row>
					</div>
				</div>
			</b-row>
		</b-container>
	</div>
</template>

<style lang="scss">
@import '@/assets/css/signin.scss';
@import '@/assets/css/style.scss';
</style>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Loading from 'vue-content-loading'
export default {
	data() {
		return {
			formLogin: {
				email: '',
				password: '',
			},
			qrCodeToken: 'SideScript-',
			loginConditional: 'manual',
			eyePassword: 'eye-slash',
			typePassword: 'password',
			cookie: 'off',
		}
	},
	computed: {
		...mapGetters({
			api: "Api/getApi",
			web: "Api/getWeb",
			isAuth: 'Auth/isAuth',
		})
	},
	created() {
		if(this.isAuth) {
			this.$router.push({name: 'Dashboard'})
		}
		let qrCode = this.stringRandom(10);
		this.qrCodeToken = qrCode
	},
	methods: {
		socialAuth(provider) {
			var self = this
			this.$auth.authenticate(provider).then((response) => {
				self.socialLogin(provider, response)
			}).catch((err) => {
				console.log({err: err})
			})
		},
		socialLogin(provider, response) {
			this.$http.post(`${this.api}socialLogin/`+ provider,response).then((response) => {
				console.log(response.data)
			}).catch((err) => {
				console.log({err: err})
			})
		},
		togglePassword() {
			if(this.typePassword == 'text') {
				this.typePassword = 'password'
				this.eyePassword = 'eye-slash'
			} else if(this.typePassword == 'password') {
				this.typePassword = 'text'
				this.eyePassword = 'eye'
			}
		},
		stringRandom(value) {
			let text = " "
    	let chars = "abcdefghijklmnopqrstuvwxyz"
      for( let i=0; i <= value; i++ ) {
				text += chars.charAt(Math.floor(Math.random() * chars.length))
      }
			return 'SideScript-'+text
		},
		changeSignin(value) {
			this.loginConditional = value
		},
		...mapMutations("Auth", ["set_user", "set_token"]),
		onLogin() {
			if(this.formLogin.email != '' && this.formLogin.password != '') {
				this.$http.post(`${this.api}signin`, {
					email: this.formLogin.email,
					password: this.formLogin.password
				}).then((response) => {
          console.log(response)
					if(response.data.data != null) {
						localStorage.setItem('api_token', response.data.data[1])
						this.set_user(response.data.data[0])
						this.set_token(response.data.data[1])
						alert('Berhasil masuk')
						window.location.reload()
					}
				})
			} else {
				alert('Masukkan email dan password !')
			}
		}
	},
}
</script>