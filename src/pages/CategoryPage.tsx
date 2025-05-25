
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { categories, featuredProducts, specialItems } from '@/data/products';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [activeCategory, setActiveCategory] = useState<any>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the category that matches the URL parameter
    const category = categories.find(cat => cat.id === categoryId);
    setActiveCategory(category);
    
    // Filter products by category
    if (category) {
      // Combine all products and filter by category
      const allProducts = [...featuredProducts, ...specialItems];
      const categoryProducts = allProducts.filter(product => product.category === category.id);
      setFilteredProducts(categoryProducts);
    }
  }, [categoryId]);

  if (!activeCategory) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p>Category not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{activeCategory.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Category Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-clovermall-gray">{activeCategory.name}</h1>
            <p className="text-clovermall-gray-light mt-2">{activeCategory.description || `Browse our selection of ${activeCategory.name} products`}</p>
          </div>
          
          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-clovermall-gray mb-4">No products found in this category.</p>
              <Button variant="outline" asChild>
                <a href="/">Return to Home</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
