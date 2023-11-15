<script>
    import SvgIcon from '../Media/SvgIcon.vue';

    export default{
        data() {
            return {
                displayMore: false,
            }
        },
        props: {
            doc: Object
        },
        components: {
            SvgIcon,
        }
    }
</script>

<template>
    <div class="more-container">
            <button class="more-button" @click="displayMore = !displayMore">
                <SvgIcon name="More_vert" class="more-icon"/>
            </button>
            <div class="more" v-if="displayMore">
                <button class="delete" @click="this.$emit('removeDocument')">
                    Supprimer
                </button>
            </div>
        </div>
</template>

<style>
    .more-container{
        position: absolute;
        height: 20%;
        top: 5px;
        right: 0;
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
        height: 100%;
    }
    .card:hover .more-button{
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
</style>