import { createStore } from "vuex";
import VuexPersistence from "vuex-persist/dist/cjs/index.js";
import sectionData from "../sectiondata.json";

const vuexLocal = new VuexPersistence({
  key: "state",
  // strictMode: true,
  // storage: window.localStorage,
  // reducer: state => (state),
  reducer: (state) => state,
});

const store = createStore({
  plugins: [vuexLocal.plugin],
  state() {
    return {
      rowList: [],
      data: sectionData
    };
  },
  mutations: {
    setSectionData(state, payload) {
      state.sectionData = payload;
    },
    setItem(state, payload) {
      state.rowList.push(payload);
    },
    setRowList(state, payload) {
      state.rowList = payload;
    },
    removeRow(state, payload) {},
    addRow(state, payload) {},
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
  },
});

export function useStore() {
  return store;
}

export default store;
