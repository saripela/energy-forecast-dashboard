import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import LineChart from '../components/dashboard/LineChart';
import BarChart from '../components/dashboard/BarChart';
import DataTable from '../components/dashboard/DataTable';
import DashboardLayout from '../layouts/DashboardLayout';
import { fetchForecastData, fetchOverallData } from '../services/api'; // Import both API functions

const DashboardPage = () => {
  const [lineChartData, setLineChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState('Appliances'); // Filter state to switch between APIs
  const [loading, setLoading] = useState(true);

  // Handle filter change
  const onFilterChange = (event) => {
    setFilter(event.target.value); // Update filter value when selection changes
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Set loading state true when fetching data

      try {
        let apiData;

        if (filter === 'Appliances') {
          apiData = await fetchForecastData(); // Fetch appliances data
          console.log('Appliances API Data:', apiData);
          
          // Process data for charts and table for Appliances
          const labels = apiData.map(item => item.timestamp);
          const thermostatData = apiData.map(item => item.Thermostat_Predicted);
          const vivintData = apiData.map(item => item.Vivint_Predicted);

          // Line chart data for Appliances
          setLineChartData({
            labels: labels,
            datasets: [
              {
                label: 'Thermostat Predicted',
                data: thermostatData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1,
              },
              {
                label: 'Vivint Predicted',
                data: vivintData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.1,
              },
            ],
          });

          // Bar chart data for Appliances
          setBarChartData({
            labels: ['Thermostat', 'Vivint'],
            datasets: [
              {
                label: 'Predicted Energy Usage',
                data: [
                  thermostatData.reduce((a, b) => a + b, 0),
                  vivintData.reduce((a, b) => a + b, 0),
                ],
                backgroundColor: ['#FF6384', '#36A2EB'],
              },
            ],
          });

          // Set table data for Appliances
          setTableData(apiData);

        } else if (filter === 'Overall') {
          apiData = await fetchOverallData(); // Fetch overall data
          console.log('Overall API Data:', apiData);

          // Process data for charts and table for Overall
          const labels = apiData.map(item => item.timestamp);
          const predictedUsageData = apiData.map(item => item['Predicted Usage']);

          // Line chart data for Overall
          setLineChartData({
            labels: labels,
            datasets: [
              {
                label: 'Predicted Usage',
                data: predictedUsageData,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.1,
              },
            ],
          });

          // Bar chart data for Overall
          setBarChartData({
            labels: ['Predicted Usage'],
            datasets: [
              {
                label: 'Total Predicted Usage',
                data: [predictedUsageData.reduce((a, b) => a + b, 0)],
                backgroundColor: ['#36A2EB'],
              },
            ],
          });

          
        }

        setLoading(false); // Set loading state false when data is fetched
      } catch (error) {
        console.error('Error fetching forecast data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, [filter]); // Depend on filter state so it reloads data on filter change

  // Handle loading state
  if (loading || !lineChartData || !barChartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <DashboardLayout>
        <div className="filter-container">
          <h4>Filter Data</h4>
          <select onChange={onFilterChange} value={filter}>
            <option value="Appliances">Appliances</option>
            <option value="Overall">Overall</option>
          </select>
        </div>
        <div className="charts-container">
          <LineChart data={lineChartData} />
          <BarChart data={barChartData} />
        </div>
        <DataTable data={tableData} />
      </DashboardLayout>
      <Footer />
    </div>
  );
};

export default DashboardPage;
