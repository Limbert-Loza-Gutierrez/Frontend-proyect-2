import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Layout from './layouts/Layout.jsx'
import Perfil from './components/Perfil/Perfil.jsx'
import UserCreate from './components/UserCreate/UserCreate.jsx'
import ParteSemanalSoldados from './components/ParteSemanalSoldados/ParteSemanalSoldados.jsx'
import ParteSemanalCadAl from './components/ParteSemanalCadAl/ParteSemanalCadAl.jsx'
import Reportes from './components/Reportes/Reportes.jsx'
import ViewUser from './components/ViewUser/ViewUser.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { UsersProvider } from './contexts/UsersContext.jsx'
const routes = [
  {
    path: "perfil",
    element: <Perfil />,
  },
  {
    path: "crear-usuarios",
    element: <UserCreate />,
  },
  {
    path: "administrar-usuarios",
    element: <ViewUser />,
  },
  {
    path: "parte-semanal-soldados",
    element: <ParteSemanalSoldados />,
  },
  {
    path: "parte-semanal-cadetes",
    element: <ParteSemanalCadAl />,

  }
  ,
  {
    path: "reportes",
    element: <Reportes />
  }
]

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: routes
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserProvider>
      <UsersProvider>
        <RouterProvider router={ router } />
      </UsersProvider>
    </UserProvider>

  </React.StrictMode>,
)


