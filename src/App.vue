<template>
<div class="grid grid-cols-3 bg-gray-900">
  <div>
      <Leftnav class="fixed left-0 bg-black" />
  </div>
  <div class="w-full bg-gray-900">
      <router-view></router-view>
  </div>
  <div class="fixed right-0 bg-black">
    <Musicplayer />
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
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;700&display=swap');
* {
  font-family: 'Outfit', sans-serif;
}
</style>
