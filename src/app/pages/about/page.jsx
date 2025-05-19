"use client";
import "./about.css";
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

  return (
      <div className="page" ref={container}>
        <section className="about-hero">
          <div className="about-hero-bg">
            <img src="/img/ztz-27-min.jpg" alt=" Hero Image" />
          </div>

          <div className="container">
            <AnimatedH1 delay={1}>Shaping the Future of Creativity</AnimatedH1>

            <div className="about-tagline">
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  Who We Are
                </AnimatedCopy>
              </div>
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  Where strategy meets storytelling—crafting bold, unforgettable
                  brand experiences.
                </AnimatedCopy>
              </div>
            </div>
            <AnimatedH1 delay={1.2}>with Vision and Innovation</AnimatedH1>
          </div>
        </section>

        <section className="about-copy">
          <div className="container">
            <AnimatedCopy tag="h2">The Origin</AnimatedCopy>

            <div className="about-copy-wrapper">
              <AnimatedCopy>
                ISOChrome is more than a creative agency—we are storytellers,
                strategists, and visionaries dedicated to redefining brand
                communication. We craft experiences that go beyond visuals,
                blending strategy with creativity to create lasting impact.
                Every brand has a unique identity, and we specialize in bringing
                that identity to life with immersive storytelling, cutting-edge
                design, and audience-driven narratives. From concept to
                execution, we ensure that every campaign is crafted with
                precision and passion. We don’t just create content—we engineer
                experiences that inspire engagement and action.
              </AnimatedCopy>

              <AnimatedCopy delay={0.25}>
                Our approach is built on innovation, ensuring every project is
                fresh, dynamic, and purpose-driven. Whether it's **brand
                strategy, influencer collaborations, or digital campaigns**, we
                help brands stand out, connect authentically, and leave a
                lasting impression. We combine creative vision with analytical
                insights to develop strategies that not only capture attention
                but also drive real impact in an ever-evolving digital
                landscape. We believe in the power of collaboration. By working
                closely with our clients, we align our creative strategies with
                their business objectives, ensuring that every campaign is
                tailored to meet their unique goals.
              </AnimatedCopy>

              <AnimatedCopy delay={0.5}>
                At ISOChrome, we push boundaries, challenge conventions, and
                shape the future of branding. With every campaign, we aim to
                turn ideas into movements, transforming how brands interact with
                their audiences in a rapidly evolving digital world. Creativity
                isn’t just about aesthetics—it’s about impact, engagement, and
                innovation that goes beyond the expected. As pioneers in the
                creative space, we thrive on experimentation and fearless
                execution.
              </AnimatedCopy>

              <div className="about-copy-img">
                <div className="about-copy-img-wrapper">
                  <img
                    src="/img/ztz-27-min.jpg"
                    alt="ISOChrome Creative Team at Work"
                    speed={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise">
          <div className="expertise-header">
            <div className="container">
              <div className="row">
                <AnimatedH1 animateOnScroll={true}>
                  What we <br /> do best
                </AnimatedH1>

                <div className="expertise-img-1">
                  <img src="/img/ztz-27-min.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="expertise-img-2">
                  <img src="/img/ztz-27-min.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="col"></div>
            <div className="col">
              <div className="service">
                <AnimatedCopy tag="h3">(01)</AnimatedCopy>
                <AnimatedCopy tag="h2">Brand Strategy</AnimatedCopy>
                <AnimatedCopy>01 Market Research & Insights</AnimatedCopy>
                <AnimatedCopy>02 Positioning & Differentiation</AnimatedCopy>
                <AnimatedCopy>03 Audience Analysis</AnimatedCopy>
                <AnimatedCopy>04 Messaging Framework</AnimatedCopy>
                <AnimatedCopy>05 Long-Term Growth Planning</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(02)</AnimatedCopy>
                <AnimatedCopy tag="h2">Visual Identity</AnimatedCopy>
                <AnimatedCopy>01 Logo & Brand Guidelines</AnimatedCopy>
                <AnimatedCopy>02 Color Theory & Typography</AnimatedCopy>
                <AnimatedCopy>03 Design Systems & Assets</AnimatedCopy>
                <AnimatedCopy>04 Illustration & Iconography</AnimatedCopy>
                <AnimatedCopy>05 Brand Voice & Personality</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(03)</AnimatedCopy>
                <AnimatedCopy tag="h2">Digital Experiences</AnimatedCopy>
                <AnimatedCopy>01 Web Design & Development</AnimatedCopy>
                <AnimatedCopy>02 UI/UX & Interactive Design</AnimatedCopy>
                <AnimatedCopy>03 Prototyping & Wireframing</AnimatedCopy>
                <AnimatedCopy>04 Mobile & Web App Interfaces</AnimatedCopy>
                <AnimatedCopy>05 Performance & Accessibility</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(04)</AnimatedCopy>
                <AnimatedCopy tag="h2">Content & Storytelling</AnimatedCopy>
                <AnimatedCopy>01 Creative Copywriting</AnimatedCopy>
                <AnimatedCopy>02 Video & Motion Graphics</AnimatedCopy>
                <AnimatedCopy>03 Social Media Campaigns</AnimatedCopy>
                <AnimatedCopy>04 Content Strategy</AnimatedCopy>
                <AnimatedCopy>05 Brand Narratives</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(05)</AnimatedCopy>
                <AnimatedCopy tag="h2">Marketing & Growth</AnimatedCopy>
                <AnimatedCopy>01 SEO & Performance Optimization</AnimatedCopy>
                <AnimatedCopy>02 Ad Campaigns & Paid Media</AnimatedCopy>
                <AnimatedCopy>03 Email & CRM Strategies</AnimatedCopy>
                <AnimatedCopy>04 Conversion Rate Optimization</AnimatedCopy>
                <AnimatedCopy>05 Analytics & Insights</AnimatedCopy>
              </div>
            </div>
          </div>
        </section>

        <section className="about-outro-banner">
          <div className="about-outro-img">
            <img src="/img/ztz-27-min.jpg" alt="" speed={0.2} />
          </div>
        </section>

        <section className="founder-voice">
          <div className="container">
            <AnimatedCopy tag="h2">
              "ISOChrome revolutionizes influencer marketing by seamlessly
              connecting brands with powerful voices across social media,
              crafting narratives that leave a lasting impact.”
            </AnimatedCopy>

            <div className="founder-image">
              <img src="/img/ztz-27-min.jpg" alt="" />
            </div>
            <div className="founter-info">
              <AnimatedCopy>Alvah Jehohanan</AnimatedCopy>
              <AnimatedCopy>Founder</AnimatedCopy>
            </div>
          </div>
        </section>

      </div>
  );
};

export default page;