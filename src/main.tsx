import React from 'react'
import ReactDOM from 'react-dom/client'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components'
import { HashRouter } from 'react-router-dom'
import { GameProvider } from './context/GameContext'
import App from './App'
import './index.css'

// Custom Fluent Theme to match our colors if needed
const customTheme = {
  ...webDarkTheme,
  colorBrandBackground: '#c5a059',
  colorBrandBackgroundHover: '#e6c875',
  colorBrandBackgroundPressed: '#8b6d3b',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FluentProvider theme={customTheme} style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
      <GameProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </GameProvider>
    </FluentProvider>
  </React.StrictMode>,
)
