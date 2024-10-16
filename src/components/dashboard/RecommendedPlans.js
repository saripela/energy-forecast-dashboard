import React from 'react';
import '../../assets/styles/recommendedPlan.css'; // Ensure your styling is applied

const plansData = [
    {
        id: 1,
        mostPopular: true,
        planTitle: 'Free nights + Amazon Prime',
        planRateTitle: 'Twelve Hour Power On Us 24',
        fixedRate: 'Fixed Rate',
        duration: '24 Months',
        rate: 18.5,
        unit: '¢',
        usage: '/ kWh',
        priceAt: 'price at 2000 kWh',
        benefitImg: 'https://www.directenergy.com/content/dam/de-shared/web/en/oe/multimedia/icon-free-nights-illustrative-charge.png',
        benefitText: 'Get free nights, plus Prime on us for the length of your contract.',
        amazonPrimeText: 'Enjoy up to two years of Amazon Prime on us',
        avgMonthlyUsage: [
            { usage: '500 kWh', price: '20.3¢', bill: '$101.50' },
            { usage: '1000 kWh', price: '19.1¢', bill: '$191.00' },
            { usage: '2000 kWh', price: '18.5¢', bill: '$370.00' }
        ]
    },
    {
        id: 2,
        mostPopular: false,
        planTitle: 'Fixed rate',
        planRateTitle: 'Live Brighter® 24 Auto Pay',
        fixedRate: 'Fixed Rate',
        duration: '24 Months',
        rate: 15.9,
        unit: '¢',
        usage: '/ kWh',
        priceAt: 'price at 2000 kWh',
        benefitImg: 'https://www.directenergy.com/content/dam/de-shared/web/en/oe/multimedia/utility-icons/prime-logo-solid-new.png',
        benefitText: 'Lock in a fixed rate with an Auto Pay discount.',
        amazonPrimeText: 'Get a discount for using Auto Pay1',
        avgMonthlyUsage: [
            { usage: '500 kWh', price: '17.4¢', bill: '$87.00' },
            { usage: '1000 kWh', price: '16.4¢', bill: '$164.00' },
            { usage: '2000 kWh', price: '15.9¢', bill: '$318.00' }
        ]
    },
    {
        id: 3,
        mostPopular: false,
        planTitle: 'Solar Saver Plan',
        planRateTitle: 'Solar Power Plus',
        fixedRate: 'Fixed Rate',
        duration: '12 Months',
        rate: 15.5,
        unit: '¢',
        usage: '/ kWh',
        priceAt: 'price at 1000 kWh',
        benefitImg: 'https://www.directenergy.com/content/dam/de-shared/web/en/oe/multimedia/utility-icons/prime-logo-solid-new.png',
        benefitText: 'Go green with solar energy at reduced rates.',
        amazonPrimeText: 'Enjoy renewable energy at competitive rates',
        avgMonthlyUsage: [
            { usage: '500 kWh', price: '16.3¢', bill: '$81.50' },
            { usage: '1000 kWh', price: '15.5¢', bill: '$155.00' },
            { usage: '2000 kWh', price: '15.2¢', bill: '$304.00' }
        ]
    }
];

