<script>
import SvgIcon from '../Media/SvgIcon.vue';
import RenderPDF from '../Media/RenderPDF.vue';

    export default {
    props: {
        isModalShown: Boolean,
        showModal: Function,
        doc: Object,
        deleteFile: Function
    },
    components: { 
        SvgIcon,
        RenderPDF
    },
    methods: {
        removeFile() {
            this.deleteFile(this.doc);
            this.showModal();
        }
    }
}
</script>

<template>
    <div class="document-modal" v-if="isModalShown">
        <div class="background" @click="showModal"></div>
        <div class="document-modal-content">
            <div class="modal-menu">
                <div class="edit-document">
                    <button @click="removeFile">
                        <SvgIcon name="Delete" class="icon"/>
                    </button>
                    <a :href="doc.path">
                        <SvgIcon name="Download" class="icon"/>
                    </a>
                </div>
                <div class="modal-close">
                    <button class="close-button" @click="showModal">
                        <SvgIcon name="Close" class="close-icon"/>
                    </button>
                </div>
            </div>
            <div class="modal-document-container">
            <RenderPDF :url="doc.path" class="modal-document"/>
        </div>
        </div>
    </div>    
</template>

<style scoped>
    .document-modal{
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
    .document-modal-content{
        width: 60%;
        height: 80%;
        background-color: white;
        z-index: 99;
        position: relative;
    }
    .modal-menu{
        height: 6%;
        width: 100%;
        display: flex;
    }
    .edit-document{
        width: 50%;
        display: flex;
        justify-content: flex-start;
    }
    .edit-document button, .edit-document a{
        height: 100%;
        width: 10%;
        display: flex;
        justify-content: center;
        background-color: #14213D;
        border: none;
        box-shadow: 0px 1px 10px 1px #000;
        cursor: pointer;
    }
    .edit-document a{
        margin-left: 10px;
    }
    .edit-document .icon{
        height: 100%;
        color: #FFF;
    }
    .modal-close{
        display: flex;
        justify-content: flex-end;
        width: 50%;
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
    .modal-document-container{
        display: flex;
        justify-content: center;
        height: 90%;
    }
    .modal-document{
        border: 1px solid #000;
        border-radius: 5px;
    }
</style>