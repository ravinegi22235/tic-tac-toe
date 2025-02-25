
import './App.css'
import Home from './Home'
import TicTacToe from './TicTacToe'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <HashRouter>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='tic' element={<TicTacToe/>}/>
        </Routes>
      {/* </BrowserRouter> */}
      </HashRouter>
  
    </>)
}

export default App
