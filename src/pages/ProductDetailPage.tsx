
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { featuredProducts, specialItems } from '@/data/products';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ShoppingBag } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Find the product that matches the URL parameter
    const allProducts = [...featuredProducts, ...specialItems];
    const foundProduct = allProducts.find(prod => prod.id === productId);
    setProduct(foundProduct);
    
    // Find related products with the same category
    if (foundProduct) {
      const related = allProducts
        .filter(prod => prod.category === foundProduct.category && prod.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [productId]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-clovermall-gray mb-4">Product not found</h2>
            <Button variant="outline" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/category/${product.category}`}>
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Product Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              {product.tag && (
                <div className="inline-block bg-clovermall-green text-white text-sm px-3 py-1 rounded-full mb-4 self-start">
                  {product.tag}
                </div>
              )}
              
              <h1 className="text-3xl font-bold text-clovermall-gray">{product.name}</h1>
              <p className="text-2xl font-bold text-clovermall-green mt-2">${product.price.toFixed(2)}</p>
              <div className="mt-6 mb-8">
                <h3 className="text-lg font-semibold text-clovermall-gray mb-2">Description</h3>
                <p className="text-clovermall-gray-light">{product.description}</p>
              </div>
              
              <div className="mt-auto">
                <Button 
                  className="w-full md:w-auto px-8" 
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-clovermall-gray mb-6">Explore Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
