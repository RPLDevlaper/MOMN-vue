import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Career from '../views/Career.vue'
import Partner from '../views/Partner.vue'
import Promo from '../views/Promo.vue'
import PromoDetail from '../views/Detail/Promo.vue'
import Game from '../views/Game.vue'
import Transaction from '../views/Detail/Transaction.vue'
import VerifyGame from '../views/Detail/Verify.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Blog from '../views/Blog.vue'
import BlogDetail from '../views/Detail/Blog.vue'
import Fitur from '../views/Fitur.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import Payment from '../views/Dashboard/Payment.vue'
import Games from '../views/Dashboard/Games.vue'
import TransactionDashboard from '../views/Dashboard/Transaction.vue'
import Group from '../views/Dashboard/Group.vue'
import Profile from '../views/Dashboard/Profile.vue'
import Bisnis from '../views/Dashboard/Bisnis.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {type: 'General'},
  },
  {
    path: '/career',
    name: 'Career',
    component: Career,
    props: {type: 'General'},
  },
  {
    path: '/partner',
    name: 'Partner',
    component: Partner,
    props: {type: 'General'},
  },
  {
    path: '/promo',
    name: 'Promo',
    component: Promo,
    props: {type: 'General'},
  },
  {
    path: '/promo/:id',
    name: 'PromoDetail',
    component: PromoDetail,
    props: {type: 'General'},
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    props: {type: 'General'},
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    props: {type: 'General'},
  },
  {
    path: '/fitur',
    name: 'Fitur',
    component: Fitur,
    props: {type: 'General'},
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    props: {type: 'General'},
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail,
    props: {type: 'General'},
  },
  {
    path: '/game/transaction',
    name: 'Transaction',
    component: Transaction,
    props: {type: 'General'},
  },
  {
    path: '/game/verify',
    name: 'VerifyGame',
    component: VerifyGame,
    props: {type: 'General'},
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    props: {type: 'General'},
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    props: {type: 'Dashboard'},
  },
  {
    path: '/dashboard/payment',
    name: 'Pembayaran',
    component: Payment,
    props: {type: 'Dashboard'}
  },
  {
    path: '/dashboard/games',
    name: 'Games',
    component: Games,
    props: {type: 'Dashboard'}
  },
  {
    path: '/dashboard/transaction',
    name: 'Transaksi',
    component: TransactionDashboard,
    props: {type: 'Dashboard'}
  },
  {
    path: '/dashboard/group',
    name: 'Group',
    component: Group,
    props: {type: 'Dashboard'}
  },
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: Profile,
    props: {type: 'Dashboard'}
  },
  {
    path: '/dashboard/bisnis',
    name: 'Bisnis',
    component: Bisnis,
    props: {type: 'Dashboard'}
  },
  {
    path: '/auth/:provider/callback',
    component: {
      template: '<div class="auth-component"></div>'
    }
  },
  {
    path: '/forgot/password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    props: {type: 'General'}
  },
  {
    path: '/reset/:token/password',
    name: 'ResetPassword',
    component: ResetPassword,
    props: {type: 'General'}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active-nav",
})

export default router
