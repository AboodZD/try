
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
    title: 'Welcome to CLOVERMALL',
    subtitle: 'A premium shopping experience',
    cta: 'Explore Stores',
    link: '/stores'
  },
  {
    image: 'https://images.unsplash.com/photo-1573855619003-97b4799dcd8b',
    title: 'Summer Collection',
    subtitle: 'Discover the hottest trends of the season',
    cta: 'Shop Now',
    link: '/category/fashion'
  },
  {
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf',
    title: 'Tech Showcase',
    subtitle: 'The latest innovations at your fingertips',
    cta: 'View Gadgets',
    link: '/category/electronics'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
              <Button size="lg" className="bg-clovermall-green hover:bg-clovermall-green-light">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
