import { GET_PRODUCTS } from './mutation-types';

const captains = console;

const data = {
  products: [
    {
      id: 10,
      name: 'イチゴ',
      description: 'とちおとめ１ダース',
      quantity: '1',
    },
    {
      id: 20,
      name: 'フランスパン',
      description: 'フランスパン３個入りバッグ',
      quantity: 1,
    },
    {
      id: 30,
      name: 'リンゴ',
      description: '王林 7 個入りバッグ',
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
