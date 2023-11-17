<script>
    import SvgIcon from '../Media/SvgIcon.vue';

    export default {
        props: {
            user: Object
        },
        components:{
            SvgIcon
        }
    }
</script>

<template>
    <div class="profile-item">
        <div class="profile-img">
            <img v-if="user.image" :src="user.image" alt="">
            <SvgIcon v-else name="Default_user" class="profile-icon"/>
        </div>
        <div>
            <p class="profile-name">{{ user.name }}</p>
        </div>
    </div>
</template>

<style>
    .profile-item{
        cursor: pointer;
        padding: 0 10px;
        margin: 0 20px;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #14213D;
        border-radius: 10%;
    }
    .profile-img{
        width: 100px;
        height: 100px;
    }
    .profile-img img{
        width: 100%;
        height: 100%;
    }
    .profile-name{
        font-size: 24px;
    }
    .profile-icon{
        width: 100%;
        height: 100%;
        display: block;
    }
</style>