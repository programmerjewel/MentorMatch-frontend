import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import ThemeProvider from './provider/ThemeProvider.jsx'
import AuthProvier from './provider/AuthProvier.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvier>
        <RouterProvider router={router}/>
      </AuthProvier>
    </ThemeProvider>
  </StrictMode>,
)
