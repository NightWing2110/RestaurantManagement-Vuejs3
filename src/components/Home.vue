<template>
  <header-component />
    <h1>Welcome User to Home Page</h1>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Home',
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