<script>
import CardDocumentUpload from './CardDocumentUpload.vue';
import SvgIcon from '../Media/SvgIcon.vue';
import MoreDocument from './MoreDocument.vue';
    
    export default {
        data() {
            return {
                updatePDF: 0
            }
        },
        props: {
            doc: Object
        },
        components: {
            CardDocumentUpload,
            SvgIcon,
            MoreDocument
        },
        emits: ['openModal', 'removeDocument'],
    }
</script>

<template>
    <div class="card">
        <div class="card-title-container">
            <input type="text" class="card-title" v-model="doc.name" placeholder="Nom document">
        </div>
        <CardDocumentUpload :doc="doc" :clickToUpdate="updatePDF" @click="this.$emit('openModal')"/>
        <MoreDocument @removeDocument="this.$emit('removeDocument', doc.index)"/>
    </div>
</template>

<style>
    .card{
        width: 250px;
        height: 250px;
        box-shadow: 0px 5px 10px 1px #14213D;
        border-radius: 10px;
        padding: 5px;
        position: relative;
        background-color: #FFF;
    }
    .card-title-container{
        height: 20%;
        width: 90%;
    }
    .card-title{
        width: 100%;
        font-size: 25px;
        border: 0;
        border-bottom: 2px solid #8e929c;
        transition: 0.2s ease-in;
        outline: none;
    }
    .card-title:focus{
        opacity: 1;
        border-bottom: #14213D 2px solid;
    }
</style>