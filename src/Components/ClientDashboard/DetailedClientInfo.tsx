import React from "react";

const DetailedClientInfo: React.FC = () => {
  return (
    <div className="p-[1.5vw] m-[2vw] bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Client Name:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">Bobs Plumbing</p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Type:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">Commercial</p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Status:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">Active</p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Client ID:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">761923</p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Client Address:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">
            132 North St
            <br />
            City, State, Pin Code
          </p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Billing Address:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">Same as primary</p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Phone:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">999-555-55555</p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Client Email:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">john-smith@gmail.com</p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Payment method:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">Net 30</p>
        </div>
        <div>
          <p className="text-[1vw] text-gray-0 font-medium font-inter">Next bill date:</p>
          <p className="text-[1vw] text-darkgray-0 font-semibold font-inter">12-24-2027</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedClientInfo;
