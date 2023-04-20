<template lang="">
    <div class = "layout-container">
        <div class = "nav-section nav-section-main border_bg_tech">
            <nav-list
                class = "nav-list nav-list-main"
                :items = navItems
            />
        </div>
        <div class = "nav-section nav-section-addtive border_bg_tech">
            <nav-list
                class = "nav-list nav-list-addtive"
                :items = navItemsAddtive
            />
        </div>
        <div class = "page-section border_bg_tech">
            <router-view></router-view>
        </div>
        <div class = "sidebar-section border_bg_tech">
            <sign-up-form
                class = "border_bg_simple"
                v-if = "this.userData.authorized === false"
            />
        </div>
        <div class = "logo-section">
            <img
                class = "logo-shadow logo-img-text"
                src = "@/assets/images/zet.png"
            >
            <img
                class = "logo-shadow logo-img"
                src = "@/assets/images/tyan.png"
            >
        </div>
    </div>
</template>

<script>

import NavList from '@/components/NavList';
import SignUpForm from '@/components/SignUpForm.vue';

export default {
    name: 'layout',
    components: {
        NavList,
        SignUpForm
    },
    data() {
        return {
            userData: {
                authorized: false,
                email: '',
                login: '',
                password: ''
            },
            navItems: [
                {
                    title: 'Новости',
                    routeName: 'news',
                    imgUrl: 'puncake.png'
                },
                {
                    title: 'Донат',
                    routeName: 'donate',
                    imgUrl: 'daimond.png'
                },
                {
                    title: 'О серверах',
                    routeName: 'about',
                    imgUrl: 'book.png'
                },
                {
                    title: 'Дискорд',
                    routeName: 'discord',
                    imgUrl: 'discord3.png'
                }
            ],
            navItemsAddtive: [
                {
                    title: 'Начать игру',
                    routeName: 'client',
                    imgUrl: 'cake.png'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/globals.scss";

    .layout-container {
        display: grid;
        grid-template-columns: 5fr 2fr;
        grid-template-rows: auto 1fr auto;
        gap: 30px;
        margin: 10px auto 100px auto;
        max-width: 1200px;
        grid-auto-columns: auto;
    }

    .logo-section {
        grid-column: 1 / 2;
        grid-row: 1 / 2;

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        flex-wrap:wrap;
    }

    .logo-img {
        display: block;
        width: 50%;
        height: auto;
        min-width: 290px;
        max-width: 500px;
        transform: translateY(30px);
        order: 0;
    }

    .logo-img-text {
        display: block;
        width: 45%;
        height: auto;
        min-width: 330px;
        max-width: 500px;
        margin-top: auto;
        //transform: translateY(30px);
        order: 1;
    }

    .logo-shadow {
        filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
    }

    .nav-list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 25px;
    }

    .nav-section-main {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    .nav-section-addtive {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        gap: 0;
        margin-top: auto;
    }

    .nav-list .router-link-active {
        transform: translateY(5px);
        filter: drop-shadow(0 -5px 0 rgba(50, 50, 50, 1));
    }

    //.nav-list-addtive button {
    //    height: 50px;
    //    font-size: 20px;
    //}

    .page-section {
        grid-column: 1 / 2;
        grid-row: 3 / 4;

        height: 500px;
        min-width: 180px;
    }

    .sidebar-section {
        grid-column: 2 / 3;
        grid-row: 2 / 4;
        //min-width: 140px;
    }

    .border_bg_tech {
        background-color: $bg_color;
        backdrop-filter: blur($bg_blur);
        padding: $lt_padding;
        border-image: $border_img;
    }

    .border_bg_simple {
        width: 100%;
        height: auto;
        background-color: rgba(255, 255, 255, 0.15);
        //backdrop-filter: blur($bg_blur);

        padding: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.5);
    }

    @media (max-width:480px) { // Настройки для мобильных телефонов
        .layout-container {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: auto 1fr auto auto auto;
            column-gap: 0;
        }
        .sidebar-section {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }
        .nav-section-addtive {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
        }
        .nav-section-main {
            grid-column: 1 / 2;
            grid-row: 4 / 5;
        }
        .page-section {
            grid-column: 1 / 2;
            grid-row: 5 / 6;
        }

        .logo-img {
            transform: translateY(35px) rotate(6deg);
        }
        .logo-img-text {
            transform: translateY(7px);
        }
    }

</style>