import React, { useRef } from 'react'

import "./Hero.scss"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { name, scrollIndicator, tagline } from '../../../public/constants/landingPageConstants'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  const heroRef = useRef(null)
  const zoomRef = useRef(null)
  const stRef = useRef(null)

  useGSAP(() => {
    const heroE1 = heroRef.current;
    const zoomE1 = zoomRef.current;

    if (!heroE1 || !zoomE1) return

    const mm = gsap.matchMedia()

    mm.add({
      mobile: "(max-width:767px)",
      tablet: "(min-width:768px) and (max-width:1023px)",
      desktop: "(min-width:1024px)",
      reduce: "(prefers-reduced-motion:reduce)",
      short: "(max-width:650px)"
    },
      (ctx) => {
        const { mobile, tablet,desktop, reduce, short } = ctx.conditions

        if (reduce) {
          gsap.set(zoomE1, { clearProps: "transform, opacity" })
          return
        }

        const scaleTo = mobile ? 6 : tablet ? 8 : 10;
        const endDist = short ? "+=55%" : mobile ? "+=70%" : "+=80%"

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: heroE1,
            start: "top top",
            end: endDist,
            scrub:1.2,
            pin:true,
            anticipatePin:1,
            invalidateOnRefresh:true,
            id:"heroPin"
            
          }
        })

        gsap.set(zoomE1, {scale:1,opacity:1, force3D:true})


        tl.to(zoomE1 , {scale:scaleTo,opacity:0})

        stRef.current= tl.scrollTrigger

        return()=> {
          tl.scrollTrigger?.kill()
         
          tl.kill()

        }


      }
    )


    return ()=>mm.revert()

  },[])


  return (
    <section className='hero' id='home' ref={heroRef}>
      <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-zoom" ref={zoomRef}>
            <h1 className="hero-title">{name}</h1>
            <div className="hero-sub">
              <span className="line"></span>
              
                <span className="tag-line">{tagline}</span>
                <div className="line"></div>
            </div>
            <div className="scroll-down-indicater">
              <img src="/assets/images/common/scroll-down.png" alt="" />
              <p>{scrollIndicator}</p>
            </div>
          </div>
        </div>
      
    </section>

  )






}

export default Hero