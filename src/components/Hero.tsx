import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
    title: "Welcome to Madras College",
    subtitle: "Excellence in Education Since 1889",
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
    title: "Shape Your Future",
    subtitle: "World-Class Education for Tomorrow's Leaders",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
    title: "Innovation & Excellence",
    subtitle: "Join Our Community of Learners",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 flex h-full items-center justify-center px-4">
            <div className="text-center text-white">
              <h1 className="mb-4 text-5xl font-bold md:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
                {slide.title}
              </h1>
              <p className="mb-8 text-xl md:text-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Admissions
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
