
import { Route, Routes } from 'react-router'
import './App.css'
import UserLayout from './Layouts/UserLayout'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {


  return (
    <div className="max-w-7xl mx-auto">
      <Routes>


        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>

    </div>
  )
}

export default App
