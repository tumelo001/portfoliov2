import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App />
);


setTimeout(function() {
   document.querySelector(".goUp").click();
}, 5000);
