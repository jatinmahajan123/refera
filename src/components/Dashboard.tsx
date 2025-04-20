import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import './dashboard.css'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Promoter Performance',
        data: [30, 38, 35, 37, 40, 42],
        borderColor: '#5b68df',
        backgroundColor: 'transparent',
        tension: 0.4,
      },
    ],
  };

  const doughnutData = {
    labels: ['Referrals Sent', 'Converted'],
    datasets: [
      {
        data: [57, 43],
        backgroundColor: ['#d2dbfd', '#5b68df'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Header Stats */}
      <motion.div className="stat-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {[
          { title: 'Total Promoters', value: '1,234', change: '+12%' },
          { title: 'Conversion rate', value: '23.5%', change: '-2.1%' },
          { title: 'Revenue Generated', value: '$12,345', change: '+8.3%' },
          { title: 'Active Campaigns', value: '3' },
        ].map((stat, index) => (
          <motion.div className="stat-card" key={index} whileHover={{ scale: 1.02 }}>
            <p>{stat.title}</p>
            <h2>{stat.value}</h2>
            {stat.change && <span className="change">{stat.change}</span>}
          </motion.div>
        ))}
      </motion.div>

      {/* Metric Rings */}
      <div className="ring-metrics">
        {[
          { title: 'Repeat Referral Rate', percent: 42, color: '#57e19c' },
          { title: 'Referral Engagement Rate', percent: 67, color: '#fc7878' },
          { title: 'Churn Rate of Leads', percent: 28, color: '#81b9ff' },
          { title: 'Upsell Rate of Leads', percent: 19, color: '#f2a8ff' },
        ].map((ring, i) => (
          <div className="ring-card" key={i}>
            <div
              className="ring"
              style={{
                background: `conic-gradient(${ring.color} ${ring.percent * 3.6}deg, #f1f1f1 0deg)`,
              }}
            >
              <span>{ring.percent}%</span>
            </div>
            <p>{ring.title}</p>
          </div>
        ))}
      </div>

      {/* Performance & Conversion */}
      <div className="charts-section">
        <div className="line-chart-card">
          <h4>Promoter Performance Over Time</h4>
          <Line data={lineData} />
        </div>
        <div className="conversion-pie-card">
          <h4>Conversion Success Rate</h4>
          <Doughnut data={doughnutData} />
          <div className="top-channels">
            <h5>Top Performing Channel</h5>
            <div>
              <span className="badge fb">Facebook</span> 78%
              <span className="badge tw">Twitter</span> 45%
              <span className="badge li">LinkedIn</span> 23%
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="recent-activities">
        <h4>Recent Activities</h4>
        <ul>
          <li><span>Julian earned $10</span><span>28-4-2024</span><span>10:30 AM</span></li>
          <li><span>John Doe signed up from your referral link</span><span>29-4-2024</span><span>9:45 AM</span></li>
          <li><span>You reached 50 referrals milestone!</span><span>30-4-2024</span><span>8:20 AM</span></li>
          <li><span>You updated your referral campaign</span><span>31-4-2024</span><span>7:00 AM</span></li>
        </ul>
      </div>

      {/* Leaderboard Table */}
      <div className="leaderboard">
        <h4>Leaderboard Table View</h4>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Promoter Name</th>
              <th>Conversion Rate</th>
              <th>Referrals Sent</th>
              <th>Successful Conversions</th>
              <th>Revenue Generated</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1', 'Emery Dokkdis', '150', '80', '60%', '$1,200'],
              ['2', 'Kadri Lipshutz', '132', '90', '65%', '$980'],
              ['3', 'Randy Culhane', '110', '60', '60%', '$880'],
              ['4', 'Jassan Vaccaro', '100', '85', '75%', '$500'],
              ['5', 'Jocelyn Levin', '50', '30', '63%', '$800'],
              ['6', 'Maren Septimus', '80', '35', '25%', '$200'],
              ['7', 'Haylie Saris', '120', '55', '45%', '$150'],
              ['8', 'Randy Horwitz', '110', '90', '65%', '$880'],
            ].map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, i) => <td key={i}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default  Dashboard;
