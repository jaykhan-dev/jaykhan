<script>
export default {
    data: function () {
        return {
            song: { name: 'Ophelia', producer: 'Jay Khan', album: 'Blue', bpm: 91, duration: 2.45 }
        }
    },
    methods: {
        playSound (sound) {
            if(sound) {
            var audio = new Audio(sound)
            audio.play()
            }
        }
    }
}
</script>

<template>
    <div class="lg:h-screen">
        <div class="p-4 flex flex-col lg:justify-between" style="height: 100vh">
            
            <div class="text-white">
                <div class="border grid place-items-center border-gray-800 rounded-lg p-4 bg-gray-900">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="text-center">
                    <h1 class="text-white text-2xl font-bold">{{song.name}}</h1>
                    <p class="text-white">{{song.producer}}</p>
                </div>

                <div>
                    <div class="h-2 bg-white rounded-full w-full mt-8"></div>
                    <div class="flex justify-between">
                        <p>01:04</p>
                        <p>2 min remainining</p>
                        <p>2.45</p>
                    </div>
                </div>
                
                <div class="mt-10 flex justify-center">
                    <i class="fas fa-angle-double-left border border-gray-400 rounded-full p-2 h-1/2 m-2"></i>
                    <button @click.prevent=""
                    class="bg-green-600 rounded-full text-white p-4"
                    :class="playing ? 'Pause' : 'Play'">
                        <i class="fas fa-play hover:text-blue-900 duration-300 text-4xl p-2"></i>
                    </button>
                    <i class="fas fa-angle-double-right border border-gray-400 rounded-full p-2 h-1/2 m-2"></i>
                </div>
            </div>
            

            <div class="grid grid-cols-4 gap-2 text-white bg-gray-900 rounded-lg p-2">
                <button onclick="" class="">
                    <i class="fas fa-sliders-h hover:text-blue-900 duration-300 text-2xl p-2"></i>
                </button>
                <button onclick="" class="">
                    <i class="fas fa-volume-mute hover:text-blue-900 duration-300 text-2xl p-2"></i>
                </button>
                <button onclick="" class="">
                    <i class="fas fa-share-alt hover:text-blue-900 duration-300 text-2xl p-2"></i>
                </button>
                <button onclick="" class="">
                    <i class="fab fa-bitcoin hover:text-blue-900 duration-300 text-2xl p-2"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style>

</style>