/**
 * 一些全局状态
 */

import { createSlice } from "@reduxjs/toolkit";

// 定义初始状态
const initialState = {
  /**
   * 判断是否移动端
   */
  isMobile: false,
};

// 创建一个 Redux slice
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // 定义同步的 reducer 函数
    mobileTure(state) {
      state.isMobile = true;
    },
    mobileFalse(state) {
      state.isMobile = false;
    },
  },
});

// 导出action creators
export const { mobileTure, mobileFalse } = globalSlice.actions;
// 导出reducer
export default globalSlice;
