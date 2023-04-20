<template lang="">
    <form class = "sign-up-form">
        <h2 class = "form-signup-header">Авторизация</h2>

        <mc-text-input-line 
                class = "form-text-input form-text-input-login"
                placeholder = "Логин"
                id = "login"
                name = "login"
                :value = "login"
                @input = "this.$emit('loginInput')"
        />

        <mc-text-input-line 
                class = "form-text-input form-text-input-password"
                type = "password"
                placeholder = "Пароль"
                id = "password"
                name = "password"
                :value = "password"
                @input = "this.$emit('passwordInput')"
        />
        <mc-button
            class = "form-button-submit"
        >
            Войти
        </mc-button>
        
        <router-link 
            class = "form-router-link form-router-link-register"
            :to = "'/client'"
        >
            Регистрация
        </router-link>

        <router-link 
            class = "form-router-link form-router-link-lostpass"
            :to = "'/donate'"
        >
            Забыли пароль?
        </router-link>
    </form>
</template>

<script>
import McButton from '@/components/ui/McButton';
import McTextInputLine from '@/components/ui/McTextInputLine';

export default {
    name: 'sign-up-form',
    components: {
        McButton,
        McTextInputLine
    },
    props: {
        login: String,
        password: String
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/globals.scss";

    .form-text-input {
        margin-bottom: 10px;
    }

    .form-signup-header {
        font-size: 25px;
        text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
        margin: 0;
        padding: 0;
        padding-top: 5px;
        padding-bottom: 15px;
        display: block;
    }

    $button-padding: 6px;

    .form-button-submit {
        display: inline-block;
        margin: $button-padding;
        box-sizing: border-box;
        width: calc(100% - $button-padding*2);
    }

    .form-router-link {
        margin: 0;
        display: block;
        font-size: 14px;
        text-decoration: none;
    }

    .form-router-link-register {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .form-router-link:hover {
        color: $router_hover_color;
    }
</style>