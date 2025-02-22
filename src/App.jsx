
import './App.css'
import Home from './Home'
import TicTacToe from './TicTacToe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='tic' element={<TicTacToe/>}/>
        </Routes>
      </BrowserRouter>
  
    </>)
}

export default App
