<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
//import userList from "./components/userList.vue";
</script>

<template>
  <div>
    <!-- <userList></userList> -->
    <RouterLink :to="{name:'tasks'}">Tasks</RouterLink> | 
    <RouterLink :to="{name:'stats'}">Stats</RouterLink>
    <RouterView></RouterView>
    
    </div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class=" vue logo" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 30ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
