import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmpListing from './components/EmpListing'
import EmpCreate from './components/EmpCreate';
import EmpDetails from './components/EmpDetails';
import EmpEdit from './components/EmpEdit';

const App = () => {
  return (
    <div className='w-full pt-2'>
        <h1 className=' text-center '>React JS CRUD</h1>
        <Routes>
            <Route path="/" element={<EmpListing/>}/>
            <Route path="/employee/create" element={<EmpCreate/>}/>
            <Route path="/employee/detail/:id" element={<EmpDetails/>}/>
            <Route path="/employee/edit/:id" element={<EmpEdit/>}/>
        </Routes>
    </div>
  )
}

export default App