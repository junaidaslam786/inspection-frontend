import React from "react";

const ManageCustomer: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-white shadow rounded-lg p-6 flex flex-col">
        <div className="flex justify-between ">
          <div>
            <p className="font-semibold">Name:</p>
            <p>Customer Name</p>
            <p className="font-semibold mt-2">Billing Address:</p>
            <p className="w-[139px]">123 North St City, State, Pin Code</p>
            
          </div>
          <div>
            <p className="font-semibold">Service Address:</p>
            <p className="w-[100px] h-[40px] ">132 Street St City, State, ZIP</p>
            <p className="font-semibold mt-2">Service Contact:</p>
            <p>John Smith</p>
            <p>999-999-9999</p>
          </div>
          <div>
            <p className="font-semibold">Type:</p>
            <p>Commercial</p>
            <p className="font-semibold mt-2">Gate Code:</p>
            <p>None</p>
          </div>
          <div>
            <p className="font-semibold">Status:</p>
            <p>Active</p>
            <p className="font-semibold mt-2">Previous Phone Number:</p>
            <p>Text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCustomer;
