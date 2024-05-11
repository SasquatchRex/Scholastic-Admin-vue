import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async subjects(){
      axios.post('https://127.0.0.1:8000/create/subject',{})
      .then(response =>{
        console.log('Response :',response.data)
      })
      .catch(error =>{
        console.error("Error : ",error)
      })
    }
  },
  modules: {
  }
})
