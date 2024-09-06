import React, { useState } from "react";
const Paypal = process.env.PUBLIC_URL + '/assets/Paypal.png'
const Shopify = process.env.PUBLIC_URL + '/assets/Shopify flow.png'
const Google = process.env.PUBLIC_URL + '/assets/Google analytics.png'
const Ali = process.env.PUBLIC_URL + '/assets/Ali reviews.png'
const Current = process.env.PUBLIC_URL + '/assets/Current.png'

const FooterSection = () => {
  const [accentColor, setAccentColor] = useState("#FF9898");
  const [textColor, setTextColor] = useState("#571010");
  const [backgroundColor, setBackgroundColor] = useState("#FFAEAE");

  return (
    <div className="bg-neutral-100 pt-16 pb-40">

    <div className="px-6 max-w-[90rem] mx-auto">
      <h2 className="text-2xl font-bold text-gray-600 mb-6">
        Discover the Heart of Our Functionality
      </h2>


      <div className="flex gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-[332px]">
          <h3 className="font-semibold mb-4 text-[14px]">
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </h3>
          <p className="text-[13px] mb-4">
            Immerse your customers in a branded experience by personalizing the colors on your tracking page.
          </p>
          <div className="mb-4 text-[12px]">
            <label className="block text-[12px] mb-1">Accent Color</label>
            <div className="flex gap-3">

            <input
              type="text"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="bg-[#FF9898] w-[40%] rounded-lg"></div>
            </div>
          </div>
          <div className="mb-4 text-[12px]">
            <label className="block text-[12px] mb-1">Text Color</label>
            <div className="flex gap-3">

            <input
              type="text"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="bg-[#571010] w-[40%] rounded-lg"></div>
            </div>
          </div>
          <div className="mb-4 text-[12px]">
            <label className="block text-[12px] mb-2">Background Color</label>

            <div className="flex gap-3">

            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="bg-[#FFEAEA] w-[40%] rounded-lg"></div>
            </div>
          </div>
          <div className="flex space-x-4 text-[12px]">
            <button className="bg-white border-2 text-gray-800 px-4 py-1 rounded">Preview</button>
            <button className="bg-gray-800 text-white px-4 py-1 shadow-lg rounded-2xl">Apply Colors</button>
          </div>
        </div>

        {/* Second Section: Schedule Call */}
        <div className="flex flex-col gap-2 w-[448px] h-[408px]">

        <div className="bg-white p-6 rounded-lg shadow-md ">
          <h3 className="text-[13px] font-semibold mb-4">
            Exclusive Onboarding Support for High-Volume Brands
          </h3>
          <p className="mb-4 text-[12px]">
            Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.
          </p>
          <button className="bg-gray-800 text-white shadow-lg text-[12px] px-4 py-1 rounded-2xl">
            Schedule A Call
          </button>
        </div>

        {/* Third Section: Explore Integrations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4 text-[13px]">
            Explore Our Integrated Ecosystem
          </h3>
          <p className="text-[12px] mb-4">
            Discover a variety of popular integrations tailored for your convenience.
          </p>
          <div className="flex space-x-9 mb-4">
            {/* Icons (Placeholders for actual icons) */}
            <span className="text-3xl"><img src={Paypal} /></span>
            <span className="text-3xl"><img src={Ali}/></span>
            <span className="text-3xl"><img src={Current}/></span>
            <span className="text-3xl"><img src={Google} /></span>
            <span className="text-3xl"><img src={Shopify}/></span>
          </div>
          <button className="bg-gray-800 text-white px-4 py-1 text-[12px] rounded-2xl">
            Explore Integrations
          </button>
        </div>
        </div>

        {/* Fourth Section: Custom HTML */}
        <div className="bg-white p-6 rounded-lg text-[14px] shadow-md w-[332px] h-[408px]">
          <h3 className="font-semibold mb-4">
            Seamlessly Integrate Custom HTML Elements
          </h3>
          <p className="text-[13px] mb-10">
            Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
          </p>
          <div className="mb-4">
            <label className="block text-[13px] mb-2">HTML Link</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white border text-gray-800 px-4 py-2 rounded">Preview</button>
            <button className="bg-gray-800 text-white px-4 py-1 rounded-3xl text-[12px]">Apply changes</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FooterSection;
