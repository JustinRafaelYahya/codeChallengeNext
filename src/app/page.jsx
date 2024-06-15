import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import ProductsOverview from "@/components/ProductsOverview";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <ProductsOverview />
      <Testimonial />
    </div>
  );
};

export default Home;
