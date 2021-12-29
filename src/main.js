/*
* Bootstrapping our Vue application:
*  - create app from our central component App.vue
*  - import router and pass it to app object
*  - attach app object to the html element in index.html
* */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const forumApp = createApp(App)
forumApp.use(router)

// Register global components automatically, catch all components with prefix 'App' in 'components' directory
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
