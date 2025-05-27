import React from 'react';

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-center px-4">
      <h1 className="text-5xl font-bold text-yellow-700 mb-4">
        🚧 Page Under Construction
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        This page is currently being built. We're working hard to bring it to you soon. Thank you for your patience!
      </p>
      <div className="animate-bounce mt-4">
        <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-4m5 0a9 9 0 11-6-8.66M13 4h-1v1h1z" />
        </svg>
      </div>
    </div>
  );
}
