import React from 'react';

const Cards = ({ title, description, buttonText, cardClass,image }) => {
  return (
    <div className={`border flex flex-col justify-between w-[350px] h-[178px] p-4 cursor-pointer rounded-lg shadow-sm ${cardClass}`}>
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        {image && <img src={image} className='w-3'/>}
        <h2 className="font-semibold text-[14px] text-gray-800">{title}</h2>
      </div>
      <p className="text-[13px] text-gray-600 mt-2">{description}</p>
    </div>
      <div>
        <button className="text-[12px] shadow-lg bg-gray-800 text-white px-4 py-1 rounded-2xl hover:bg-gray-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Cards;
