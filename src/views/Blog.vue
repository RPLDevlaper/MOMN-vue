<template>
	<div>
		<b-container fluid class="px-0 pt-5">
			<b-carousel
				id="blog-carousel"
				:interval="15000"
				controls
				indicators
				fade
				background="#ababab"
				img-width="1024"
				img-height="480"
				style="text-shadow: 1px 1px 2px #333">
				<b-carousel-slide
					v-for="blog in blogSlider" :key="blog.id"
					:img-src="`${web}images/blog/${blog.banner}`">
					<div class="overlay-black">
						<img src="~@/assets/img/pattern/pattern.png" class="pattern-carousel" alt="pattern">
					</div>
					<div class="caption w-100">
							<b-container class="text-left">
								<b-row>
									<b-col md="6" offset-md="6" cols="10" offset="1">
										<h2 class="viga mb-3">{{ blog.title }}</h2>
										<p class="mb-2 mb-md-5 mb-4">
											{{ blog.description.length > 125 ? blog.description.substring(0, 125)+'...' : blog.description }}
										</p>
										<b-button @click="moveDetail(blog.id)" class="btn btn-green-primary px-5 py-3 shadow-primary">Selengkapnya <img src="~@/assets/img/icon/next.png" width="10px" class="d-inline-block" alt="next"></b-button>
									</b-col>
								</b-row>
							</b-container>
					</div>
				</b-carousel-slide>
			</b-carousel>
		</b-container>
		<b-container fluid class="pb-5 px-5 pt-5 mb-5 text-left position-relative overflow-hidden">
			<img src="~@/assets/img/pattern/pattern.png" class="pattern-blog-top-right" alt="pattern">
			<b-row class="px-md-5 px-2 mb-md-0 mb-5">
				<b-col md="3" class="position-relative">
					<div class="formBlog rad my-3 text-left">
						<b-form-input @keyup="eventSearch(formSearch.title, formSearch.category, formSearch.categoryName, formSearch.tags, formSearch.tagsName)" class="border-0 rad position-absolute w-100 h-100 pl-4" style="left: 0px; top: 0px" v-model="formSearch.title" placeholder="Cari berita"></b-form-input>
						<b-button @click="clickSearch()" class="btn-conditional btn btn-green-primary rad"><font-awesome-icon :icon="iconSearch"></font-awesome-icon></b-button>
					</div>
					<h4 class="viga mt-4">Category</h4>
					<div class="formBlog rad my-3 text-left">
						<p class="pt-3 px-4">{{ formSearch.category == '' ? 'Semua category' : formSearch.categoryName }}</p>	
						<b-button @click="dropDown()" class="btn-conditional btn btn-green-primary rad"><font-awesome-icon :icon="iconDropDown"></font-awesome-icon></b-button>
						<div :class="{'dropdown-hide' : dropdownActive === false, 'dropdown-show' : dropdownActive === true}" class="dropdown-category position-absolute">
							<div id="category-all" @click="eventSearch(formSearch.title, '', '', '', '')">
								<div :class="{'bg-green-white' : formSearch.category === ''}" class="w-100 py-3 px-4 border-bottom category-item">
									Semua Category
								</div>
							</div>
							<div v-for="category in categories" :key="category.id" :id="`category-${category.id}`" @click="eventSearch(formSearch.title ,category.id, category.name, '', '')">
								<div :class="{'bg-green-white' : formSearch.category === category.id}" class="w-100 py-3 px-4 border-bottom category-item">
									{{ category.name }}
								</div>
							</div>
						</div>
					</div>
					<h4 class="viga mt-4">Tags</h4>
					<div class="w-100">
						<b-row>
							<b-col v-for="tag in tagsBlog" :key="tag.id" cols="6" class="my-2 px-2">
								<b-button @click="eventSearch('', '', '', tag.id, tag.name)" class="w-100 py-2 rad" :class="{'btn-green-primary' : formSearch.tags == tag.id, 'btn-green-white' : formSearch.tags != tag.id}">{{ tag.name }}</b-button>
							</b-col>
						</b-row>
					</div>
					<h4 class="viga mt-4">Popular Blogs</h4>
					<div v-for="blog in popularsBlog" :key="blog.id" @click="moveDetail(blog.id)" class="w-100 border-green popular-blog mb-2 py-2 px-4 rad">
						<p class="mb-0">{{ blog.title }}</p>
					</div>
				</b-col>
				<b-col md="9" class="px-md-5 px-0" v-if="blogsMain.length > 0">
					<div class="position-relative tags-active d-inline-block py-3 pl-3 pr-5 mb-3 rad bg-green viga" v-if="formSearch.tags != ''">
						<span class="pr-3">{{ formSearch.tagsName }}</span>
						<div class="closable" @click="eventSearch('', '', '', '', '')"><font-awesome-icon icon="times"></font-awesome-icon></div>
					</div>
					<div v-for="blog in blogsMain" :key="blog.id" class="w-100 card-blog mb-4 border rad">
						<b-row>
							<b-col cols="12" class="d-md-none d-inline-block position-relative">
								<div class="w-100 img-md-blog position-relative" :style="`background-image: url('${web}images/blog/thumbnail/${blog.banner}')`">
									<div class="overlay-green-top" style="z-index: 100"></div>
								</div>
							</b-col>
							<b-col md="7">
								<div class="w-100 px-3 py-3">
									<p>{{ blog.category.name }}</p>
									<h4 class="viga mText-primary">{{ blog.title }}</h4>
									<div class="line-card"></div>
									<p class="mt-4" style="font-size: .8rem">{{ blog.description.length > 125 ? blog.description.substring(0, 125)+'...' : blog.description }}</p>
									<hr>
									<div class="w-100">
										<b-row>
											<b-col cols="6" class="px-0">
												<p class="pl-3 py-2" style="font-size: .8rem">{{ blog.created_at }}</p>
											</b-col>
											<b-col cols="6" class="px-0 text-right">
												<b-button @click="moveDetail(blog.id)" class="btn btn-green-primary py-3 px-5 btn-blog-detail">Selengkapnya <img src="~@/assets/img/icon/next.png" width="8px" class="d-inline-block" alt="next"></b-button>
											</b-col>
										</b-row>
									</div>
								</div>
							</b-col>
							<b-col md="5" class="position-relative img-blogs d-md-inline-block d-none">
								<div :style="`background-image: url('${web}images/blog/thumbnail/${blog.banner}')`" class="img-parent-blog"></div>
								<div class="overlay-green-right"></div>
							</b-col>
						</b-row>
					</div>
					<div class="text-right">
						<sliding-pagination
							:current="currentPage"
							:class="{'d-none' : displayPaginate == 'hide'}"
							:total="totalPages"
							@page-change="getBlogs"
						></sliding-pagination>
					</div>
				</b-col>
				<b-col md="9" class="px-md-5 px-0 py-5" v-if="blogsMain.length <= 0">
					<h1>Not Found</h1>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<style lang="scss">
