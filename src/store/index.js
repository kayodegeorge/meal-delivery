import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search',
    user: null,
    isAuthenticated: false,
    userRecipes:[],
    login_err:false 
},

  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
  },
  setUser(state, payload) {
    state.user = payload;
},
setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
},
setUserRecipes(state, payload){
  state.userRecipes = payload
},
invalidCredentials(state){
  state.login_err = true
}
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
          let response = await axios.get(`${state.apiUrl}`, {
              params: {
                  q: plan,
                  app_id: '6e5e7712',
                  app_key: '9465c360cd399947ad2bb6d88b468521',
                  from: 0,
                  to: 9
              }
          });
          commit('setRecipes', response.data.hits);
      } catch (error) {
          commit('setRecipes', []);
      }
  },
  userJoin({ commit }, { email, password }) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            commit('setUser', user);
            commit('setIsAuthenticated', true);
        })
        .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/about')
        });
},
userLogin({ commit }, { email, password }) {
  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/about')
      })
      .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          commit('invalidCredentials')
          
      });
},
userSignOut({ commit }) {
  firebase
      .auth()
      .signOut()
      .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/');
      })
      .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/');
      });
},
addRecipe({ state }, payload) {
  firebase
      .database()
      .ref('users')
      .child(state.user.user.uid)
      .push(payload.recipe.label);
},
 getUserRecipes({ state, commit }) {
  return firebase
      .database()
      .ref('users/' + state.user.user.uid)
      .once('value', snapshot => {
          commit('setUserRecipes', snapshot.val());
      });
},

  
  },
  modules: {
  },
  getters:{
    isAuthenticated(state) {
          return state.user !== null && state.user !== undefined;
  }
  }
})
