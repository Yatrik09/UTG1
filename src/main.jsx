import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={"pk_test_ZXhhY3QtYmx1ZWdpbGwtNzguY2xlcmsuYWNjb3VudHMuZGV2JA"}>
  <App />
  </ClerkProvider>
</StrictMode>,
)
