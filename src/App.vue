<script>
import Leftnav from './components/leftnav.vue'
import Mainsection from './components/mainsection.vue'
import Rightsection from './components/rightsection.vue'
export default {
  components: {
    Leftnav,
    Mainsection,
    Rightsection
  }
}
</script>

<template>
<div class="grid lg:grid-cols-8 sm:grid-cols-1 lg:h-screen">
  <div class="lg:col-span-2 bg-gray-800">    
    <Leftnav />
  </div>
  <div class="lg:col-span-4 bg-gray-800 border-r-2 border-l-2 border-black">
    
    <Mainsection />
  </div>
  <div class="lg:col-span-2 bg-gray-800">
    <Rightsection />
  </div>
</div>

</template>

<style>

</style>
