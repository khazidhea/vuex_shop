import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    category: null
  },
  mutations: {
    categoriesSet (state, categories) {
      state.categories = categories
    },
    categorySet (state, category) {
      state.category = category
    }
  },
  actions: {
    async getCategories (context) {
      let response = await axios.get('http://127.0.0.1:8000/api/categories/')
      context.commit('categoriesSet', response.data)
    },
    async getCategory (context, id) {
      let response = await axios.get(`http://127.0.0.1:8000/api/categories/${id}/`)
      context.commit('categorySet', response.data)
    }
  }
})
