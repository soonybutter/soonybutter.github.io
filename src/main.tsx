import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import faviconUrl from './assets/icon3.png'

// 파비콘
function applyFavicon(href: string) {
  document.querySelectorAll('link[rel="icon"]').forEach(el => el.remove())

  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  link.sizes = 'any'
  link.href = href
  document.head.appendChild(link)

  const apple = document.querySelector('link[rel="apple-touch-icon"]') || document.createElement('link')
  apple.setAttribute('rel', 'apple-touch-icon')
  ;(apple as HTMLLinkElement).href = href
  if (!apple.isConnected) document.head.appendChild(apple)
}

applyFavicon(faviconUrl)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)