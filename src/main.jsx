import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </DarkModeProvider>
)
