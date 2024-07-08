import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [],
    activeCategory: null,
  },
  mutations: {
    ADD_TO_CART(state, item) {
      const existingItem = state.cart.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cart.push(item);
      }
    },
    REMOVE_FROM_CART(state, itemId) {
      state.cart = state.cart.filter(item => item.id !== itemId);
    },
    UPDATE_QUANTITY(state, { id, quantity }) {
      const cartItem = state.cart.find(item => item.id === id);
      if (cartItem) cartItem.quantity = quantity;
    },
    SET_ACTIVE_CATEGORY(state, category) {
      state.activeCategory = category;
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item);
    },
    removeFromCart({ commit }, itemId) {
      commit('REMOVE_FROM_CART', itemId);
    },
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload);
    },
    setActiveCategory({commit}, category) {
      commit('SET_ACTIVE_CATEGORY', category);
    }
  },
  getters: {
    cartItems: state => state.cart,
    cartItemCount: state => state.cart.length,
    cartTotal: state => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    activeCategory: (state) => state.activeCategory,
  },
});

export default store;
