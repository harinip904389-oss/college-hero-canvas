import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import NewsTicker from "@/components/NewsTicker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <NewsTicker />
      <Hero />
    </div>
  );
};

export default Index;
