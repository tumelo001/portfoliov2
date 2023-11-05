import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App />
);


setInterval(function() {
   document.querySelector(".next-arrow").click();
}, 10000);
