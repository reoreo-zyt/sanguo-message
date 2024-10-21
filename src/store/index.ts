import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./global"; // 导入根 reducer

// 创建 Redux store
const store = configureStore({
  reducer: rootReducer.reducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware(), // 使用默认的中间件
  // devTools: process.env.NODE_ENV !== 'production', // 在开发环境启用 Redux DevTools
});

export default store;
