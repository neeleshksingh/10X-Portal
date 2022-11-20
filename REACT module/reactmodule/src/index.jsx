import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './welcome';
import Hello from './hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
const main = ReactDOM.createRoot(document.getElementById('main'))
root.render(
  <Welcome/>
)
main.render(
  <Hello/>
)
