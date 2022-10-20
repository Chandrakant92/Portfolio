import '../styles/globals.css'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Services from './Component/Services'
import Experience from './Component/Experience'
import Contact from './Component/Contact'
import Fotter from './Component/Fotter'






function MyApp({ Component, pageProps }) {
  return <>

  <Navbar/>
  <Component {...pageProps} />
    {/* <About/> */}
  {/* <Services/> */}
  
  <Fotter/>

  </>
}

export default MyApp
