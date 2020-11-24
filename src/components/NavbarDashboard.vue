<template>
  <div class="w-100 px-lg-0 px-lg-5 px-3">
    <b-row class="p-3">
      <b-col cols="6" class="text-left">
        <p>{{ title }}</p> 
      </b-col>
      <b-col cols="6" class="text-right">
        <div class="d-inline-block profile-button position-relative" style="cursor: pointer" @click="moveProfile('Profile')">
          <img :src="`${web}images/avatar/${user.avatar}`" style="object-fit: cover !important" class="w-100 h-100" alt="avatar user">
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      title: this.$route.name,
    }
  },
  computed: {
    ...mapGetters({
      user: 'Auth/getUser',
      web: 'Api/getWeb'
    })
  },
  methods: {
    moveProfile(page) {
      this.$router.push({name: page})
    }
  }
}
</script>