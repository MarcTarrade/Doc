<script>
    import estateFactory from '../controllers/estateFactory';
    import EstateList from '../components/Estate/EstateList.vue';

    export default {
        data() {
            return {
                currentUser: JSON.parse(sessionStorage.getItem('user')),
                estates: []
            }
        },
        components: {
            EstateList
        },
        async mounted() {
            this.estates = await estateFactory.getEstateListByUser(this.currentUser._id);
        }
    }
</script>

<template>
    <div class="estate">
        <EstateList :estates="estates"/>
    </div>
</template>

<style>

</style>