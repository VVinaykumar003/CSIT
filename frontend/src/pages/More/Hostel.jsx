import React from 'react';
import { BedDouble } from 'lucide-react';

const Hostel = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><BedDouble className="mr-3" />Hostel</h1>
          <p className="text-base text-gray-200 mt-2">
            A home away from home for our students.
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <p className="text-gray-700">Content for the Hostel will be added soon.</p>
      </div>
    </div>
  );
};

export default Hostel;