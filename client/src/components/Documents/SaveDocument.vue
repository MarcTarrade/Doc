<script>
    import SvgIcon from '../Media/SvgIcon.vue';

    export default {
        props: {
            isSaving: Boolean
        },
        components: {
            SvgIcon
        },
        methods: {
            async saveDocuments() {
                this.$emit('save')
            }
        }
    }
</script>

<template>
    <div class="save-document">
        <button class="save-button" @click="saveDocuments">
            <SvgIcon name="Sync" class="save-icon" :class="{ 'saving-animation': isSaving }, { 'saved': !isSaving }"/>
        </button>
    </div>
</template>

<style scoped>
    .save-document{
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .save-button{
        margin-right: 50px;
        background-color: #14213D;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        box-shadow: 0px 1px 10px 1px #000;
    }
    .save-icon{
        width: 30px;
        color: #FFF;
        transform: rotate(0deg);
    }
    .saving-animation{
        animation: rotate 2s linear infinite;
    }
    .saved{
        color: greenyellow;
    }
    @keyframes rotate {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(-360deg);
        }
    }

</style>