<template>
  <header-component />
    <h1>Update Restaurant Page</h1>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
export default {
  name:'UpdateRestaurant',
  components:{
    HeaderComponent
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user)
    {
      this.$router.push({name:'SignUp'})
    }
  },
}
</script>