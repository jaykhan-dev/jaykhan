<template>
    <div class="p-4 w-full">
        <input 
            type="text" 
            name="" 
            id=""
            class="p-2 bg-gray-800 text-white text-center w-full rounded-lg border border-gray-700"
            placeholder="Search">
    </div>
    <div class="flex justify-center">
        <p class="text-sm p-2  text-white rounded-md border border-black hover:bg-green-500 mx-1"></p>
        <p class="text-sm p-2  text-white rounded-md border border-black hover:bg-green-500 mx-1"></p>            

    </div>
    <div>
        <h1 class="text-2xl font-bold uppercase text-white p-4">Tracks:</h1>
    </div>
    <div class="p-4">
        <div
            v-for="item in songs"
            :key='item.id'
            class="my-4 border border-gray-900 rounded-lg flex hover:bg-green-600">
            <router-link :to="/musicplayer/+ item.id" class="flex">
                <div class="bg-sky-500 grid place-items-center rounded-l-lg">
                    <i class="fas fa-volume-up text-white text-2xl p-4"></i>
                </div>
                <div>
                    <h1 class="text-white p-2 text-2xl font-bold">{{item.title}}</h1>
                    <div class="flex">
                        <p class="text-sm p-2 text-white mx-1">BPM: {{item.bpm}}</p>
                        <p class="text-sm p-2 text-white mx-1">KEY: {{item.song_key}}</p>
                    </div>                    
                </div>
            </router-link>            
        </div>            
    </div>

</template>

<script>
import axios from 'axios'
const API_ROOT = 'https://khanquest.herokuapp.com/api/v2/pages/'

export default {
    name: 'CatalogAPI',
    props: {
        msg: String
    },
    data: function () {
        return { songs: [] }        
    },
    mounted() {
        axios
        .get(API_ROOT + '?type=songs.SongPage&fields=title,song_file,song_key,song_image_thumbnail,bpm')
        .then(response => (this.songs = response.data.items))
        .catch(error => console.log(error))
    }    
}
</script>