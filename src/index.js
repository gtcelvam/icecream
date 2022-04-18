import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './css/index.css';
import App from './App';
import Admin from './pages/admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

