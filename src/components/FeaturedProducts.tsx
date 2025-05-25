
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from './ProductCard';
import { featuredProducts, Product } from '@/data/products';

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Extract unique categories
  const categories = ['all', ...new Set(featuredProducts.map(p => p.category))];
  
  // Filter products based on active tab
  const filteredProducts = activeTab === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.category === activeTab);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-clovermall-gray">Featured Products</h2>
        <p className="text-center text-clovermall-gray-light mb-10">Handpicked selection of quality items</p>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-clovermall-gray/5">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button className="bg-clovermall-blue hover:bg-clovermall-blue-light">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
