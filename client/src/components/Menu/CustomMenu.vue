<script>
    import CustomMenuItem from './CustomMenuItem.vue';

    export default {
        components: {
            CustomMenuItem
        }
    }
</script>

<template>
    <nav class="menu-list">
        <div class="logo">
        </div>
        <ol>
            <CustomMenuItem to="/home" name="Accueil" icon="Home"/>
            <CustomMenuItem to="/documents" name="Mes documents" icon="Folder_open"/>
            <CustomMenuItem to="/estate" name="Immobilier" icon="Home_work"/>
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