<script>
    import { ref } from 'vue';
    import CustomMenuItem from './CustomMenuItem.vue';

    export default {
        components: {
            CustomMenuItem
        },
        setup(){
            const selected = ref(0);
            const changeSelected = (i) => { selected.value = i; }
            return {
                changeSelected, selected
            }
        }
    }
</script>

<template>
    <nav class="menu-list">
        <div class="logo">
        </div>
        <ol>
            <CustomMenuItem to="/home" name="Accueil" icon="Home" :select="selected === 0" @click="changeSelected(0)"/>
            <CustomMenuItem to="/documents" name="Mes documents" icon="Folder_open" :select="selected === 1" @click="changeSelected(1)"/>
            <CustomMenuItem to="/estate" name="Immobilier" icon="Home_work" :select="selected === 2" @click="changeSelected(2)"/>
        </ol>
    </nav>
</template>

<style scoped>
    .menu-list {
        height: 100%;
        width: 300px;
        background-color: #000000;
    }

    ol{
        padding: 0;
        list-style: none;
    }

    .logo{
        height: 200px;
    }

</style>