// 导入创建 store 的方法
import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  // 必填项
  name: "counter",

  // 初始状态数据
  initialState: {
    count: 0,
  },

  // 修改数据 - 同步方法
  reducers: {
    // 增方法
    increment: (state) => {
      state.count++;
    },

    // 减方法
    decrement: (state) => {
      state.count--;
    },
  },
});

// 解构出创建 action 对象的函数（actionCreater）
// 并以 按需导出 的方式 导出 actionCreater
export const { increment, decrement } = counterStore.actions;

// 以默认导出的方式导出 reducer函数
export default counterStore.reducer;
