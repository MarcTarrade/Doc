<script setup>
import SvgIcon from '../components/Media/SvgIcon.vue';

</script>

<template>
  <main>
    <div class="home-container">
        <SvgIcon name="Home" class="home-icon"/>
    </div>
  </main>
</template>

<style scoped>
    
    .home-container{
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .home-icon{
        width: 400px;
        color: #d1d1d1;
    }
</style>