const RecommendedPlans = () => {
    return (
        <div className="row">
            {plansData.map((plan) => (
                <div key={plan.id} className="col-lg-4 position-relative product-card-column">
                    <div className={`plan__wrapper ${plan.mostPopular ? "theme-color--amber" : "theme-color--gray"}`}>
                       
                        {/* Plan Header */}
                        <div
                            className="plan__call plan_callout1 main-header align-content-center text-center d-flex flex-column"
                            style={{ minHeight: 'auto', height: '64px' }}
                        >
                            <div>
                                {plan.mostPopular && <div className="chip"> Most Popular</div>}
                                <div className="w-100">
                                    <div className="rich-text-header d-inline-block header-1">
                                        <h2>{plan.planTitle}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Plan Rate and Details */}
                        <div className="plan__call plan_callout2 p-3 d-flex flex-column second">
                            <div className="float-start">
                                <div className="d-flex">
                                    <div >
                                        <div className="rich-text-body mb-2">
                                            <h4>{plan.planRateTitle}</h4>
                                        </div>
                                        <div className="badge-block d-flex mb-3">
                                            <span className="badges">{plan.fixedRate}</span>
                                            <span className="badges">{plan.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="price-section">
                                        <div className="price-info">
                                            <div className="rate">
                                                <h2>{plan.rate}</h2>
                                                <sup><h4>{plan.unit}</h4></sup>
                                                <div className="unit">
                                                    <p>{plan.usage}</p>
                                                </div>
                                            </div>
                                            <p className="priceUnit">{plan.priceAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Plan Benefits */}
                        <div className="plan-tx background--white">
                            <div className="tagline ">
                                <div className="benefit-list-container col-md-12 pt-3">
                                    <div className="items d-flex flex-row color--black mb-3">
                                        <div className="icon">
                                            <img
                                                src={plan.benefitImg}
                                                alt="promo"
                                                width="64px"
                                                height="64px"
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div className="rich-text-body">
                                                <p>{plan.benefitText}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Plan Features Accordion */}
                            <div className="plan-features" role="button" tabIndex="0" data-bs-toggle="collapse" data-bs-target={`#planFeaturesContent${plan.id}`}>
                                <div className="plan-details__more-details items-header border-bottom">
                                    <div className="d-flex justify-content-between text-xs mb-0">
                                        <span className="fw-normal">Plan Features</span>
                                        <span className="ms-2 accordion-item--chevron iconcollapsed">
                                            <div className="icon-svg icon-fill--none">
                                                <div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="11.399"
                                                        height="6.836"
                                                        viewBox="0 0 11.399 6.836"
                                                    >
                                                        <path
                                                            d="M70.686,55.968l-1.135,1.15,4.5,4.442-4.536,4.657,1.18,1.15,5.656-5.807Z"
                                                            transform="translate(67.367 -69.518) rotate(90)"
                                                            fill="#231f20"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Plan Features Collapsible Section */}
                            <div id={`planFeaturesContent${plan.id}`} className="collapse">
                                <div className="benefit-list-container col-md-12 pt-3">
                                    <div className="items d-flex flex-row color--black mb-3">
                                        <div className="icon">
                                            <img
                                                src={plan.benefitImg}
                                                alt="Prime"
                                                width="32px"
                                                height="32px"
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div className="rich-text-body">
                                                <p>{plan.amazonPrimeText}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rate Details Accordion */}
                            <div className="plan-details__more-details mb-3 plandoc-details items-header border-bottom" data-bs-toggle="collapse" data-bs-target={`#rateDetailsContent${plan.id}`}>
                                <div className="d-flex justify-content-between text-xs mb-0">
                                    <span className="fw-normal">Rate Details</span>
                                    <span className="ms-2 accordion-item--chevron iconcollapsed">
                                        <div className="icon-svg icon-fill--none">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="11.399"
                                                    height="6.836"
                                                    viewBox="0 0 11.399 6.836"
                                                >
                                                    <path
                                                        d="M70.686,55.968l-1.135,1.15,4.5,4.442-4.536,4.657,1.18,1.15,5.656-5.807Z"
                                                        transform="translate(67.367 -69.518) rotate(90)"
                                                        fill="#231f20"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>

                            {/* Rate Details Collapsible Section */}
                            <div id={`rateDetailsContent${plan.id}`} className="collapse">
                                <div className="rate-details">
                                    <div className="my-2">
                                        <div className="container rich-text-table">
                                            <table className="table">
                                                <thead>
                                                    <tr style={{ height: '40px' }}>
                                                        <th>Average monthly usage</th>
                                                        <th>Average price per kWh</th>
                                                        <th>Estimated monthly bill</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {plan.avgMonthlyUsage.map((usage, index) => (
                                                        <tr key={index}>
                                                            <td>{usage.usage}</td>
                                                            <td>{usage.price}</td>
                                                            <td>{usage.bill}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Plan Bottom Buttons */}
                            <div className="plan--bottom--buttons mt-2">
                                <div className="selected-button-wrapper">
                                    <button type="button" className="btn btn--primary-brand-ui w-100">
                                        Select Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecommendedPlans;
