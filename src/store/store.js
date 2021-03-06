import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    root: 'http://localhost:8000/',
    // root: 'http://192.168.191.1:8000/',
    // root: 'http://172.28.9.157:8000/',
    token: '',
    sceneModelList: JSON.parse(localStorage.getItem('sceneModelList')) || null,
    objectList: JSON.parse(localStorage.getItem('objectList')) || null,
    baseTableMap: JSON.parse(localStorage.getItem('baseTableMap')) || null,
    systemTable: JSON.parse(localStorage.getItem('systemTable')) || null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setSceneModelList (state, sceneModelList) {
      localStorage.setItem('sceneModelList', JSON.stringify(sceneModelList))
      state.sceneModelList = JSON.parse(localStorage.getItem('sceneModelList'))
    },
    setObjectList (state, objectList) {
      localStorage.setItem('objectList', JSON.stringify(objectList))
      state.objectList = JSON.parse(localStorage.getItem('objectList'))
    },
    setBaseTableMap (state, baseTableMap) {
      localStorage.setItem('baseTableMap', JSON.stringify(baseTableMap))
      state.baseTableMap = JSON.parse(localStorage.getItem('baseTableMap'))
    },
    setSystemTable (state, systemTable) {
      localStorage.setItem('systemTable', JSON.stringify(systemTable))
      state.systemTable = JSON.parse(localStorage.getItem('systemTable'))
    }
  }
})
