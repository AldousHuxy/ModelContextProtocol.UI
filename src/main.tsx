import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'
import { ModeProvider } from './context/ModeContext.tsx'
import './index.css'
import { AgentProvider } from './context/AgentContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgentProvider>
      <ModeProvider>
        <RouterProvider router={router} />
      </ModeProvider>
    </AgentProvider>
  </StrictMode>,
)
