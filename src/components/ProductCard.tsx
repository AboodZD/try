
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.tag && (
            <div className="special-tag">
              {product.tag}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-clovermall-gray truncate">
            {product.name}
          </h3>
          <p className="text-clovermall-gray-light text-sm line-clamp-2 mt-1 h-10">
            {product.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-clovermall-green font-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-clovermall-gray-light">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
