import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import {HomePage} from './components/HomePage'
import {DriftPage} from './components/DriftPage'
import {TimeAttackPage} from './components/TimeAttackPage'
import {ForzaPage} from './components/ForzaPage'

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white"
}

function App() {

  return (
    <div className='div-main'>
      <Header />
      <div className='divider' />
      <Routes>
        <Route className='route'
          path='/'
          element={<HomePage className='page'/>}
        />
        <Route className='route'
          path='/DriftPage'
          element={<DriftPage className='page'/>}
        />
        <Route className='route'
          path='TimeAttackPage'
          element={<TimeAttackPage className='page'/>}
          />
        <Route className='route'
          path='ForzaPage'
          element={<ForzaPage className='page'/>}
        />
      </Routes>
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <NavLink className='nav' to='/'>Главная</NavLink>
      <NavLink className='nav' to='/DriftPage'>Дрифт-такси</NavLink>
      <NavLink className='nav' to='/TimeAttackPage'>Time Attack</NavLink>
      <NavLink className='nav' to='/ForzaPage'>Forza Karting</NavLink>
    </div>
  )
}

const Page404 = () => {

}

const Redirect = () => {

}

export default App
