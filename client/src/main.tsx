import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('main.tsx accessed')
const App = () => {
  return <h1>Hello, World!</h1>;
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
