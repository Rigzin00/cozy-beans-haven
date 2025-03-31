
import { Button } from "@/components/ui/button";
import { Coffee, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-tan">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Coffee shop interior" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white p-4 rounded-lg shadow-md max-w-[200px]">
                <p className="text-coffee-dark font-medium text-sm">
                  Founded in 2015 with a passion for great coffee and community
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="section-title">Our Story</h2>
            <p className="text-coffee-medium mb-6">
              Happy Coffee Shop was founded by coffee enthusiasts with a simple mission: to serve exceptional coffee in a warm, welcoming environment. What began as a small corner café has grown into a beloved community gathering place.
            </p>
            <p className="text-coffee-medium mb-8">
              We're committed to sourcing only the finest beans, supporting ethical farming practices, and creating a space where everyone feels at home. Every cup we serve carries our passion and dedication to the craft of coffee.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-cream p-4 rounded-lg">
                <div className="flex justify-center md:justify-start">
                  <Coffee size={24} className="text-terracotta mb-2" />
                </div>
                <h3 className="font-heading font-semibold text-coffee-dark mb-1">Premium Beans</h3>
                <p className="text-coffee-medium text-sm">Sourced ethically from around the world</p>
              </div>
              
              <div className="bg-cream p-4 rounded-lg">
                <div className="flex justify-center md:justify-start">
                  <Users size={24} className="text-terracotta mb-2" />
                </div>
                <h3 className="font-heading font-semibold text-coffee-dark mb-1">Community</h3>
                <p className="text-coffee-medium text-sm">Creating connections through coffee</p>
              </div>
              
              <div className="bg-cream p-4 rounded-lg">
                <div className="flex justify-center md:justify-start">
                  <Award size={24} className="text-terracotta mb-2" />
                </div>
                <h3 className="font-heading font-semibold text-coffee-dark mb-1">Quality</h3>
                <p className="text-coffee-medium text-sm">Excellence in every cup we serve</p>
              </div>
            </div>
            
            <Button className="btn-secondary">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
