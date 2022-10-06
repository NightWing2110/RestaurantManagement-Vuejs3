<template>
  <header-component />
    <h1>Add Restaurant Page</h1>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
export default {
  name:'AddRestaurant',
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