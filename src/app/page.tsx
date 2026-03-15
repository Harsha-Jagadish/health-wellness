import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ImageDivider from "@/components/ImageDivider";
import Services from "@/components/Services";
import Editorial from "@/components/Editorial";
import Nutrition from "@/components/Nutrition";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <ImageDivider />
        <Services />
        <Editorial />
        <Nutrition />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
