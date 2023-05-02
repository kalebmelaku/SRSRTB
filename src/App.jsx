// import Banner from "./components/banner"
// import NavBar from "./components/navbar"
// import About from "./components/about"
// import Vacancy from "./components/vacancy"
// import Partners from "./components/partners"
// import Carousal from "./components/carousal"
// export default function App() {


//   return (
//     <>
//       <Banner/>     
//       <NavBar/>
//       <Carousal/>
//       <About/>
//       <Partners/>
//       <Vacancy/>
//       <Banner/>     
//     </>
//   )
// }

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