import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";

const About = lazy(() => import("./components/About.tsx"));
const Projects = lazy(() => import("./components/Projects.tsx"));
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { Layout } from "./components/Layout";

function App(): React.JSX.Element {
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
