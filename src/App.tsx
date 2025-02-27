import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '@/Features/Home/Home'
import './App.css'
import Navbar from './components/Header/Navbar'


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">{children}</div>

      {/* Footer */}
      <footer className="w-full mx-auto border-t py-6  ">
        <div className='container lg:w-full md:w-[90%] w-[85%]  mx-auto'>
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
   <Router>
   <Navbar />
   <Layout>
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    {/* <Route path="/books" element={<Books />} /> */}

    </Routes>
   </Layout>
   </Router>

      
       
    </>
  )
}

export default App
