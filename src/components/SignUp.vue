<template lang="">
    <form class = "sign-up">
        <div class = "form-container">
            <div class="error-container">
                <label
                    for = "login"
                >Логин:</label>
                
                <label 
                    class = "form-error"
                    for = "login"
                    v-if="!login_required"
                > * </label>

                <label 
                    class = "form-error"
                    for = "login"
                    v-else-if="!login_length"
                > Длинна символов меньше 5!</label>
            </div>

            <input 
                class = "form-input"
                type = "text" 
                id = "login"
                v-model.trim = "form.login"
            >
        </div>

        <div class = "form-container">
            <div class="error-container">
                <label 
                    for = "email"
                >E-Mail:</label>
                
                <label 
                    class = "form-error"
                    for = "email"
                    v-if="!email_required"
                > * </label>

                <label 
                    class = "form-error"
                    for = "email"
                    v-else-if="!email_incorrect"
                > Некорректно!</label>
            </div>

            <input 
                class = "form-input"
                type = "email" 
                id = "email"
                v-model.trim = "form.email"
            >
        </div>

        <div class = "form-container">
            <div class="error-container">
                <label 
                    for = "password"
                >Пароль:</label>
                
                <label 
                    class = "form-error"
                    for = "password"
                    v-if="!password_required"
                > * </label>

                <label 
                    class = "form-error"
                    for = "password"
                    v-else-if="!password_length"
                > Длинна символов меньше 6!</label>
            </div>
            
            <input 
                class = "form-input"
                type = "password" 
                id = "password"
                v-model.trim="form.password"
            >
        </div>

        <div class = "form-container">
            <label 
                for = "country"
            >Страна проживания:</label>
            
            <select 
                class = "form-input"
                id = "country"
                v-model="form.country"
            >
                <option 
                    v-for="(item, index) in countryList" 
                    :key = "index"
                    :value = "item.value"
                >
                    {{ item.title }}
                </option>
            </select>
        </div>

        <div class = "form-container">
            <label 
                for = "theme"
            >Любимые темы:</label>
            
            <select 
                class = "form-input form-multiple"
                id = "theme"
                v-model = "form.themeArray"
                multiple
            >
                <option 
                    v-for="(item, index) in themes" 
                    :key = "index"
                    :value = "item.value"
                >
                    {{ item.title }}
                </option>
            </select>
        </div>

        <div class = "form-container">
            <label 
                for = "agreeWithSendEmail"
            >Уведомлять меня о новых курсах:</label>
            
            <input 
                class = "form-input form-checkbox"
                type = "checkbox" 
                id = "agreeWithSendEmail"
                v-model="form.agreeWithSendEmail"
            >
        </div>
    
        <div class = "form-container row">
            <div class = "form-radio">
                <label 
                    for = "male"
                >Мужской:</label>
                
                <input 
                    class = "form-input form-checkbox"
                    type = "radio" 
                    name = "gendere"
                    id = "male"
                    value = "male"
                    v-model="form.gendere"
                >
            </div>
            <div class = "form-radio">
                <label 
                    for = "female"
                >Женский:</label>

                <input 
                    class = "form-input form-checkbox"
                    type = "radio" 
                    name = "gendere"
                    id = "female"
                    value = "female"
                    v-model="form.gendere"
                >
            </div>
        </div>
    </form>
</template>

<script>

export default {
    name: "SignUp",
    data() {
        return {
            form: {
                login: '',
                email: '',
                password: '',
                country: '',
                themeArray: [],
                agreeWithSendEmail: false,
                gendere: 'male'
            },
            countryList: [
                {
                    title: 'Россия',
                    value: 'Russia'
                },
                {
                    title: 'Украина',
                    value: 'Ukraine'
                },
                {
                    title: 'США',
                    value: 'USA'
                }
            ],
            themes: [
                {
                    title: 'Швейное дело',
                    value: 'cutting'
                },
                {
                    title: 'Vue.JS',
                    value: 'vue'
                },
                {
                    title: 'Велосипеды',
                    value: 'velo'
                },
                {
                    title: 'Котики',
                    value: 'cats'
                },
                {
                    title: 'Чистка картофеля',
                    value: 'potato cutting'
                }
            ],
            form_checked: false
        }
    },
    computed: {
        form_validate() {
            return this.login_length &&
                   this.login_required &&
                   this.email_incorrect &&
                   this.email_required &&
                   this.password_length &&
                   this.password_required
        },

        login_length() {
            return this.form_checked && this.form.login.length > 4
        },
        login_required() {
            return this.form_checked && this.form.login.length > 0
        },
        email_incorrect() {
            return this.form_checked && this.form.email.includes('@') && this.form.email.includes('.') && this.form.email.length > 5
        },
        email_required() {
            return this.form_checked && this.form.email.length > 0
        },
        password_length() {
            return this.form_checked && this.form.password.length > 5
        },
        password_required() {
            return this.form_checked && this.form.password.length > 0
        }
    },
    methods: {
        check_form() {
            this.form_checked = true;
        }
    }
}
</script>

<style lang="css">
    .form-container {
        display: flex;
        flex-direction: column;
    }

    .form-input {
        width: 220px;
        height: 20px;
    }

    .form-multiple {
        height: auto;
    }

    .form-checkbox {
        margin: 0;
        padding: 10px;
        width: 20px;
    }

    .sign-up {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    .row {
        flex-direction: row;
        gap: 30px;
    }

    .form-error {
        color: rgba(255, 47, 47, 0.733);
        font-size: 14px;
    }

    .error-container {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
</style>