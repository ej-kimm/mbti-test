import Router from './router/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <ToastContainer />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  )
}

export default App
