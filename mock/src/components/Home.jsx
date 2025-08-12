// import React from 'react'

import { useThemeStore } from "../stores/useThemeStore";

function Home() {
    const {toggleTheme} = useThemeStore();
  return (
    <div className="text-center p-20">
      <h1 className="text-3xl font-mono font-bold">Welcome to mock Practise</h1>
      <p className="text-xl font-mono">this is a simple mock interview practise for React and javascript</p>

      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <button 
        onClick={toggleTheme}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Theme</button>
      </div>

    </div>

  )
}

export default Home
