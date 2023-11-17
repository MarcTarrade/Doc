<script>
    import CardsDocument from '../components/Documents/CardsDocument.vue'
    import SaveDocument from '../components/Documents/SaveDocument.vue';
    import documentFactory from '../controllers/documentFactory';

    export default {
        data() {
            return {
                documents: [],
                documentsToDelete: [],
                isSaving: false,
                currentUser: JSON.parse(sessionStorage.getItem('user'))
            }
        },
        components: {
            CardsDocument,
            SaveDocument
        },
        methods: {
            deleteDocument(index){
                this.documentsToDelete = this.documents.filter(doc => {
                    if(doc._id){
                        return doc.index === index;
                    }
                });

                this.documents = this.documents.filter(doc => {
                    return doc.index !== index
                });
            },
            addDocument(){
                this.documents.push({
                    index: this.documents.length,
                    name: '',
                    path: '',
                    user: this.currentUser._id
                })
            },
            async saveDocument(){
                this.isSaving = true;
                await documentFactory.updateDocuments({ documents: this.documents, documentsToDelete: this.documentsToDelete });
                setTimeout(() => {
                    this.isSaving = false;
                }, 1000)
                await this.getDocuments();
                
            },
            async getDocuments(){
                const documentsApi = await documentFactory.getDocuments(this.currentUser._id)
                this.documents = documentsApi;
            }
        },
        async mounted() {
            await this.getDocuments();
        },
        async unmounted() {
            await this.saveDocument();
        },
    }
</script>

<template>
    <div class="document-view">
        <SaveDocument @save="this.saveDocument" :isSaving="isSaving"/>
        <CardsDocument :documents="documents" @documents="this.documents = $event" :addDocument="this.addDocument" :deleteDocument="this.deleteDocument"/>
    </div>
</template>

<style>
    .document-view {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
