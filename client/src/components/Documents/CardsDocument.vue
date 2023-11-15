<script>
    import CardDocument from './CardDocument.vue';
    import SvgIcon from '../Media/SvgIcon.vue';
    import ModalDocument from './ModalDocument.vue';
    import RenderPDF from '../Media/RenderPDF.vue';
    import MediaFactory from '../../controllers/mediaFactory'

    export default {
        data() {
            return {
                isModalShown: false,
                selectedDocument: null,
            }
        },
        props: {
            documents: Array,
            addDocument: Function,
            deleteDocument: Function
        },
        components: {
            CardDocument,
            SvgIcon,
            ModalDocument,
            RenderPDF
        },
        methods: {
            showModal(){
                this.isModalShown = !this.isModalShown;
            },
            clickOnDocument(doc){
                this.showModal();
                this.selectedDocument = doc
            },
            async deleteFile(){
                await MediaFactory.deleteDocument(this.selectedDocument.path.split('/').pop())
                this.documents = this.documents.map(doc => {
                    if(doc.index === this.selectedDocument.index){
                        doc.path = '';
                    }
                    return doc;
                })
                this.showModal()
            }
        },
        computed: {
            filePath(){
                if(this.selectedDocument) return this.selectedDocument.path ? this.selectedDocument.path : ''
            }
        }
    }
</script>

<template>
    <div class="cards-container">
        <div class="cards" v-for="doc in documents">
            <CardDocument :doc="doc" @removeDocument="deleteDocument" @openModal="clickOnDocument(doc)"/>
        </div>
        <div class="cards">
            <div class="add-card">
                <SvgIcon name="Add" class="add-icon" @click="addDocument"/>
            </div>
        </div>
    </div>
    <ModalDocument :showModal="showModal" :isModalShown="isModalShown" :filePath="filePath" :deleteFile="deleteFile">
        
    </ModalDocument>
</template>

<style scoped>
    .cards-container{
        display: flex;
        width: 100%;
    }
    .cards{
        display: flex;
        margin: 10px;
    }
    .add-card{
        width: 250px;
        height: 250px;
        box-shadow: 0px 5px 10px 1px #14213D;
        border-radius: 10px;
        padding: 5px;
        background-color: #FFF;
    }
    .add-icon{
        padding: 20%;
        cursor: pointer;
    }
</style>