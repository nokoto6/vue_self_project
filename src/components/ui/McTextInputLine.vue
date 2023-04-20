<template lang="">
    <input 
        class = "mc-text-input-line"
        type = 'text'
    >
</template>

<script>
export default {
    name: 'mc-text-input-line'
}
</script>

<style lang="scss">
    @import "@/assets/css/globals.scss";

    $inputColor: darken($maincolor,30%);
    
    .mc-text-input-line { 
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

        //box-shadow: btn-borders(lighten($maincolor,10%));
        //filter: btn-outlines($border-color);
        border-bottom: 2px solid darken($border-color-hover,15%);
        border-radius: 5px;
    }

    .mc-text-input-line:focus {
        outline: none !important;
        border-bottom: 2px solid $border-color-hover;
        //filter: btn-outlines($border-color-hover);
    }

    .mc-text-input-line:active {
        //box-shadow: btn-borders(lighten($maincolor,10%));
        background-color: lighten($inputColor,2%);
        //transform: scale(0.97);
    }

    .mc-text-input-line::placeholder {
        color: rgb(235, 235, 235);
    }


</style>