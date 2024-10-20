import { Button } from "antd";
import React from "react";

const App: React.FC = () => {
  const onClick = ()  => {
    alert("你点击的按钮");
  }
  return (
    <div>
      <h1>Hello, React + TypeScript + Sass!</h1>
      <Button type="primary" onClick={onClick}>这是一个antd的按钮</Button>
    </div>
  );
};

export default App;
