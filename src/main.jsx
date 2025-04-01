import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import InternsPage from './Components/InternsPage.jsx'
import Dashboard from './Components/Dashboard.jsx'
import TaskManager from './Components/TaskManager.jsx'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Dashboard/>}/>
      <Route path="/interns" element={<InternsPage/>}/>
      <Route path='/task' element={<TaskManager/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
