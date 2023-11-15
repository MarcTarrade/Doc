<script>
    import * as pdfjsLib from 'pdfjs-dist/build/pdf'

    export default {
        props:{
            url: String,
            width: String,
            height: String
        },
        async mounted(){
            try{
                pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
                const canvas = this.$refs.pdfCanvas;
                const doc = await pdfjsLib.getDocument(this.url).promise;
                const page = await doc.getPage(1);
                
                if(!this.width) canvas.width = page.view[2]; //2 = width ;
                if(!this.height) canvas.height = page.view[3] //3 = height;

                const viewport = page.getViewport({ scale: canvas.width / page.getViewport({ scale: 1 }).width });
                page.render({
                    canvasContext: canvas.getContext('2d'),
                    viewport
                });
            }
            catch(e){
                console.error(e);
            }
            
        }
    }

</script>

<template>
    <canvas :width="width" :height="height" ref="pdfCanvas"></canvas>
</template>