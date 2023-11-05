<script>
    import { RouterLink } from 'vue-router';
    import SvgIcon from '../SvgIcon.vue';

    export default {
        props: {
            to: String,
            name: String,
            icon: String,
            select: Boolean
        },
        components:{
            SvgIcon
        }
    }
</script>

<template>
    <li class="menu-item">
        <RouterLink :to="to" class="menu-item-link" :class="{ active: select }">
            <SvgIcon :name="icon" class="menu-item-icon"/>
            <p class="menu-item-link-name">{{ name }}</p>
        </RouterLink>
    </li>
</template>

<style scoped>
    .menu-item-link {
        display: flex;
        color: #FFFFFF;
        text-decoration: none;
        transition: 0.5s;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px 0;
    }
    .menu-item {
        width: 100%;
        font-size: 20px;
    }
    .menu-item-icon{
        height: 32px;
    }
    .menu-item-link-name{
        margin-left: 4px;
    }
    .menu-item-link:hover .menu-item-icon, .menu-item-link:hover .menu-item-link-name{
        color: #FCA311;
        transition: 0.5s;
    }
    .menu-item-icon, .menu-item-link p{
        transition: 0.5s;
    }
    .active .menu-item-link-name, .active .menu-item-icon{
        color: #FCA311;
    }
</style>