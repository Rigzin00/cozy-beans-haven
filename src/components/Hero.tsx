
import { Button } from "@/components/ui/button";
import { Coffee, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-cream to-tan py-12 md:py-20 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
            <Clock size={16} className="text-coffee-medium" />
            <span className="text-sm font-medium text-coffee-medium">Open today from 8am - 8pm</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-4 leading-tight">
            Where Every Cup <br className="hidden md:block" /> Brings <span className="text-terracotta">Happiness</span>
          </h1>
          
          <p className="text-coffee-medium text-lg mb-8 max-w-md mx-auto md:mx-0">
            Experience the perfect blend of quality coffee, delicious treats, and a warm atmosphere at Happy Coffee Shop.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="btn-primary">
              <Coffee size={18} />
              Order Online
            </Button>
            <Button variant="outline" className="border-coffee-medium text-coffee-dark hover:bg-coffee-medium/10">
              View Menu
            </Button>
          </div>
        </div>
        
        <div className="relative mt-8 md:mt-0">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-terracotta/10 rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Coffee cup with latte art" 
            className="rounded-2xl shadow-lg mx-auto animate-float max-w-[300px] md:max-w-[400px]"
          />
          
          <div className="absolute top-10 -left-4 md:top-16 md:-left-8 bg-white py-3 px-5 rounded-lg shadow-md animate-float">
            <p className="font-medium text-coffee-dark">Fresh Beans Daily</p>
          </div>
          
          <div className="absolute bottom-10 -right-4 md:bottom-16 md:-right-8 bg-white py-3 px-5 rounded-lg shadow-md animation-delay-1000">
            <div className="flex items-center gap-2">
              <span className="font-medium text-coffee-dark">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-terracotta" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
