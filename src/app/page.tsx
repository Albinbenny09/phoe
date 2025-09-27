import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBanner from "@/components/FeaturesBanner";
import PopularProducts from "@/components/PopularProducts";
import About from "@/components/About";
import ProductCategories from "@/components/ProductCategories";
import PartnersCarousel from "@/components/PartnersCarousel";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturesBanner />
        <PopularProducts />
        <ProductCategories />
        <About />
       
        <Testimonials />
        <PartnersCarousel />
       
      </main>
      <Footer />
    </div>
  );
}
