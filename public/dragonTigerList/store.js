import Vue from "vue";
import Vuex from "vuex";

// import * as api from "../script/api.js";

Vue.use(Vuex);

const requestCount = {};

const store = new Vuex.Store({
  state: {
    shangHaiData: [],
    shenZhenData: [],
    institutionData: [],
    cityWideData: [],
    handData: [],
    rankingData: []
  },
  mutations: {
    set: (state, { key, value }) => {
      state[key] = value;
    }
  },
  actions: {
    getShangHai: async function({ state, commit }, params) {
      const result = [
        {
          name: "王小虎虎(沪A)",
          name1: "000868",
          a: "-8.57%",
          b: "卖一主卖，成功率",
          b1: "47.85%",
          c: "-4006.59",
          d: "1922.11",
          e: "20%",
          f: "-5928.70",
          g: "20%",
          h: "2",
          j: "7.36"
        },
        {
          name: "王小虎虎(沪A)",
          name1: "000868",
          a: "5.05%",
          b: "卖一主卖，成功率",
          b1: "47.85%",
          c: "4006.59",
          d: "1922.11",
          e: "20%",
          f: "-5928.70",
          g: "20%",
          h: "2",
          j: "5.05"
        }
      ];

      commit("set", { key: "shangHaiData", value: result });
    },
    getShenZhen: async function({ state, commit }, params) {
      const result = [
        {
          name: "王小虎虎(深A)",
          name1: "000868",
          a: "-7.57%",
          b: "卖一主卖，成功率",
          b1: "47.85%",
          c: "-4006.59",
          d: "1922.11",
          e: "20%",
          f: "-5928.70",
          g: "20%",
          h: "2",
          j: "7.36"
        },
        {
          name: "王小虎虎(深A)",
          name1: "000868",
          a: "4.05%",
          b: "卖一主卖，成功率",
          b1: "47.85%",
          c: "4006.59",
          d: "1922.11",
          e: "20%",
          f: "-5928.70",
          g: "20%",
          h: "2",
          j: "5.05"
        }
      ];

      commit("set", { key: "shangHaiData", value: result });
    },
    getInstitution: async function({ state, commit }, params) {
      const result = [
        {
          name: "王小虎虎(机构)",
          name1: "000868",
          a: "-6.57%",
          b: "卖一主卖，成功率",
          b1: "47.85%",
          c: "-4006.59",
          d: "1922.11",
          e: "20%",
          f: "-5928.70",
          g: "20%",
          h: "2",
          j: "7.36"
        },
        {
          name: "王小虎虎(机构)",
          name1: "000868",
          a: "3.05%",
          b: "卖一主卖，成功率",
          b1: "47.85%",
          c: "4006.59",
          d: "1922.11",
          e: "20%",
          f: "-5928.70",
          g: "20%",
          h: "2",
          j: "5.05"
        }
      ];

      commit("set", { key: "shangHaiData", value: result });
    },
    getCityWide: async function({ state, commit }, params) {
      const result = [
        {
          name: "华金资本(同)",
          num: "SZ.000532",
          lv: "+10.09%",
          city: "西安",
          t1: "国融证券西安高薪一路",
          t2: "方正证券西安南大街",
          mairu: "1625.08",
          more: "1"
        },
        {
          name: "华金资本(同)",
          num: "SZ.000532",
          lv: "+10.09%",
          city: "西安",
          t1: "国融证券西安高薪一路",
          t2: "方正证券西安南大街",
          mairu: "1625.08",
          more: "1"
        }
      ];

      commit("set", { key: "cityWideData", value: result });
    },
    getHand: async function({ state, commit }, params) {
      const result = [
        {
          name: "华金资本（携手）",
          num: "SZ.000531",
          lv: "+0.09%",
          city: "西安",
          lvv: "40.77%",
          t1: "国融证券西安高薪一路",
          t2: "方正证券西安南大街",
          mairu: "1625.08",
          more: "1"
        },
        {
          name: "华金资本（携手）",
          num: "SZ.000531",
          lv: "+0.09%",
          lvv: "40.77%",
          city: "西安",
          t1: "国融证券西安高薪一路",
          t2: "方正证券西安南大街",
          mairu: "1625.08",
          more: "1"
        }
      ];
      commit("set", { key: "handData", value: result });
    },
    getRanking: async function({ state, commit }, params) {
      const result = [
        {
          a: "国泰君安深圳香蜜湖路营业部",
          b: "34.67亿",
          c: "1165",
          d: "+39.62%"
        },
        {
          a: "国泰君安深圳香蜜湖路营业部",
          b: "34.67亿",
          c: "1165",
          d: "+39.62%"
        }
      ];
      commit("set", { key: "rankingData", value: result });
    }
  }
});

export default store;
store.dispatch("getShangHai");
