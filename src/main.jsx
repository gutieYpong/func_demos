import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import IndexPage from './pages/IndexPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
// import NotFound from './pages/NotFound.jsx'
import Demos from './pages/Demos.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        // errorElement: <NotFound />,
        children: [
          { index: true, element: <IndexPage /> },
          {
            path: "signup",
            element: <SignUpPage />,
            // loader: contactLoader,
            // action: contactAction,
          },
          {
            path: "demos",
            element: <Demos />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
