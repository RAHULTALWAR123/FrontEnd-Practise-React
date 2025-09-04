import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './components/Home'
import Pagination from "./components/Pagination"
import Timer from "./components/Timer"
import Form from "./components/Form"
import { useThemeStore } from "./stores/useThemeStore"
import { useEffect } from "react"
import Dropdown from "./components/Dropdown"
import Accordian from "./components/Accordian"
import Test from "./components/Test"
import Photos from "./components/Photos"
import Gift from "./components/Gift"
import Progress from "./components/Progress"
import Otp from "./components/Otp"
import ProductFiltering from "./components/ProductFiltering"
import SearchSuggestion from "./components/SearchSuggestion"
import Test1 from "./components/test1"


function App() {
  const {theme} = useThemeStore();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const progress =4; 

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
        <Route path="/test" element = {<Test/>} />
        <Route path="/search" element = {<SearchSuggestion/>} />
        <Route path="/photos" element = {<Photos/>} />
        <Route path="/gift" element = {<Gift/>} />
        <Route path="/progress" element = {<Progress progress={progress}/>} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/products" element={<ProductFiltering/>} />
        <Route path="/testing" element={<Test1/>} />
      </Routes> 
    </BrowserRouter>


    </div>
  )
}

export default App
