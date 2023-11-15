<script>
    export default {
        methods: {
            async upload(e){
                try{
                    const fd = new FormData();
                    fd.append('img',e.target.files[0], e.target.files[0].name);
                    const res = await axios.post('/api/media/uploadImage', fd);
                    console.log(res);
                }
                catch(e){
                    console.error(e);
                }
            }
        }
    }
</script>

<template>
    <input type="file" name="" id="" @change="upload">
</template>