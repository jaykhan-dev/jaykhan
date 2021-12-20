<template>
    <div class="lg:h-screen">
        <div class="p-4 flex flex-col lg:justify-between" style="height: 100vh">
            
            <div class="text-white">
                <div class="border grid place-items-center border-gray-800 rounded-lg p-4">
                    <img
                        v-if="item.song_image_thumbnail" 
                        :src="item.song_image_thumbnail.url" 
                        alt="" 
                        width="200" 
                        height="200">
                </div>
                <div class="text-center">
                    <h1 class="text-white text-2xl font-bold">{{item.title}}</h1>
                    <p class="text-white"></p>
                </div>

                                
                <div class="mt-10 flex justify-center">
                    <audio :id="item.id" v-if="item.song_file" controls>
                        <source :src="item.song_file"> 
                    </audio>
                </div>
            </div>
            

            <div class="grid grid-cols-4 gap-2 text-white bg-gray-900 rounded-lg p-2">
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const API_ROOT = 'https://khanquest.herokuapp.com/api/v2/pages/'

export default {
  name: 'Musicplayer',
  props: {
    msg: String
  },
  data: function () {
    return { item: [] }
  },
  methods: {
    getSongs() {
        axios
        .get(API_ROOT + this.$route.params.id + '/')
        .then((response) => (this.item = response.data))
        }
    },
  mounted() {
    this.getSongs();
    },
  watch: {
        '$route' (to, from) {
          this.getSongs();
        }
    }

}
</script>

<style>

</style>