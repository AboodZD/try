
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoreDirectory from '@/components/StoreDirectory';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const StoresPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Stores</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-clovermall-gray">Store Directory</h1>
            <p className="text-clovermall-gray-light mt-2">Find all stores available at CLOVERMALL</p>
          </div>
          
          {/* Store Directory Component */}
          <StoreDirectory />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoresPage;
