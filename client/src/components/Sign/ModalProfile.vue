<script>
    import SvgIcon from '../Media/SvgIcon.vue';

    export default {
        data() {
            return {
                images: ['bunny.jpg', 'duck.jpeg', 'goat.jpg', 'horse.jpg', 'turtle.jpg']
            }
        },
        props: {
            showModal: Function    
        },
        components: {
            SvgIcon
        },
        methods: {
            selectImage(image) {
                this.$emit('image', 'src/assets/profile_icon/' + image);
                this.showModal();
            }
        },
        emits: ['image']
    }
</script>

<template>
    <div class="profile-modal">
        <div class="background" @click="showModal"></div>
        <div class="profile-modal-content">
            <div class="modal-menu">
                <div class="modal-close">
                    <button class="close-button" @click="showModal">
                        <SvgIcon name="Close" class="close-icon"/>
                    </button>
                </div>
            </div>
            <div class="modal-profile-container">
                <div class="image" v-for="image in images" @click="selectImage(image)">
                    <img class="icon-image" :src="`src/assets/profile_icon/${image}`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .profile-modal{
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 90;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .background{
        background-color: rgb(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 98;
    }
    .profile-modal-content{
        width: 60%;
        height: 70%;
        background-color: white;
        z-index: 99;
        position: relative;
    }
    .modal-menu{
        width: 100%;
        height: 6%;
        display: flex;
    }
    .modal-close{
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    .close-button{
        height: 100%;
        background-color: red;
        cursor: pointer;
    }
    .close-icon{
        width: 100%;
        height: 100%;
        color: #FFF;
    }
    .modal-profile-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .image{
        padding: 10px;
        cursor: pointer;
    }
    .icon-image{
        width: 200px;
    }
</style>