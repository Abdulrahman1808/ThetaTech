import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import DeviceShowcase from "./components/DeviceShowcase";
import IntroVideo from "./components/IntroVideo";
import ProjectsShowcase from "./components/ProjectsShowcase";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // GSAP-style scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          // Check if element has data-animate attribute
          const animationType =
            target.getAttribute("data-animate");

          if (animationType === "fade-up") {
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
          } else if (animationType === "fade-left") {
            target.style.opacity = "1";
            target.style.transform = "translateX(0)";
          } else if (animationType === "fade-right") {
            target.style.opacity = "1";
            target.style.transform = "translateX(0)";
          } else if (animationType === "scale-in") {
            target.style.opacity = "1";
            target.style.transform = "scale(1)";
          }

          // Text split animation for headings
          if (target.querySelector("[data-split]")) {
            const splitElements =
              target.querySelectorAll("[data-split]");
            splitElements.forEach((element, index) => {
              setTimeout(() => {
                (element as HTMLElement).style.opacity = "1";
                (element as HTMLElement).style.transform =
                  "translateY(0)";
              }, index * 100);
            });
          }

          // Stagger animation for child elements
          const staggerElements =
            target.querySelectorAll(".stagger-item");
          staggerElements.forEach((element, index) => {
            setTimeout(() => {
              (element as HTMLElement).style.opacity = "1";
              (element as HTMLElement).style.transform =
                "translateY(0)";
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Set initial states and observe elements
    const animatedElements =
      document.querySelectorAll("[data-animate]");
    animatedElements.forEach((element) => {
      const target = element as HTMLElement;
      const animationType = target.getAttribute("data-animate");

      // Set initial styles
      target.style.transition =
        "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      target.style.opacity = "0";

      if (animationType === "fade-up") {
        target.style.transform = "translateY(40px)";
      } else if (animationType === "fade-left") {
        target.style.transform = "translateX(-40px)";
      } else if (animationType === "fade-right") {
        target.style.transform = "translateX(40px)";
      } else if (animationType === "scale-in") {
        target.style.transform = "scale(0.9)";
      }

      observer.observe(target);
    });

    // Observe sections for general animations
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href && href !== "#") {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navigation />

      <div data-animate="fade-up">
        <Hero />
      </div>

      <section id="showcase" data-animate="fade-up">
        <DeviceShowcase />
      </section>

      <section id="intro" data-animate="fade-up">
        <IntroVideo />
      </section>

      <section id="projects" data-animate="fade-up">
        <ProjectsShowcase />
      </section>

      <section id="about" data-animate="fade-up">
        <WhyChooseUs />
      </section>

      <section id="testimonials" data-animate="fade-up">
        <Testimonials />
      </section>

      <section id="contact" data-animate="fade-up">
        <Footer />
      </section>
    </div>
  );
}