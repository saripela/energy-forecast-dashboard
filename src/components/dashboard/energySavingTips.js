import React, { useEffect , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import '../../assets/styles/energySavingTips.css'; // Add your styles here

const EnergySavingTips = () => {
    // useEffect for manually binding event listeners
    useEffect(() => {
        const swiperInstance = document.querySelector('.swiper').swiper;
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');

        if (swiperInstance && prevButton && nextButton) {
            prevButton.addEventListener('click', () => swiperInstance.slidePrev());
            nextButton.addEventListener('click', () => swiperInstance.slideNext());
        }

        return () => {
            if (prevButton && nextButton) {
                prevButton.removeEventListener('click', () => swiperInstance.slidePrev());
                nextButton.removeEventListener('click', () => swiperInstance.slideNext());
            }
        };
    }, []);
    // List of tips
    const initialTips = [
        { id: 1, title: '25 energy-efficient tips for lower electricity costs', description: 'Discover practical, energy-saving tips to reduce electricity costs and increase efficiency at home or business.', image: 'https://www.directenergy.com/content/dam/de-shared/web/en/multimedia/learn/reduce-energy-costs/Woman-changing-LED-light-bulb-on-pendant-lamp_D.jpg' },
        { id: 2, title: 'How to reduce your electricity bill', description: 'Cutting back on your electricity bill doesn\'t have to be a daunting task. Read our helpful energy-saving tips to learn more.', image: 'https://www.directenergy.com//content/dam/de-shared/web/en/multimedia/learn/reduce-energy-costs/coin-stacks-and-light-bulb-d.jpg' },
        { id: 3, title: 'More energy-efficient tips for lower electricity costs', description: 'Learn how to save even more on your energy bill!', image: 'https://www.directenergy.com//content/dam/de-shared/web/en/multimedia/learn/reduce-energy-costs/Woman-changing-LED-light-bulb-on-pendant-lamp_D.jpg' },
        { id: 4, title: '25 energy-efficient tips for lower electricity costs', description: 'Discover practical, energy-saving tips to reduce electricity costs and increase efficiency at home or business.', image: 'https://www.directenergy.com//content/dam/de-shared/web/en/multimedia/learn/reduce-energy-costs/Woman-changing-LED-light-bulb-on-pendant-lamp_D.jpg' },
        { id: 5, title: 'How to reduce your electricity bill', description: 'Cutting back on your electricity bill doesn\'t have to be a daunting task. Read our helpful energy-saving tips to learn more.', image: 'https://www.directenergy.com//content/dam/de-shared/web/en/multimedia/learn/reduce-energy-costs/coin-stacks-and-light-bulb-d.jpg' },
        { id: 6, title: 'More energy-efficient tips for lower electricity costs', description: 'Learn how to save even more on your energy bill!', image: 'https://www.directenergy.com//content/dam/de-shared/web/en/multimedia/learn/reduce-energy-costs/Woman-changing-LED-light-bulb-on-pendant-lamp_D.jpg' },
    ];

    // State to manage dismissed tips
    const [tips, setTips] = useState(initialTips);

    // Function to handle dismissing a tip
    const dismissTip = (id) => {
        setTips(prevTips => prevTips.filter(tip => tip.id !== id));
    };

    return (
        <Swiper
            navigation                    // Enable navigation arrows
            slidesPerView={3}             // Show 3 slides at a time
            spaceBetween={20}             // Space between slides
            loop={true}                   // Enable infinite loop
            pagination={{ clickable: true }}  // Optional: enable pagination dots
        >
             {tips.map((tip) => (
            <SwiperSlide key={tip.id}>
            <div className="detexas-card background--primary-dark-pastel">
              {/* Dismiss button */}
              <button className="dismiss-btn" onClick={() => dismissTip(tip.id)}>✖</button>

              <div className="detexas-card__imgcontainer">
                <img src={tip.image} alt={tip.title} className="card_img" />
              </div>

              <div className="detexas-card__contents">
                <h4>{`Slide ${tip.id}: ${tip.title}`}</h4>
                <p>{tip.description}</p>
                <a href="#" className="btn btn--black color--black btn--tertiary link">Learn More</a>
              </div>
            </div>
          </SwiperSlide>

))}
            {/* Add more SwiperSlide components as needed */}
        </Swiper>
    );
};

export default EnergySavingTips;
