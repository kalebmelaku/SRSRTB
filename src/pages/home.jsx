import Banner from "../components/banner"
import NavBar from "../components/navbar"
import About from "../components/about"
import Vacancy from "../components/vacancy"
import Partners from "../components/partners"
import Carousal from "../components/carousal"
import Footer from "../components/footer"
export default function Home() {


  return (
    <>
      <Banner/>     
      <NavBar/>
      <Carousal/>
      <About/>
      <Partners/>
      <Vacancy/>
      <Footer/>
      {/* <Banner/>      */}
    </>
  )
}


