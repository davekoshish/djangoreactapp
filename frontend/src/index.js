//import React from 'react';
//port ReactDOM from 'react-dom';


//import NRoutes from './NRoutes';


//ReactDOM.render(<NRoutes/>, document.getElementById("root"));



import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';



import NRoutes from './NRoutes';
import { Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NRoutes />
  </React.StrictMode>
);