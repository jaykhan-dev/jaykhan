<script>
export default {
    data: function () {
        return {
            name: 'Jay Khan'
        }
    },
}
</script>

<template>
<div class="lg:h-screen flex flex-col lg:justify-between">

    <div class="items-center">
        <div class="flex p-4 border-b border-black">
            <img src="../assets/white-jk-logo.png" width="120" height="50" alt="">
            <div class="m-4">
                <h1 class="text-4xl text-white text-sky-500 uppercase font-bold">{{name}}</h1>
                <p class="text-white text-sm">Music Producer</p>
            </div>
        </div>
        
        <div class="p-4">
                <div class="my-2 bg-gray-900 rounded-md p-4 text-white flex hover:border-l-8 hover:bg-green-800 hover:border-sky-500 items-center">
                    <i class="fas fa-id-badge mx-2"></i>
                    <p>Profile</p>
                </div>
                <div class="my-2 bg-gray-900 rounded-md p-4 text-white flex hover:border-l-8 hover:bg-green-800 hover:border-sky-500 items-center">
                    <i class="fas fa-layer-group mx-2"></i>
                    <p>Library</p>
                </div>
                <div class="my-2 bg-gray-900 rounded-md p-4 text-white flex hover:border-l-8 hover:bg-green-800 hover:border-sky-500 items-center">
                    <i class="fas fa-user-plus mx-2"></i>
                    <p>Collab</p>
                </div>
        </div>     
    </div>

    <div class="p-4">

            <div class="translate-y-2">
                <div class="my-2 bg-gray-900 rounded-md p-4 text-white flex hover:border-l-8 hover:bg-green-800 hover:border-sky-500 items-center">
                    <i class="fas fa-user-plus mx-2"></i>
                    <p>Contact</p>
                </div>
            </div>

    </div>

    
</div>
</template>