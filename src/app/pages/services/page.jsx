"use client";
import "./services.css";
import { useEffect, useRef, useState } from "react";
import AnimatedH1 from "../../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Image from 'next/image';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const page = () => {
  const container = useRef();
  const [windowWidth, setWindowWidth] = useState(0);
  const scrollTriggerRef = useRef(null);
  const imageRef = useRef();

  const serviceImages = [
    "/img/ztz7.jpg",
    "/img/ztz1.jpg",
    "/img/ztz3.jpg",
    "/img/ztz5.jpg",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useGSAP(
    () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      const timeoutId = setTimeout(() => {
        if (windowWidth > 900) {
          const expertiseSection = document.querySelector(".expertise");
          const expertiseHeader = document.querySelector(".expertise-header");
          const services = document.querySelector(".services");

          if (expertiseSection && expertiseHeader && services) {
            ScrollTrigger.refresh();

            scrollTriggerRef.current = ScrollTrigger.create({
              trigger: expertiseSection,
              start: "top top",
              endTrigger: services,
              end: "bottom bottom",
              pin: expertiseHeader,
              pinSpacing: false,
              onEnter: () => {
                gsap.to(expertiseHeader, { duration: 0.1, ease: "power1.out" });
              },
            });
          }
        }
      }, 100);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timeoutId);

        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
      };
    },
    { dependencies: [windowWidth], scope: container }
  );

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 300);

    return () => {
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const layerQueue = [];
  const MAX_LAYERS = 3;   
  const lastIndexRef = useRef(-1);      // ← track last shown index

  // After your existing useGSAP and second useEffect, add:
  useEffect(() => {
    // kill any old triggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const servicesEls = container.current.querySelectorAll(".service");
    servicesEls.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        onEnter: () => swapImage(i),
        onEnterBack: () => swapImage(i),
      });
    });

    // set initial image
    swapImage(0);
  }, [windowWidth]);


    function swapImage(i) {

      // ← skip if it’s the same as last time
      if (lastIndexRef.current === i) return;
      lastIndexRef.current = i;
      const wrapper = imageRef.current.parentElement;
      
      // 1) create a new img element
      const newImg = document.createElement("img");
      newImg.src = serviceImages[i];
      Object.assign(newImg.style, {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transformOrigin: "center center",
        scale: "0",
        opacity: "0",
        willChange: "transform, opacity",
      });

      // 2) append it & queue it
      wrapper.appendChild(newImg);
      layerQueue.push(newImg);

      // 3) animate it in
      gsap.to(newImg, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          // 4) once animation’s done, prune if too many
          if (layerQueue.length > MAX_LAYERS) {
            const old = layerQueue.shift();  // remove the oldest
            wrapper.removeChild(old);
          }
        },
      });
    }

    
    
    

 
  

  return (
    // <ReactLenis root>
      <div className="page" ref={container}>
        <section className="about-hero">
          <div className="about-hero-bg">
            <img src="/img/ztz6.jpg" alt=" Hero Image" />
          </div>

          <div className="container">
            <AnimatedH1 delay={1}>What We Do Best</AnimatedH1>

            <div className="about-tagline">
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  Our Services
                </AnimatedCopy>
              </div>
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  Where strategy meets storytelling—crafting bold, unforgettable
                  brand experiences.
                </AnimatedCopy>
              </div>
            </div>
            {/* <AnimatedH1 delay={1.2}>with Vision and Innovation</AnimatedH1> */}
          </div>
        </section>


        <section className="expertise">
          <div className="expertise-header">
            <div className="container">
              <div className="row">
                <AnimatedH1 animateOnScroll={true}>
                  Traditional Routine <br />
                  Bench Routine <br />
                  Drum Routine <br />
                  Educational Workshop <br />
                </AnimatedH1>

                <div className="expertise-img-1">
                  <img
                    ref={imageRef}
                    alt="Service illustration"
                    style={{
                      width: "100%",
                      height: "100%",
                      opacity: 1,
                      transformOrigin: "center center",
                      willChange: "opacity, transform"
                    }}
                    loading= "eager"
                  />                
                </div>
              </div>
              <div className="row">
                {/* <div className="expertise-img-2">
                  <img src="/img/ztz-27-min.jpg" alt="" />
                </div> */}
              </div>
            </div>
          </div>

          <div className="services">
            {/* <div className="col"></div> */}
            <div className="col">
              <div className="service">
                <AnimatedCopy tag="h3">(01)</AnimatedCopy>
                <AnimatedCopy tag="h2">Traditional Routine</AnimatedCopy>
                <AnimatedCopy>01 Market Research & Insights</AnimatedCopy>
                <AnimatedCopy>02 Positioning & Differentiation</AnimatedCopy>
                <AnimatedCopy>03 Audience Analysis</AnimatedCopy>
                <AnimatedCopy>04 Messaging Framework</AnimatedCopy>
                <br />
                <AnimatedCopy>Grimdor flayst ventsu klorba, shimfra 
                  noglen praxil trebna. Sovin dratch mupler vestig, pom 
                  beltra quofin zandra keelsGrimdor flayst ventsu klorba,
                  shimfra noglen praxil trebna. Sovin dratch mupler vestig, 
                  pom beltra quofin zandra keels </AnimatedCopy>
                  <br />
                <AnimatedCopy>Grimdor flayst ventsu klorba, shimfra 
                  noglen praxil trebna. Sovin dratch mupler vestig, pom 
                  beltra quofin zandra keelsGrimdor flayst ventsu klorba,
                  shimfra noglen praxil trebna. Sovin dratch mupler vestig, 
                  pom beltra quofin zandra keels </AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(02)</AnimatedCopy>
                <AnimatedCopy tag="h2">Bench Routine</AnimatedCopy>
                <AnimatedCopy>01 Logo & Brand Guidelines</AnimatedCopy>
                <AnimatedCopy>02 Color Theory & Typography</AnimatedCopy>
                <AnimatedCopy>03 Design Systems & Assets</AnimatedCopy>
                <AnimatedCopy>04 Illustration & Iconography</AnimatedCopy>
                <br />
                <AnimatedCopy>Grimdor flayst ventsu klorba, shimfra 
                  noglen praxil trebna. Sovin dratch mupler vestig, pom 
                  beltra quofin zandra keelsGrimdor flayst ventsu klorba,
                  shimfra noglen praxil trebna. Sovin dratch mupler vestig, 
                  pom beltra quofin zandra keels </AnimatedCopy>
                  <br />
                <AnimatedCopy>Grimdor flayst ventsu klorba, shimfra 
                  noglen praxil trebna. Sovin dratch mupler vestig, pom 
                  beltra quofin zandra keelsGrimdor flayst ventsu klorba,
                  shimfra noglen praxil trebna. Sovin dratch mupler vestig, 
                  pom beltra quofin zandra keels </AnimatedCopy>              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(03)</AnimatedCopy>
                <AnimatedCopy tag="h2">Drum Show</AnimatedCopy>
                <AnimatedCopy>01 Web Design & Development</AnimatedCopy>
                <AnimatedCopy>02 UI/UX & Interactive Design</AnimatedCopy>
                <AnimatedCopy>03 Prototyping & Wireframing</AnimatedCopy>
                <AnimatedCopy>04 Mobile & Web App Interfaces</AnimatedCopy>
                <br />
                <AnimatedCopy>Grimdor flayst ventsu klorba, shimfra 
                  noglen praxil trebna. Sovin dratch mupler vestig, pom 
                  beltra quofin zandra keelsGrimdor flayst ventsu klorba,
                  shimfra noglen praxil trebna. Sovin dratch mupler vestig, 
                  pom beltra quofin zandra keels </AnimatedCopy>
                  <br />
                <AnimatedCopy>Grimdor flayst ventsu klorba, shimfra 
                  noglen praxil trebna. Sovin dratch mupler vestig, pom 
                  beltra quofin zandra keelsGrimdor flayst ventsu klorba,
                  shimfra noglen praxil trebna. Sovin dratch mupler vestig, 
                  pom beltra quofin zandra keels </AnimatedCopy>              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(04)</AnimatedCopy>
                <AnimatedCopy tag="h2">Educational Workshop</AnimatedCopy>
                <AnimatedCopy>01 Creative Copywriting</AnimatedCopy>
                <AnimatedCopy>02 Video & Motion Graphics</AnimatedCopy>
                <AnimatedCopy>03 Social Media Campaigns</AnimatedCopy>
                <AnimatedCopy>04 Content Strategy</AnimatedCopy>
                <br />
                <AnimatedCopy>Grimdor flayst ventsu klorba, shimfra 
                  noglen praxil trebna. Sovin dratch mupler vestig, pom 
                  beltra quofin zandra keelsGrimdor flayst ventsu klorba,
                  shimfra noglen praxil trebna. Sovin dratch mupler vestig, 
                  pom beltra quofin zandra keels </AnimatedCopy>
                  <br />
                <AnimatedCopy>Grimdor flayst ventsu klorba, shimfra 
                  noglen praxil trebna. Sovin dratch mupler vestig, pom 
                  beltra quofin zandra keelsGrimdor flayst ventsu klorba,
                  shimfra noglen praxil trebna. Sovin dratch mupler vestig, 
                  pom beltra quofin zandra keels </AnimatedCopy>              </div>
                  <br />

            </div>
            <div className="col"></div>


          </div>
        </section>

        <section className="about-outro-banner">
          <div className="about-outro-img">
            <img src="/img/ztz6.jpg" alt="" speed={0.2} />
          </div>

          <div className="overlay-text">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              Packages
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-white/80">
              Some sub-heading or call to action
            </p>
          </div>
        </section>

        <section className="founder-voice">
          <div className="container">

            <AnimatedCopy tag="h2">
              Wedding Package revolutionizes influencer marketing by seamlessly
              connecting brands with powerful voices across social media,
              crafting narratives that leave a lasting impact.
            </AnimatedCopy>

            <div className="founder-image">
              <img src="/img/ztz6.jpg" alt="" />
            </div>
            <div className="founter-info">
              <AnimatedCopy>Alvah Jehohanan</AnimatedCopy>
              <AnimatedCopy>Founder</AnimatedCopy>
            </div>
          </div>
        </section>

      </div>
    // </ReactLenis>
  );
};

export default page;