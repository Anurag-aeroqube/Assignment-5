import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '@/Features/Home/Home'
import Books from '../src/Features/Books/Book'
import './App.css'
import Navbar from './components/Header/Navbar'
import Character from './Features/Characters/Character';
import Houses from './Features/Houses/Houses';
import Spells from './Features/Spells/Spells';
import Loader from "./components/Header/Loader"
import { LoadingProvider } from "./Context/LoadingProvider"



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">{children}</div>

      {/* Footer */}
      <footer className="w-full mx-auto border-t py-6  ">
        <div className=' w-[92%]  mx-auto'>
          <p className='text-sm md:text-left text-center mx-auto font-semibold text-muted-foreground'>
            © 2025 Potter API Explorer. All rights reserved.
          </p>

        </div>


      </footer>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <LoadingProvider>
        <Loader/>
        <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/characters" element={<Character />} />
            <Route path='/spells' element={<Spells/>} />
            <Route path='/houses' element={<Houses/>} />

          </Routes>
        </Layout>
      </Router>
      </LoadingProvider>
      



    </>
  )
}

export default App
