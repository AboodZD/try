
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import SpecialItems from '@/components/SpecialItems';
import StoreDirectory from '@/components/StoreDirectory';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategoryGrid limit={6} />
        <FeaturedProducts />
        <SpecialItems />
        <StoreDirectory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
