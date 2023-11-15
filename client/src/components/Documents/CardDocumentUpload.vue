<script>
    import UploadDocument from '../Media/UploadDocument.vue';
    import SvgIcon from '../Media/SvgIcon.vue';
    import InputIcon from '../Icons/UploadIcon.vue';
    import RenderPDF from '../Media/RenderPDF.vue';

    export default {
        data() {
            return {
                click: false,
                reloadRenderPDF: 0
            }
        },
        props: {
            doc: Object,
            clickToUpdate: Number,
        },
        components: {
            UploadDocument,
            SvgIcon,
            InputIcon,
            RenderPDF,
        },
        methods: {
            clickInput(){
                this.click = !this.click;
            },
            getFileName(fileName){
                this.doc.path = fileName
                this.reloadRenderPDF++;
            }
        },
        computed: {
            isFile(){
                return this.doc.path ? true : false
            }
        },
        watch: {
            clickToUpdate(){
                this.clickInput();
            }
        }
    }
</script>

<template>
    <div class="card-document-upload">
        <UploadDocument :clickOnInput="click" @fileName="getFileName"/>
    
        <div v-if="!isFile" class="upload-container" @click="clickInput()">
            <InputIcon class="upload-icon"/>
        </div>
        <div v-if="isFile" class="document-container">
            <RenderPDF :url="doc.path" width="500" height="500" :key="reloadRenderPDF" class="document-canvas"/>
        </div>
    </div>
</template>

<style>
    .card-document-upload{
        display: initial;
        cursor: pointer;
    }
    .upload-container, .document-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        z-index: 1;
        position: relative;
    }
    .upload-container{
        border: 2px #14213D dotted;
        border-radius: 5px;
    }
    .upload-icon{
        width: 50px;
        height: 50px;
    }
    .document-container{
        width: 100%;
        height: 80%;
        border: #14213D 1px solid;
        border-radius: 5px;
    }
    .document-canvas{
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }
</style>