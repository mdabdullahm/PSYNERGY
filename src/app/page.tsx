import AddictionManagement from "@/components/home/AddictionRiskManagement";
import Contact from "@/components/home/Contact";
import CoreServices from "@/components/home/CoreServices";
import Hero from "@/components/home/Hero";
import HREmployeeSupport from "@/components/home/HREmployeeSupport";
import Introduction from "@/components/home/Introduction";
import MentalHealthDetail from "@/components/home/MentalHealthDetail";
import ServiceCategories from "@/components/home/ServiceCategories";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <main className="py-20">
      <Hero/>
      <Introduction/>
      <CoreServices/>
      <ServiceCategories/>
      <MentalHealthDetail/>
      <AddictionManagement/>
      <HREmployeeSupport/>
      <Team/>
      <Contact/>
    </main>
  );
}
