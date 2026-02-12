import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/hero";
import GettingStarted from "@/components/landing/GettingStarted";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <GettingStarted />
      <Features />
      <Footer />
    </div>
  );
}
