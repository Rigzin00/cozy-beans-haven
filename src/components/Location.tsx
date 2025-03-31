
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-16 bg-gradient-to-b from-cream to-tan">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Visit Us</h2>
          <p className="section-subtitle">We'd love to see you in our cozy shop</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-heading font-semibold text-xl text-coffee-dark mb-6">Happy Coffee Shop</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-terracotta w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">123 Coffee Street</p>
                  <p className="text-coffee-medium">Beanville, BC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-terracotta w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">Opening Hours:</p>
                  <p className="text-coffee-medium">Monday - Friday: 7am - 8pm</p>
                  <p className="text-coffee-medium">Saturday - Sunday: 8am - 9pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-terracotta w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">Contact:</p>
                  <p className="text-coffee-medium">(123) 456-7890</p>
                  <p className="text-coffee-medium">hello@happycoffee.com</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full btn-primary">Get Directions</Button>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] h-full">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80" 
              alt="Coffee shop interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
