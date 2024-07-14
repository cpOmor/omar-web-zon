import Hero from "./Component/ui/home/hero/Hero";
import About from "./Component/ui/home/about/About";
import Services from "./Component/ui/home/services/Services";
import Projects from "./Component/ui/home/projects/Projects";
import Skillet from "./Component/ui/home/skillet/Skillet";
import Testimonial from "./Component/ui/home/testimonial/Testimonial";
import Contact from "./Component/ui/home/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skillet />
      <Testimonial />
      <Contact />
    </>
  );
}
