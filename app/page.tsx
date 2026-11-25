import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/Practice";
import HowWeWork from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import Reasons from "@/components/sections/Reasons";
import Cases from "@/components/sections/Cases";
import Attorneys from "@/components/sections/Attorneys";
import Insights from "@/components/sections/Insights";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <HowWeWork />
      <Testimonials />
      <Reasons />
      <Cases />
      <Attorneys />
      <Insights />
      <Faq />
      <Cta />
    </>
  );
}
