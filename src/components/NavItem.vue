<template lang="">
    <router-link 
        class = "nav-link-container"
        :to = "`/${routeName}`"
    >
        <mc-button class = "nav-button">
            <img 
                v-if="imgUrl != 'none'"
                class = "nav-button-image"
                :src = "require(`../assets/images/${imgUrl}`)"
            >
            <div 
                v-if="title !== ''"
                class = "nav-button-text"
            >
                {{ title }}
            </div>
        </mc-button>
    </router-link>
</template>

<script>
export default {
    name: 'nav-item',
    props: {
        title: String,
        routeName: String,
        imgUrl: {
            type: String,
            default: "none"
        }
    }
}
</script>

<style lang="scss">
    .nav-link-container {
        padding: 0;
        margin: 0;
        text-decoration: none;
        
        transition-property: 
            transform,
            filter
        ;
        transition-duration: 0.3s;
        //transition-delay: 0.1s;
        flex: 2 1 auto;
    }

    .nav-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
    }

    .nav-button-image {
        filter: drop-shadow(2px 2px 0 rgba(0, 0, 0, 0.3));
        width: auto;
        height: 22px;
        display: block;
    }

    .nav-button-text {
        display: block;
        white-space:pre;
        overflow: hidden;
    }
</style>