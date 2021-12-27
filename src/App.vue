<template>
<div class="grid grid-cols-1 bg-gray-900">

  <button class="fixed bottom-5 right-5 p-4 border border-white z-20 bg-black block cursor-pointer text-white" 
          type="button" 
          @click="toggleNavbar()">
        Menu 
  </button>

  <div class="">
      <Leftnav class="absolute bg-black w-full" :class="{'hidden': !showMenu, 'flex': showMenu}" />
  </div>

  <div class="w-full flex justify-center bg-gray-900">
      <router-view></router-view>
  </div>
 
</div>
</template>

<script>
import Leftnav from './components/leftnav.vue'
import Musicplayer from './components/musicplayer.vue'
export default {
  name: 'app',
  components: {
    Leftnav,
    Musicplayer
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;700&display=swap');
* {
  font-family: 'Outfit', sans-serif;
}
</style>
