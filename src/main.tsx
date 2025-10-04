import React from 'react'
import ReactDOM from 'react-dom/client'
import "./i18n";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
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

const isEN = /^\/en(\/|$)/i.test(window.location.pathname);
const target = isEN ? "en" : "ko";
if (i18n.language !== target) i18n.changeLanguage(target);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);