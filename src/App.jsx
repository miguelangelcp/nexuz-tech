import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Process from "./components/Process/Process";
import Brands from "./components/Brands/Brands";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import Preloader from "./components/Preloader/Preloader";

import MotionWrapper from "./animations/MotionWrapper";

function App() {
  return (
    <>
      <Preloader />

      <Navbar />
      <Hero />

      <MotionWrapper y={55}>
        <WhyChooseUs />
      </MotionWrapper>

      <MotionWrapper y={55}>
        <Process />
      </MotionWrapper>

      <MotionWrapper y={45}>
        <Brands />
      </MotionWrapper>

      <MotionWrapper y={55} scale={0.98}>
        <Gallery />
      </MotionWrapper>

      <MotionWrapper y={55}>
        <Testimonials />
      </MotionWrapper>

      <MotionWrapper y={55}>
        <FAQ />
      </MotionWrapper>

      <MotionWrapper y={55}>
        <Contact />
      </MotionWrapper>

      <MotionWrapper y={25}>
        <Footer />
      </MotionWrapper>

      <FloatingButtons />
    </>
  );
}

export default App;