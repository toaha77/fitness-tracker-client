import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route'
import AuthProvider from './Providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <QueryClientProvider client={queryClient}>
 <HelmetProvider>
  <AuthProvider>
  <RouterProvider router={Route}></RouterProvider>
  </AuthProvider>
  
  </HelmetProvider>
 </QueryClientProvider>
  </React.StrictMode>,
)
