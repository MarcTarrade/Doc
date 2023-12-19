<script>
    import SvgIcon from '../components/Media/SvgIcon.vue';
    import estateFactory from '../controllers/estateFactory';
    import CardsDocument from '../components/Documents/CardsDocument.vue';

    export default {
        data() {
            return {
                estate: {
                    name: '',
                    current_tenant: {
                        name: '',
                        documents: []
                    },
                    image: '',
                    documents: [],
                    user: JSON.parse(sessionStorage.getItem('user'))
                },
                documentsToDelete: {
                    estate: [],
                    tenant: []
                }
            };
        },
        async mounted() {
            this.estate = await estateFactory.getEstateInfo(this.$route.params.id);
        },
        components: { 
            SvgIcon,
            CardsDocument
        },
        methods: {
            async saveEstate() {
                this.isSaving = true;
                if(this.estate._id) await estateFactory.updateEstate({ estate: this.estate, documentsToDelete: this.documentsToDelete });
                else await estateFactory.createEstate({ estate: this.estate });
                setTimeout(() => {
                    this.isSaving = false;
                }, 1000);
            },
            addEstateDocument() {
                this.estate.documents.push(
                    {
                        index: this.estate.documents.length,
                        name: '',
                        path: '',
                        tenant: this.estate.current_tenant._id,
                        type: 'estate'
                    }
                )
            },
            addTenantDocument(){
                this.estate.current_tenant.documents.push(
                    {
                        index: this.estate.documents.length,
                        name: '',
                        path: '',
                        tenant: this.estate.current_tenant._id,
                        type: 'file'
                    }
                )
            },
            deleteEstateDocument(index){
                this.documentsToDelete.estate = this.estate.documents.filter(doc => {
                    if(doc._id){
                        return doc.index === index;
                    }
                });

                this.estate.documents = this.estate.documents.filter(doc => {
                    return doc.index !== index
                });
            },
            deleteTenantDocument(index){
                this.documentsToDelete.tenant = this.estate.current_tenant.documents.filter(doc => {
                    if(doc._id){
                        return doc.index === index;
                    }
                });

                this.estate.current_tenant.documents = this.estate.current_tenant.documents.filter(doc => {
                    return doc.index !== index
                });
            },
            async deleteEstateFile(selectedDocument){
                await mediaFactory.deleteDocument(selectedDocument.path.split('/').pop())
                this.estate.documents = this.estate.documents.map(doc => {
                    if(doc.index === selectedDocument.index){
                        doc.path = '';
                    }
                    return doc;
                })
            },
            async deleteTenantFile(selectedDocument){
                await mediaFactory.deleteDocument(selectedDocument.path.split('/').pop())
                this.estate.documents = this.estate.documents.map(doc => {
                    if(doc.index === selectedDocument.index){
                        doc.path = '';
                    }
                    return doc;
                })
            }
        }
    }
</script>

<template>
    <div class="estate">
        <div class="title-container">
            <input type="text" v-model="estate.name"/>
            <div class="save-estate">
                <button class="save-button" @click="saveEstate">
                    <SvgIcon name="Sync" class="save-icon" :class="{ 'saving-animation': isSaving }, { 'saved': !isSaving }"/>
                </button>
            </div>
        </div>
        <div class="estate-container">
            <div class="top-info">
                <div class="estate-image">
                    <img v-if="estate.image" src="" alt="" />
                    <SvgIcon v-else name="Default_image" class="estate-icon"/>
                </div>
                <div class="buttons">
                    <button>Changement de locataire</button>
                    <button>Créer la quittance</button>
                    <button>Décompte de charges</button>
                </div>
            </div>
            <div class="bottom-info">
                <div class="tenant-container">
                    <p class="tenant-name">Locataire: </p>
                    <p class="tenant-name-value">{{ estate.current_tenant.name }}</p>
                </div>
                <div class="estate-documents">
                    <CardsDocument :documents="estate.documents" :add-document="addEstateDocument" :delete-document="deleteEstateDocument" :delete-file="deleteEstateFile"/>
                </div>
                <div class="tenant-documents">
                    <CardsDocument :documents="estate.current_tenant.documents" :add-document="addTenantDocument" :delete-document="deleteTenantDocument" :delete-file="deleteTenantFile"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .estate {
        margin-left: 300px;
        width: 100%;
    }
    .title-container{
        display: flex;
        align-items: center;
        background-color: #FFF;
        height: 100px;
        width: 100%;
    }
    .title-container input {
        margin-left: 20px;
        font-size: 40px;
        border: 0;
        border-bottom: 2px solid #8e929c;
        transition: 0.2s ease-in;
        outline: none;
    }
    .title-container input:focus{
        opacity: 1;
        border-bottom: #14213D 2px solid;
    }
    .estate-container{
        display: flex;
        flex-direction: column;
    }
    .top-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .estate-image{
        width: 30%;
    }
    .buttons{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 10px 0;
        margin-right: 30px;
    }
    .buttons button{
        background-color: #14213D;
        color: #FFF;
        border: 0;
        font-size: 40px;
        padding: 10px;
        width: fit-content;
    }
    .tenant-container{
        display: flex;
        flex-direction: row;
    }
    .tenant-name{
        font-size: 40px;
        font-weight: bold;
        width: fit-content;
    }
    .tenant-name-value{
        width: fit-content;
        font-size: 40px;
        margin-left: 10px;
    }
    .estate-documents{
    }
    .tenant-documents{
    }
    .bottom-info{
        display: flex;
        flex-direction: column;
        width: fit-content;
    }
    .save-estate{
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