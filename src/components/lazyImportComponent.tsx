import React from "react";
import { Suspense, LazyExoticComponent } from "react";

const LazyImportComponent = (props: {
  lazyChildren: LazyExoticComponent<() => JSX.Element>;
}) => {
  return (
    // 对使用懒加载的路由组件，使用Suspense包裹，用于异步加载组件时显示过渡UI
    <Suspense fallback={<div>加载人物数据中...</div>}>
      <props.lazyChildren />
    </Suspense>
  );
};

export default LazyImportComponent;
