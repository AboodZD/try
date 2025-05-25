
import ProductCard from './ProductCard';
import { specialItems } from '@/data/products';
import { Button } from '@/components/ui/button';

const SpecialItems = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-clovermall-green/5 to-clovermall-blue/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-clovermall-gray">Special Collection</h2>
            <p className="text-clovermall-gray-light mt-2">Exclusive items you won't find anywhere else</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-clovermall-green text-clovermall-green hover:bg-clovermall-green hover:text-white">
            View All Specials
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialItems;
