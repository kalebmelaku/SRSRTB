import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Jobs from './pages/job'
import JobApplicationForm from './pages/apply'

export default function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/apply' element={<JobApplicationForm/>} />
      </Routes>
    </>
  )
}