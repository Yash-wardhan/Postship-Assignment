import React from 'react';
import Cards from './Cards';
const Alert = process.env.PUBLIC_URL + '/assets/Alert.png'

const HeroSection = () => {
  const cardsData = [
    {
      title: 'Order Sync Successful!',
      description: 'Your order details from the last 30 days have been successfully synced. Check them out now!',
      buttonText: 'Explore Your Orders',
    },
    {
      title: 'Customize Customer Notification',
      description: 'Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers.',
      buttonText: 'Configure Notifications',
      Image: Alert
    },
    {
      title: 'Your Tracking Link has been generated',
      description: 'Include the Link to Your Store\'s Navigation Menu.',
      buttonText: 'Copy Link',
    },
  ];

  // Define a styles object for each card type
  const cardStyles = [
    "bg-white border-gray-200",
    "bg-[#FFF8DB] border-gray-200 ",
    "bg-white border-gray-200"
  ];

  return (
    <div className="max-w-[90rem] px-6 mx-auto pt-6 pb-[64px] mt-[44px] text-gray-600 bg-[#FFFDFA]">
      <h1 className="text-2xl font-bold mb-8">Welcome, John Mathew!!</h1>

      <div className="flex flex-col md:flex-row gap-4">
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            cardClass={cardStyles[index]}
            image={card.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;