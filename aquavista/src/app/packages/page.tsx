import React from 'react';

export default function PackagesPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Scuba Diving & Adventure Packages</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Scuba Diving Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards for packages */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">Beginner Dive Course</h3>
            <p className="text-gray-700 mb-2">[Short summary]</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Enquire Now</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">Advanced Dive Adventure</h3>
            <p className="text-gray-700 mb-2">[Short summary]</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Enquire Now</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">Island Hopping Tour</h3>
            <p className="text-gray-700 mb-2">[Short summary]</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Enquire Now</button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Adventure Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards for adventure tours */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">Snorkeling Safari</h3>
            <p className="text-gray-700 mb-2">[Short summary]</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Enquire Now</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-xl mb-2">Sunset Cruise</h3>
            <p className="text-gray-700 mb-2">[Short summary]</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Enquire Now</button>
          </div>
        </div>
      </section>
    </main>
  );
} 