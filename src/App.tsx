import React, { Suspense, lazy, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = lazy(() => import("./components/About.tsx"));
const Projects = lazy(() => import("./components/Projects.tsx"));
import "./App.css";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { LandingPage } from "./components/LandingPage";
import { Layout } from "./components/Layout";

function App(): React.JSX.Element {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch(`${BACKEND_URL}`);
      } catch (err) {
        console.error("❌ Error tracking visit:", err);
      }
    };
    trackVisit();
  }, []);

  const { ref: aboutRef, inView: aboutVisible } = useInView({
    delay: 100,
    triggerOnce: true,
  });
  return (
    <>
      <Layout>
        <section id="homepage">
          <LandingPage />
        </section>

        <section id="projects">
          <div ref={aboutRef}>
            <Suspense
              fallback={
                <p className="text-center mt-10 animate-pulse">
                  Loading about...
                </p>
              }
            >
              {aboutVisible && <Projects />}
            </Suspense>
          </div>
        </section>

        <section id="about">
          <div ref={aboutRef}>
            <Suspense
              fallback={
                <p className="text-center mt-10 animate-pulse">
                  Loading about...
                </p>
              }
            >
              {aboutVisible && <About />}
            </Suspense>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default App;
