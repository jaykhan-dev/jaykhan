<script>
export default {
    data: function () {
        return {
            song: { name: 'Ophelia', producer: 'Jay Khan', album: 'Blue', bpm: 91, duration: 2.45 }
        }
    }
}
</script>

<template>
    <div class="">
        <div class="p-4 w-full">
            <input 
                type="text" 
                name="" 
                id=""
                class="p-2 bg-gray-800 text-center w-full rounded-lg border border-gray-700"
                placeholder="Search">
        </div>
        <div class="flex justify-center">
            <p class="text-sm p-2  text-white rounded-md border border-black hover:bg-green-500 mx-1">{{song.producer}}</p>
            <p class="text-sm p-2  text-white rounded-md border border-black hover:bg-green-500 mx-1">{{song.album}}</p>            

        </div>
        <div>
            <h1 class="text-2xl font-bold uppercase text-white p-4">Tracks:</h1>
        </div>
        <div class="p-4">
            <div class="my-4 border border-gray-900 rounded-lg flex hover:bg-green-600">
                <div class="bg-sky-500 grid place-items-center rounded-l-lg">
                    <i class="fas fa-volume-up text-white text-2xl p-4"></i>
                </div>
                <div>
                    <h1 class="text-white p-2 text-2xl font-bold">{{song.name}}</h1>
                    <div class="flex">
                        <p class="text-sm p-2 text-white mx-1">BPM: {{song.bpm}}</p>
                        <p class="text-sm p-2 text-white mx-1">DURATION: {{song.duration}}</p>
                    </div>
                    
                </div>
            </div>

            
        </div>
    </div>
</template>