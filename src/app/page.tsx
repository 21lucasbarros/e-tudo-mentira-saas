import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
}
