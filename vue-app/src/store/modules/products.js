import { GET_PRODUCTS } from './mutation-types';

const captains = console;

const data = {
  products: [
    {
      id: 10,
      name: 'イチゴ',
      description: 'イチゴ１ダース',
      quantity: '1',
    },
    {
      id: 20,
      name: 'スライスパン',
      description: 'スライスされた小麦のパン',
      quantity: 1,
    },
    {
      id: 30,
      name: 'リンゴ',
      description: 'リンゴ 7 個入りバッグ',
      quantity: 1,
    },
  ],
};
export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    [GET_PRODUCTS](state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProductsAction({ commit }) {
      try {
        commit(GET_PRODUCTS, data.products);
        return data.products;
      } catch (error) {
        captains.error(error);
      }
    },
  },
  getters: {
    products: (state) => state.products,
  },
};
