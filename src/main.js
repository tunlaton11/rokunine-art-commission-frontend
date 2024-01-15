/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins

import { registerPlugins } from '@/plugins'
import { router } from './routes';

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(registerPlugins)
app.use(router)

app.mount('#app')
