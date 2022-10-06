<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add-restaurant">Add Restaurant</router-link>
    <router-link to="update-restaurant">Update Restaurant</router-link>
    <a v-on:click="logout" href="#">LogOut</a>
  </div>
</template>
<script>
export default {
  name:'HeaderComponent',
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({name:'Loggin'})
    }
  },
}
</script>
<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: center;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover{
  background: #ddd;
  color:#333;
}
</style>