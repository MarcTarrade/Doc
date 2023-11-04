<script>
    import { RouterLink } from 'vue-router';
    import SvgIcon from '../SvgIcon.vue';

    export default {
        props: {
            to: String,
            name: String,
            icon: String
        },
        components:{
            SvgIcon
        }
    }
</script>

<template>
    <div class="menu-item">
        <li>
            
            <RouterLink :to="to" class="menu-item-link">
                <SvgIcon :name="icon" class="menu-item-icon"/>
                <p class="menu-item-link-name">{{ name }}</p>
            </RouterLink>
        </li>
    </div>
</template>

<style scoped>
    .menu-item{
        display: flex;
        justify-content: center;
        padding: 20px 0;
    }
    .menu-item-link {
        display: flex;
        color: #FFFFFF;
        text-decoration: none;
    }
    .menu-item li{
        display: flex;
        font-size: 20px;
    }
    .menu-item-icon{
        height: 32px;
    }
    .menu-item-link-name{
        margin-left: 4px;
    }
</style>