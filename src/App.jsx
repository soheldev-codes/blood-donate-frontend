
import { Route, Routes } from 'react-router'
import './App.css'
import UserLayout from './Layouts/UserLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import AuthLayout from './Layouts/AuthLayout'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

function App() {


  return (
    <div className="max-w-7xl mx-auto">
      <Routes>


        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="auth" element={<AuthLayout />} >

          <Route index path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
