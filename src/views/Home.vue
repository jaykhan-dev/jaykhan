<template>
<div class="text-white h-screen" id="home-bg">
    <h1 class="text-8xl font-bold my-8">Profile</h1>
        <Profile />

    
</div>
</template>

<script>
import Profile from '../components/Profile.vue'
export default {
    name: 'Home',
    components: {
        Profile
    }
}
</script>

<style>

</style>