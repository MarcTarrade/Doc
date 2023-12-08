<script>
    import SvgIcon from '../Media/SvgIcon.vue';
    import ModalProfile from './ModalProfile.vue';

    export default {
        data(){
            return {
                displayMore: false,
                isModalShown: false
            }
        },
        props: {
            user: Object,
            deleteUser: Function
        },
        components:{
            SvgIcon,
            ModalProfile
        },
        methods: {
            showModal(){
                this.isModalShown = !this.isModalShown
            }
        },
        emits: ['click']
    }
</script>

<template>
    <div class="profile-item" @click="this.$emit('click', null)">
        <div class="more-container" @click.stop>
            <button class="more-button" @click="this.displayMore = !this.displayMore">
                <SvgIcon name="More_vert" class="more-icon"/>
            </button>
            <div class="more" v-if="displayMore">
                <button class="delete" @click="deleteUser(user)">Supprimer</button>
                <button class="update" @click="showModal">Modifier l'image</button>
            </div>
        </div>
        <div class="profile-img">
            <img v-if="user.image" :src="user.image" alt="">
            <SvgIcon v-else name="Default_user" class="profile-icon"/>
        </div>
        <div>
            <input @click.stop class="profile-name" v-model="user.name"/>
        </div>
    </div>
    <ModalProfile v-if="isModalShown" :showModal="showModal" @image="user.image = $event"/>
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
        position: relative;
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
        text-align: center;
        width: 100px;
        font-size: 24px;
    }
    .profile-icon{
        width: 100%;
        height: 100%;
        display: block;
    }
    .more-container{
        position: absolute;
        right: 0;
        height: 20%;
        cursor: default;
    }
    .more-button{
        border: 0;
        background-color: unset;
        height: 30px;
        opacity: 0;
        transition: 0.1s;
        padding: 0;
        cursor: pointer;
    }
    .more-icon{
        width: 30px;
        height: 30px;
    }
    .profile-item:hover .more-button{
        opacity: 1;
    }
    .more{
        width: 100px;
        height: 100px;
        background-color: white;
        box-shadow: 0px 1px 5px 1px #000000;
        position: absolute;
        left: 30px;
        top: 0;
        z-index: 3;
    }
    .delete, .update{
        width: 80%;
        cursor: pointer;
    }
</style>