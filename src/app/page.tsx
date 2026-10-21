import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InstagramSection from "@/components/InstagramSection";
import JsonLd from "@/components/JsonLd";
import MobileActionBar from "@/components/MobileActionBar";
import ReviewsSection from "@/components/ReviewsSection";

// Google yorumları 24 saatte bir yenilenir (ISR).
export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        İçeriğe geç
      </a>
      <Header />
      <main id="icerik">
        <Hero />
        <About />
        <InstagramSection />
        <ReviewsSection />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
      <JsonLd />
    </>
  );
}
