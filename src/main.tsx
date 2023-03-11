import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ModalState } from './context/ModalContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
.render(
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
)