@import '~@/assets/css/blog.scss';
@import '~@/assets/css/style.scss';
</style>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			formSearch: {
				title: '',
				category: '',
				tagsName: '',
				tags: '',
				categoryName: '',
			},
			popularsBlog: {},
			blogSlider: {},
			dropdownActive: false,
			category: '',
			iconSearch: 'search',
			displayPaginate: 'show',
			currentPage: 1,
			totalPages: 10,
			categories: {},
			tagsBlog: {},
			blogsMain: {},
			iconDropDown: 'caret-down'
		}
	},
	computed: {
		...mapGetters({
			api: 'Api/getApi',
			web: 'Api/getWeb'
		})
	},
	mounted() {
		this.getTagsBlog()
		this.getCategory()
		this.getSliderBlog()
		this.getBlogs(1)
		this.getPopularBlog()
	},
	methods: {
		getBlogs(page) {
			if(this.formSearch.title != '' || this.formSearch.category != '') {
				this.$http.post(`${this.api}blog/q/paginate/4?page=${page}`, {
					title: this.formSearch.title,
					category: this.formSearch.category
				})
				.then((response) => {
					this.currentPage = page
					this.blogsMain = response.data.data.data
					this.totalPages = response.data.data.last_page
					this.dropdownActive = false
				})
			} else if(this.formSearch.tags != '') {
				this.$http.post(`${this.api}blog/q/paginate/4?page=${page}`, {
					tags: this.formSearch.tags,
				})
				.then((response) => {
					this.currentPage = page
					this.blogsMain = response.data.data.data
					this.totalPages = response.data.data.last_page
					this.dropdownActive = false
				})
			} else {
				this.$http.get(`${this.api}blog/paginate/4?page=${page}`)
				.then((response) => {
					this.currentPage = page
					this.blogsMain = response.data.data.data
					this.totalPages = response.data.data.last_page
					this.dropdownActive = false
				})
			}
		},
		clickSearch() {
			this.dropdownActive = false
			if(this.iconSearch === 'redo') {
				this.formSearch.title = ''
				this.eventSearch(this.formSearch.title, this.formSearch.category, this.formSearch.categoryName, this.formSearch.tags, this.formSearch.tagsName)
			}
		},
		getSliderBlog() {
			this.$http.get(`${this.api}blog/paginate/3`)
			.then((response) => {
				this.blogSlider = response.data.data.data
			})
		},
		eventSearch(mTitle, mCategory, mCategoryName, mTags, tagName) {
			this.formSearch.category = mCategory
			this.formSearch.categoryName = mCategoryName
			this.formSearch.title = mTitle
			if(this.formSearch.title.length >= 3) {
				this.iconSearch = 'redo'
			} else {
				this.iconSearch = 'search'
			}
			this.formSearch.tags = mTags
			this.formSearch.tagsName = tagName
			this.getBlogs(1)
		},
		getPopularBlog() {
			this.$http.get(`${this.api}blog/most/popular`)
			.then((response) => {
				this.popularsBlog = response.data.data.data
			})
		},
		getTagsBlog() {
			this.$http.get(`${this.api}tags/blog/paginate/6`)
			.then((response) => {
				this.tagsBlog = response.data.data.data
			})
		},
		moveDetail(idBlog) {
			localStorage.setItem('blogId', idBlog)
			this.$router.push({name: "BlogDetail", params: {id: idBlog}})
		},
		getCategory() {
			this.$http.get(`${this.api}category/blog`)
			.then((response) => {
				this.categories = response.data.data
			})
		},
		dropDown() {
			if(this.dropdownActive === true) {
				this.dropdownActive = false
				this.iconDropDown = 'caret-down'
			} else {
				this.dropdownActive = true
				this.iconDropDown = 'caret-up'
			}
		}
	}
}
</script>