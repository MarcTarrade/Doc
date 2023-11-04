<script>
import { RouterView } from 'vue-router'
import CustomMenu from './components/Menu/CustomMenu.vue';

export default {
    components: {
        CustomMenu
    }
}
</script>

<template>
    <div class="wrapper">
        <CustomMenu />
    </div>

  <RouterView />
</template>

<style scoped>
    .wrapper {
        display: flex;
        height: 100%;
    }
</style>
