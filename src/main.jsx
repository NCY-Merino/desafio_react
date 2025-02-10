import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.jsx'
import PizzaProvider from './components/context/Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PizzaProvider>
      <App />
      </PizzaProvider>
    </BrowserRouter>
  </StrictMode>,
)
