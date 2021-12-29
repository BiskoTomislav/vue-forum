import Home from '@/pages/Home'
import { createRouter, createWebHistory } from 'vue-router'
import ThreadShow from '@/pages/ThreadShow'
import ForumShow from '@/pages/ForumShow'
import NotFound from '@/pages/NotFound'
import sourceData from '@/data.json'
import CategoryShow from '@/pages/CategoryShow'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'CategoryShow',
    component: CategoryShow,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'ForumShow',
    component: ForumShow,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      // check if thread for given id exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if exists continue
      if (threadExists) {
        next()
      } else {
        // if does not exist go to NotFound page
        next({
          name: 'NotFound',
          // Keep url in browser for easier debugging when wrong url is used
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
