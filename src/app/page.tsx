import Contact from "@/components/home/Contact";
import CoreServices from "@/components/home/CoreServices";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import ServiceCategories from "@/components/home/ServiceCategories";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <main className="py-20">
      <Hero/>
      <Introduction/>
      <CoreServices/>
      <ServiceCategories/>
      <Team/>
      <Contact/>
    </main>
  );
}
