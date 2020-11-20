import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import Dropdown from 'primevue/components/dropdown/Dropdown.vue'
import './index.css'

createApp(App)
    .component('dropdown', Dropdown)
    .mount('#app')
