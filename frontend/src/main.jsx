import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ShopsContextProvider } from './context/ShopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopsContextProvider>
      <App />
    </ShopsContextProvider>
  </React.StrictMode>
)
