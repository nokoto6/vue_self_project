<template lang="">
    <input 
        class = "mc-text-input"
        type = 'text'
    >
</template>

<script>
export default {
    name: 'mc-text-input'
}
</script>

<style lang="scss">
    @import "@/assets/css/globals.scss";

    $inputColor: darken($maincolor,30%);
    
    .mc-text-input { 
        border: none;
        border-radius: 0;
        //padding: 0 10px 0 10px;
        padding: 0 5px 0 5px;
        margin: 0;

        display: block;
        box-sizing: border-box;
        
        height: 30px;   
        width: 100%;
        
        color: white;
        font-size: 15px;

        background-color: $inputColor;

        box-shadow: btn-borders(lighten($maincolor,10%));
        filter: btn-outlines($border-color);
    }

    .mc-text-input:focus {
        outline: none !important;
        filter: btn-outlines($border-color-hover);
    }

    .mc-text-input:active {
        box-shadow: btn-borders(lighten($maincolor,10%));
        background-color: lighten($inputColor,2%);
        //transform: scale(0.97);
    }
</style>