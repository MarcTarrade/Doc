<script>
    import EstateItem from './EstateItem.vue';
    import SvgIcon from '../Media/SvgIcon.vue';

    export default {
        props: {
            estates: Array
        },
        components: {
            EstateItem,
            SvgIcon
        }
    }
</script>

<template>
    <div class="estate-list">
        <EstateItem v-for="estate in estates" :estate="estate"/>
        <div class="add-estate">
            <SvgIcon name="Add" class="add-icon" @click="addDocument"/>
        </div>
    </div>
</template>

<style>
    .estate-list{
        display: flex;
        flex-direction: row;
    }
    .add-estate{
        width: 250px;
        height: 250px;
        box-shadow: 0px 5px 10px 1px #14213D;
        border-radius: 10px;
        padding: 5px;
        background-color: #FFF;
        margin: 10px;
    }
    .add-icon{
        padding: 20%;
        cursor: pointer;
    }
</style>