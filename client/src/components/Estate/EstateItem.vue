<script>
    export default {
        props: {
            estate: Object
        }
    }
</script>

<template>
    <div class="estate-item">
        <div class="item-title">
            <h2>{{ this.estate.name }}</h2>
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
    }
</style>