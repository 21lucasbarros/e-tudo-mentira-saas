import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Newsletter from "@/components/newsletter";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Newsletter />
      <Footer />
    </main>
  );
}
