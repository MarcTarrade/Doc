<script>
    import mediaFactory from '../../controllers/mediaFactory';

    export default {
        props: {
            clickOnInput: Boolean
        },
        emits: ['fileName'],
        methods: {
            async upload(e){
                try{
                    const resUpload = await mediaFactory.uploadDocument(e.target.files[0], e.target.files[0].name);
                    this.$emit('fileName', resUpload.data);
                }
                catch(e){
                    console.error(e);
                }
            }
        },
        watch: {
            clickOnInput(){
                this.$refs.fileUpload.click();
            }
        }
    }
</script>

<template>
    <input type="file" name="" id="" @change="upload" class="upload-document" ref="fileUpload" accept=".pdf">
</template>

<style>
    .upload-document{
        display: none;
    }
</style>