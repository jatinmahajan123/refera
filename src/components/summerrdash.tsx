// components/SummerReferralDashboard.tsx
import {
    Bar,
    Doughnut
  } from 'react-chartjs-2';
  import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
  } from 'chart.js';
  
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
  );
  
  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Referrals',
        data: [50, 75, 100, 120],
        backgroundColor: '#3b82f6',
      },
    ],
  };
  
  const doughnutData = {
    labels: ['Converted', 'Not Converted'],
    datasets: [
      {
        label: 'Conversions',
        data: [64, 36],
        backgroundColor: ['#10b981', '#f87171'],
        borderWidth: 1,
      },
    ],
  };
  
  const SummerReferralDashboard = () => {
    return (
      <div className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">📊 Summer Referral Program Dashboard</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold">245</h2>
            <p className="text-gray-500">Total Referrals</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold">32%</h2>
            <p className="text-gray-500">Conversion Rate</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold">287%</h2>
            <p className="text-gray-500">ROI</p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4">Weekly Referrals</h3>
            <Bar data={barData} />
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4">Conversion Breakdown</h3>
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    );
  };
  
  export default SummerReferralDashboard;
  