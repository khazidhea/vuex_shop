import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000/api'

export default new Vuex.Store({
  state: {
    categories: [],
    category: null,
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    login_success (state, token) {
      state.token = token
    },
    logout (state) {
      state.token = ''
    },
    categoriesSet (state, categories) {
      state.categories = categories
    },
    categorySet (state, category) {
      state.category = category
    },
    orderSet (state, order) {
      state.order = order
    }
  },
  actions: {
    async login (context, credentials) {
      let response = await axios.post(`${API_URL}/auth/`, credentials)
      let token = response.data.token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = 'Token ' + token
      context.commit('login_success', token)
    },
    logout (context) {
      context.commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    },
    async getCategories (context) {
      let response = await axios.get(`${API_URL}/categories/`)
      context.commit('categoriesSet', response.data)
    },
    async getCategory (context, id) {
      let response = await axios.get(`${API_URL}/categories/${id}/`)
      context.commit('categorySet', response.data)
    },
    async createOrder (context, order) {
      let response = await axios.post(`${API_URL}/orders/`, order)
      context.commit('orderSet', response.data)
    }
  }
})
