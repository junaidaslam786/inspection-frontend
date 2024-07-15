

// src/App.tsx
import React from 'react';

const ManageCustomer: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M9 5l7 7-7 7" />
            </svg>
            <span>Manage Customer</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="h-10 w-10 rounded-full" />
            <div>
              <div>Oliver Ray</div>
              <div className="text-sm text-gray-500">OliverRay@inspection.com</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="font-semibold">Name:</div>
            <div>Customer Name</div>
            <div className="font-semibold mt-2">Billing Address:</div>
            <div>123 North St</div>
            <div>City, State, Pin Code</div>
          </div>
          <div>
            <div className="font-semibold">Service Address:</div>
            <div>132 Street St</div>
            <div>City, State, ZIP</div>
            <div className="font-semibold mt-2">Service Contact:</div>
            <div>John Smith</div>
            <div>999-999-9999</div>
          </div>
          <div>
            <div className="font-semibold">Type:</div>
            <div>Commercial</div>
            <div className="font-semibold mt-2">Gate Code:</div>
            <div>None</div>
          </div>
          <div>
            <div className="font-semibold">Status:</div>
            <div>Active</div>
            <div className="font-semibold mt-2">Previous Phone Number:</div>
            <div>Text</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCustomer;
