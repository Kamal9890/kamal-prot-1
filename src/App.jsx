import React, { useEffect } from 'react'

import gsap from "gsap"
import {ScrollSmoother, ScrollTrigger,SplitText } from 'gsap/all'
import Warp from './components/Warp/Warp'
import Cursor from './components/ui/cursor/Cursor'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import WhoAmI from './components/Hero/WhoAmI'
import Experience from './components/Experience/Experience'
import TechStack from './components/TechStack/TechStack'
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'

gsap.registerPlugin (ScrollSmoother,ScrollTrigger,SplitText)

const App = () => {


  useEffect(()=>{
    ScrollSmoother.create({
      smooth:3,
      effects:true,
      normalizeScroll:true
    })

    ScrollTrigger.refresh()
  },[])



  return (
   <>
    <Warp/>
    <Cursor/>

    <div id='smooth-wrapper'>
      <NavBar/>
      <div id='smooth-content'>
        <Hero/>
        <WhoAmI/>
        <Experience/>
        <TechStack/>

        <Projects/>
        <Certifications/>
        <Contact/>

      
    
    


    </div>
    


    </div>
   </>
  )
}

export default App