import React, { useState, useEffect } from 'react';
import moment from 'moment';
import appliancesData from '../data/appliances.json';
import overallData from '../data/overall.json';
import Navbar from '../components/common/Navbar';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../components/common/Footer';
import LineChart from '../components/dashboard/LineChart';
import BarChart from '../components/dashboard/BarChart';
import DataTable from '../components/dashboard/DataTable';
import DashboardLayout from '../layouts/DashboardLayout';

const DashboardPage = () => {
  const [view, setView] = useState('Overall');
  const [lineChartData, setLineChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBarChart, setShowBarChart] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleChart = () => setShowBarChart(!showBarChart);
  const handleDateChange = (date) => setStartDate(date);
  // Define options separately
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Electrical energy consumption (kW)',
          font: {
            size: 11, // Adjust the font size if needed
          },
          color: '#000', // You can change the color
        },
        ticks: {
          // Additional options for ticks if needed
        }
      },
      x: {
        // Configuration for x-axis if needed
      }
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = view === 'Appliances' ? appliancesData : overallData;
        const labels = data.map(item => moment(item.timestamp).format('YYYY/MM/DD HH:mm'));

        // Prepare data for charts and table based on the selected view
        if (view === 'Appliances') {
          const thermostatData = data.map(item => item.Thermostat);
          const vivintData = data.map(item => item.Doorbell);

          setLineChartData({
            labels,
            datasets: [
              { label: 'Thermostat', data: thermostatData, borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'rgba(75, 192, 192, 0.2)', fill: true, tension: 0.1 },
              { label: 'Doorbell', data: vivintData, borderColor: 'rgba(255, 99, 132, 1)', backgroundColor: 'rgba(255, 99, 132, 0.2)', fill: true, tension: 0.1 },
            ],
          });

          setBarChartData({
            labels: ['Thermostat', 'Doorbell'],
            datasets: [
              { label: 'Predicted Energy Usage', data: [thermostatData.reduce((a, b) => a + b, 0), vivintData.reduce((a, b) => a + b, 0)], backgroundColor: ['#FF6384', '#36A2EB'] },
            ],
          });

          setTableData(data.map(item => ({ Time: moment(item.timestamp).format('YYYY/MM/DD HH:mm:ss'), ...item })));
        } else {
          const predictedUsageData = data.map(item => item['Predicted Usage']);

          setLineChartData({
            labels,
            datasets: [
              { label: 'Predicted Usage', data: predictedUsageData, borderColor: 'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235, 0.2)', fill: true, tension: 0.1 },
            ],
          });

          setBarChartData({
            labels: ['Predicted Usage'],
            datasets: [
              { label: 'Total Predicted Usage', data: [predictedUsageData.reduce((a, b) => a + b, 0)], backgroundColor: ['#36A2EB'] },
            ],
          });

          setTableData(data.map(item => ({ Time: moment(item.timestamp).format('YYYY/MM/DD HH:mm:ss'), ...item })));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [view]);

  if (loading || !lineChartData || !barChartData) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <Navbar toggleSidebar={toggleSidebar} startDate={startDate} handleDateChange={handleDateChange} />
      <DashboardLayout setView={setView} view={view} isSidebarOpen={isSidebarOpen}>
        <div className="charts-and-table">
          <div className="charts-container">
            {isMobile ? (
              <BarChart data={barChartData} options={options} />
            ) : (
              <>
                <div className="chart-toggle-buttons">
                  <input type="radio" id="lineChart" name="chartType" value="line" checked={!showBarChart} onChange={() => setShowBarChart(false)} />
                  <label htmlFor="lineChart">Line Chart</label>
                  <input type="radio" id="barChart" name="chartType" value="bar" checked={showBarChart} onChange={() => setShowBarChart(true)} />
                  <label htmlFor="barChart">Bar Chart</label>
                </div>
                {showBarChart ? <BarChart data={barChartData} options={options}/> : <LineChart data={lineChartData} options={options}/>}
              </>
            )}
          </div>
          <div className="data-table-wrapper">
            <DataTable data={tableData} />
          </div>
        </div>
      </DashboardLayout>
      <Footer />
    </div>
  );
};

export default DashboardPage;
