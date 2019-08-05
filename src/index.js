import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/index';
import  { Provider }from 'react-redux';
const Main=(
  <Provider store={store}>
    <App/>
  </Provider>
)
// 就是现在所有的组件 都能接收到store吧

ReactDOM.render(Main, document.getElementById('root'));
