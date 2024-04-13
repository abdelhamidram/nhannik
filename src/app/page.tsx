import NavBar from "@/components/NavBar";
import HeroSec from "@/components/HeroSec";
import Content from "@/components/Content";
import BreadCrumb from "@/components/Breadcrumb/BreadCrumb";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar/>
      <BreadCrumb/>
      <HeroSec/> 
      <Content />
      <Footer />
    </>
  );
}
