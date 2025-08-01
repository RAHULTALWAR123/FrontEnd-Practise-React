import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './components/Home'
import Pagination from "./components/Pagination"
import Timer from "./components/Timer"
import Form from "./components/Form"


function App() {

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Page" element= {<Pagination/>} />
        <Route path="/time" element= {<Timer/>} />
        <Route path="/form" element= {<Form/>} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
