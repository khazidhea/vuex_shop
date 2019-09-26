import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    categoriesSet (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    async getCategories (context) {
      let response = await axios.get('http://127.0.0.1:8000/api/categories/')
      context.commit('categoriesSet', response.data)
    }
  }
})
