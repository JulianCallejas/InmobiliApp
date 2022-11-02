import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './compon/menu';
import Aside from './compon/aside';
import reportWebVitals from './reportWebVitals';
import Search from './compon/Search'
import Display from './compon/display';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Search />
    <div className='contect-flex-index'>
      <div className='display'>
        <Display />
      </div>
      <Aside />
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
