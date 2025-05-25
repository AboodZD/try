
import { useState } from 'react';
import { stores, mallMap, Store } from '@/data/stores';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, Phone, Globe } from 'lucide-react';

const StoreDirectory = () => {
  const [activeFloor, setActiveFloor] = useState('Ground Floor');
  
  // Get unique floor names
  const floorNames = mallMap.floors.map(floor => floor.name);
  
  // Filter stores based on active floor
  const filteredStores = stores.filter(store => {
    const floor = mallMap.floors.find(f => f.name === activeFloor);
    return floor?.stores.includes(store.id);
  });
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-clovermall-gray">Store Directory</h2>
        <p className="text-center text-clovermall-gray-light mb-10">Find your way around CLOVERMALL</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mall Map */}
          <div className="lg:col-span-1">
            <div className="bg-clovermall-gray p-1 rounded-xl overflow-hidden">
              <img
                src={mallMap.image}
                alt="CLOVERMALL Map"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-clovermall-gray">Select Floor</h3>
              <Tabs defaultValue="Ground Floor" onValueChange={setActiveFloor}>
                <TabsList className="bg-clovermall-gray/5 w-full">
                  {floorNames.map(floor => (
                    <TabsTrigger 
                      key={floor} 
                      value={floor}
                      className="flex-1"
                    >
                      {floor}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {/* Store Listings */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4 text-clovermall-gray text-xl">
              {activeFloor} Stores
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredStores.length > 0 ? (
                filteredStores.map(store => (
                  <StoreCard key={store.id} store={store} />
                ))
              ) : (
                <p className="text-clovermall-gray-light col-span-2 text-center py-12">
                  No stores on this floor.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StoreCard = ({ store }: { store: Store }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="flex">
        {/* Store Logo */}
        <div className="w-1/3 bg-clovermall-gray/5 p-4 flex items-center justify-center">
          <img 
            src={store.logo} 
            alt={store.name}
            className="w-full h-auto max-h-20 object-contain"
          />
        </div>
        
        {/* Store Details */}
        <div className="w-2/3 p-4">
          <h4 className="font-semibold text-clovermall-gray">{store.name}</h4>
          <p className="text-xs text-clovermall-gray-light mb-2">
            {store.category.charAt(0).toUpperCase() + store.category.slice(1)}
          </p>
          
          <div className="text-xs space-y-1">
            <div className="flex items-center text-clovermall-gray-light">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{store.location}</span>
            </div>
            <div className="flex items-center text-clovermall-gray-light">
              <Clock className="w-3 h-3 mr-1" />
              <span>{store.hours}</span>
            </div>
            
            {store.phoneNumber && (
              <div className="flex items-center text-clovermall-gray-light">
                <Phone className="w-3 h-3 mr-1" />
                <span>{store.phoneNumber}</span>
              </div>
            )}
            
            {store.website && (
              <div className="flex items-center text-clovermall-blue">
                <Globe className="w-3 h-3 mr-1" />
                <a href={store.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDirectory;
