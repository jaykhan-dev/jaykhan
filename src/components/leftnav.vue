<template>
<div class="lg:h-screen flex flex-col lg:justify-between z-10">

    <div class="items-center">
        <div class="p-4 border-b border-black justify-center">
            <img src="../assets/white-jk-logo.png" width="200" height="200" alt="">
            <div class="m-4">
                <h1 class="text-4xl text-white text-sky-500 uppercase font-bold">{{name}}</h1>
                <p class="text-white text-sm">{{role}}</p>
            </div>
        </div>
        
        <div class="p-4">
            <router-link to="/">
                <div class="my-2 bg-gray-900 rounded-md p-4 text-white flex hover:border-l-8 hover:bg-green-800 hover:border-sky-500 items-center">
                    <i class="fas fa-id-badge mx-2"></i>
                    <p>Profile</p>
                </div>
            </router-link>

            <router-link to="/catalog">
                <div class="my-2 bg-gray-900 rounded-md p-4 text-white flex hover:border-l-8 hover:bg-green-800 hover:border-sky-500 items-center">
                    <i class="fas fa-layer-group mx-2"></i>
                    <p>Catalog</p>
                </div>
            </router-link>

            <router-link to="/collab">
                <div class="my-2 bg-gray-900 rounded-md p-4 text-white flex hover:border-l-8 hover:bg-green-800 hover:border-sky-500 items-center">
                    <i class="fas fa-user-plus mx-2"></i>
                    <p>Collab</p>
                </div>
            </router-link>
                
        </div>     
    </div>
    <div class="p-4">
            <router-link to="/contact">
                <div class="translate-y-2">
                    <div class="my-2 bg-gray-900 rounded-md p-4 text-white flex hover:border-l-8 hover:bg-green-800 hover:border-sky-500 items-center">
                        <i class="fas fa-user-plus mx-2"></i>
                        <p>Contact</p>
                    </div>
            </div>    
            </router-link>
            
    </div>    
</div>
</template>

<script>
export default {
    data: function () {
        return {
            name: 'Jay Khan',
            role: 'Music Producer'
        }
    },
}
</script>