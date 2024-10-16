import React, { useState, useEffect } from 'react';
import '../../assets/styles/estimatedBill.css'; // Add your styles here

const EstimatedBill = () => {
    const [predictedUsageData, setPredictedUsageData] = useState([]);
    const [rate, setRate] = useState(0.12); // Example rate per kWh
    const [averageDailyCost, setAverageDailyCost] = useState(0); // Store average daily cost
    const [totalUsage, setTotalUsage] = useState(0); // Store total kWh used

    // Function to calculate the estimated monthly bill
    const calculateMonthlyBill = () => {
        const totalUsage = predictedUsageData.reduce((acc, entry) => acc + entry['Predicted Usage'], 0);
        const estimatedBill = totalUsage * rate;
        return estimatedBill.toFixed(2); // Return as a string with 2 decimal places
    };

    const calculateAverageDailyCost = (totalUsage) => {
        const numberOfDays = predictedUsageData.length / 24; // Assuming data is hourly
        const dailyCost = (totalUsage * rate) / numberOfDays;
        setAverageDailyCost(dailyCost.toFixed(2));
    };

    useEffect(() => {
        fetch('/data/overall.json')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched Data:', data); // Log the fetched data
                setPredictedUsageData(data); // Set the fetched data into state
                const totalUsage = data.reduce((acc, entry) => acc + entry['Predicted Usage'], 0);
                setTotalUsage(totalUsage.toFixed(2)); // Calculate total kWh used
                calculateAverageDailyCost(totalUsage); // Calculate average daily cost
            })
            .catch((error) => {
                console.error('Error fetching predicted usage data:', error);
            });
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="bill-summary-container">
            {/* First Card: This Month's Bill Estimate */}
            <div className="bill-summary-card">
                <p>This Month's Bill Estimate</p>
                <h3>${calculateMonthlyBill()}</h3>
            </div>

            {/* Second Card: Average Daily Cost */}
            <div className="bill-summary-card">
                <p>Average Daily Cost</p>
                <h3>${averageDailyCost}</h3>
            </div>
            <div className="d-flex">

                {/* Third Card: Total kWh Used */}
                <div className="bill-summary-card">
                    <p>Total kWh Used</p>
                    <h3>{totalUsage} kWh</h3>
                </div>

                {/* Fourth Card: Rate per kWh */}
                <div className="bill-summary-card">
                    <p>Rate per kWh</p>
                    <h3>${rate}</h3>
                </div>
            </div>
        </div>
    );
};

export default EstimatedBill;
