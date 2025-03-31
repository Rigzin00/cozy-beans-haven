
import { Button } from "@/components/ui/button";
import { Coffee, CupSoda, Cake } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'coffee' | 'drink' | 'food';
}

const products: Product[] = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our creamy blend with a hint of vanilla and caramel.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: 'coffee'
  },
  {
    id: 2,
    name: "Cold Brew",
    description: "Smooth and rich cold brew steeped for 12 hours.",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: 'coffee'
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    description: "Freshly baked with organic blueberries.",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: 'food'
  },
  {
    id: 4,
    name: "Strawberry Smoothie",
    description: "Made with fresh strawberries and banana.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1553530666-ba11a90a0875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
    category: 'drink'
  }
];

const FeaturedProducts = () => {
  return (
    <section id="menu" className="py-16 bg-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Featured Items</h2>
          <p className="section-subtitle">Handcrafted with love and the finest ingredients</p>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 my-8">
            <Button variant="outline" className="rounded-full border-coffee-medium text-coffee-dark bg-transparent hover:bg-coffee-medium/10">
              <Coffee size={18} className="mr-2" />
              All Items
            </Button>
            <Button variant="outline" className="rounded-full border-coffee-medium text-coffee-dark bg-transparent hover:bg-coffee-medium/10">
              <Coffee size={18} className="mr-2" />
              Coffee
            </Button>
            <Button variant="outline" className="rounded-full border-coffee-medium text-coffee-dark bg-transparent hover:bg-coffee-medium/10">
              <CupSoda size={18} className="mr-2" />
              Drinks
            </Button>
            <Button variant="outline" className="rounded-full border-coffee-medium text-coffee-dark bg-transparent hover:bg-coffee-medium/10">
              <Cake size={18} className="mr-2" />
              Food
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-semibold text-lg">{product.name}</h3>
                  <span className="font-heading font-bold text-terracotta">{product.price}</span>
                </div>
                <p className="text-coffee-medium text-sm mb-4">{product.description}</p>
                <Button variant="outline" className="w-full border-coffee-medium text-coffee-dark hover:bg-coffee-medium/10">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">View Full Menu</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
