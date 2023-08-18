import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import PostNew from './components/PostNew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route
          path='/posts'
          element={<MainPage />}
        />
        <Route
          path='/posts/new'
          element={<PostNew />}
        />
        {/* <Route
          path='/posts/:tId'
          element={<MainPage />}
        /> */}
      </Routes>
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <NavLink className='nav' to='/posts'>Главная</NavLink>
      <NavLink className='nav' to='/posts/new'>Создать</NavLink>
      {/* <NavLink className='nav' to='/posts/:tId'>Пункт</NavLink> */}
    </div>
  )
}

export default App
