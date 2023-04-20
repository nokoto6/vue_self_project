<template lang="">
    <button 
        class="mc-button"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'mc-button'
}
</script>

<style lang="scss">
    @import "@/assets/css/globals.scss";

    .mc-button { 
        border: none;
        border-radius: 0;
        //padding: 0 10px 0 10px;
        padding: 2px;
        margin: 0;
        
        height: 30px;   
        //width: 180px;

        color: white;
        font-size: 15px;

        background-color: $maincolor;

        box-shadow: btn-borders(lighten($maincolor,10%));
        filter: btn-outlines($border-color);
    }

    .mc-button:hover {
        cursor: pointer;
        filter: btn-outlines($border-color-hover);
    }

    .mc-button:active {
        box-shadow: btn-borders(lighten($maincolor,10%));
        background-color: lighten($maincolor,2%);
        transform: scale(0.97);
    }
</style>