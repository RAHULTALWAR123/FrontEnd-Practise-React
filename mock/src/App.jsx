import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './components/Home'
import Pagination from "./components/Pagination"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Page" element= {<Pagination/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
