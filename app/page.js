import Header from "@/components/Header";
import Experience from "@/components/ExperienceCard";
import CertificationsGallery from "@/components/CertificationsGallery";
import Projects from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import ToolsAndConcepts from "@/components/ToolsAndConcepts";

export default function Home() {
  return (
    <>
      <Header/>
      <Experience/>
      <CertificationsGallery/>
      <Projects/>
      <ToolsAndConcepts/>
      <ContactForm/>
    </>
  );
}
