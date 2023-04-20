<template lang="">
    <nav 
        class = "navlist-container"
    >
        <nav-item
            v-for="(item, index) in items" 
            :key="index + item.routeName"
            :title = "item.title"
            :routeName = "item.routeName"
            :routeBlank = "item.routeBlank"
            :imgUrl = "item.imgUrl"
        />
    </nav>
</template>

<script>

import NavItem from '@/components/NavItem'

export default {
    name: 'nav-list',
    components: {
        NavItem
    },
    props: {
        items: Array
    }
}
</script>

<style lang="scss">

</style>