import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Vscode from './Vscode.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Vscode/>
  </StrictMode>,
)
