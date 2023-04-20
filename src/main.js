import { createApp } from 'vue'
import App from '@/App'

import router from '@/router'
import ui from '@/components/ui'

import mainStyle from '@/assets/css/globals.scss'

const app = createApp(App);

app.use(router);
app.mount('#app');

ui.forEach(component => {
    app.component( component.name , component );
})