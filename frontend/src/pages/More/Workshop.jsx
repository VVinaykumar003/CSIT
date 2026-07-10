import React from 'react';
import { Wrench } from 'lucide-react';

const Workshop = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><Wrench className="mr-3" />Central Workshop</h1>
          <p className="text-base text-gray-200 mt-2">
            Hands-on training and practical skill development.
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <p className="text-gray-700">Content for the Central Workshop will be added soon.</p>
      </div>
    </div>
  );
};

export default Workshop;