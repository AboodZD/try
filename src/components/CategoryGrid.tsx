
import { Link } from 'react-router-dom';
import { categories, Category } from '@/data/products';
import { ArrowRight } from 'lucide-react';

interface CategoryGridProps {
  limit?: number;
}

const CategoryGrid = ({ limit }: CategoryGridProps) => {
  const displayedCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-clovermall-gray">Shop by Category</h2>
        <p className="text-center text-clovermall-gray-light mb-10">Explore our wide range of products</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link to={`/category/${category.id}`} className="category-card group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="overlay">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
            <div className="flex items-center text-white/80 text-sm group-hover:text-clovermall-blue transition-colors">
              <span>Explore</span>
              <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryGrid;
