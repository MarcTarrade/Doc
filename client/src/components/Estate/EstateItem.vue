<script>
    import SvgIcon from '../Media/SvgIcon.vue';

    export default {
        props: {
            estate: Object
        },
        components: { 
            SvgIcon 
        }
    }
</script>

<template>
    <div class="estate-item">
        <div class="item-title">
            <h2>{{ this.estate.name }}</h2>
        </div>
        <div class="item-image">
            <img v-if="this.estate.image" :src="this.estate.image" alt="estate image">
            <SvgIcon v-else name="Default_image" class="item-icon"/>
        </div>
    </div>
</template>

<style> 
    .estate-item {
        width: 250px;
        height: 250px;
        box-shadow: 0px 5px 10px 1px #14213D;
        border-radius: 10px;
        padding: 5px;
        position: relative;
        background-color: #FFF;
        margin: 10px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }
    .item-title {
        height: 20%;
        color: #14213D;
    }
    .item-title h2 {
        font-size: 30px;
    }
    .item-image { 
        height: 80%;
        display: flex;
        justify-content: center;
    }
    .item-image img {
        margin-top: 10px;
        width: 100%;
    }
    .item-icon {
        height: 100%;
        color: #14213D;
    }
</style>