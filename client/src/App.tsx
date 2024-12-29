import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import SignUp from './components/pages/SignUp'

function App() {
  const router = createBrowserRouter([
    // landing router
    {
      path: "/",
      element: <LandingPage />
    },
    // authentication routers
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: "",
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
