import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './components/Home'
import Pagination from "./components/Pagination"
import Timer from "./components/Timer"
import Form from "./components/Form"
import { useThemeStore } from "./stores/useThemeStore"
import { useEffect } from "react"
import Dropdown from "./components/Dropdown"
import Accordian from "./components/Accordian"


function App() {
  const {theme} = useThemeStore();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Page" element= {<Pagination/>} />
        <Route path="/time" element= {<Timer/>} />
        <Route path="/form" element= {<Form/>} />
        <Route path="/dropdown" element= {<Dropdown/>} />
        <Route path="/accordian" element= {<Accordian/>} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
