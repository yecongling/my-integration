import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@assets/styles/global.scss'; // 引入 Sass 文件

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);