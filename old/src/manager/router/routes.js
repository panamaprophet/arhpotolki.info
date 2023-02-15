import Pictures from '../components/pictures.vue'
import Categories from '../components/categories.vue'
import Feedback from '../components/feedback.vue'
import Main from '../components/main.vue'

export default {
  routes : [
    {
      path : '/categories',
      component : Categories
    },
    {
      path : '/pictures',
      component : Pictures
    },
    {
      path : '/feedback',
      component : Feedback
    },
    {
      path : '(/)',
      component : Main
    }
  ]
}