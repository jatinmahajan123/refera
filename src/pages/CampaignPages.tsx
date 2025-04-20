import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter } from 'lucide-react';
import NewCampaignForm from '@/components/NewCampaignForm';
import LeadsSettings from '@/components/LeadsSettings';

const CampaignPage = () => {
  const [activeTab, setActiveTab] = useState<'past' | 'new' | 'leads'>('past');
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case 'past':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Card 1 */}
            <div
              className="border p-4 rounded-lg bg-white shadow-sm cursor-pointer hover:shadow-md transition"
              onClick={() => navigate('/campaign/summer-referral')}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">Summer Referral Program</h2>
                <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">Active</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">5/31/2024 - 8/30/2024</p>
              <div className="flex justify-between text-sm font-medium mb-2">
                <p>Referrals: 245</p>
                <p>Conversion: 32%</p>
                <p>ROI: 287%</p>
              </div>
              <div className="bg-blue-50 text-blue-700 p-2 rounded text-sm">
                📢 Increase reward by 10% to boost conversion rates during peak season
              </div>
            </div>

            {/* Card 2 */}
            <div className="border p-4 rounded-lg bg-white shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">Early Bird Special</h2>
                <span className="text-sm bg-gray-100 text-gray-500 px-2 py-1 rounded">Inactive</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">8/20/2024 - 9/19/2024</p>
              <div className="flex justify-between text-sm font-medium mb-2">
                <p>Referrals: 300</p>
                <p>Conversion: 40%</p>
                <p>ROI: 320%</p>
              </div>
              <div className="bg-purple-50 text-purple-700 p-2 rounded text-sm">
                🕒 Extend your campaign! Strong engagement suggests higher conversions with more time.
              </div>
            </div>
          </div>
        );
      case 'new':
        return <NewCampaignForm />;
      case 'leads':
        return <LeadsSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Create & Manage Referral Campaigns</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search campaigns..."
            className="border rounded px-3 py-2 text-sm w-60"
          />
          <button className="border px-3 py-2 rounded flex items-center gap-2 text-sm">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === 'past' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Past Promoters
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === 'new' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            New Promoters
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === 'leads' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            New Leads
          </button>
        </div>
      </div>

      {/* Create Campaign Button */}
      {activeTab === 'past' && (
        <div className="mb-6">
          <button
            onClick={() => setActiveTab('new')}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Create New Campaign
          </button>
        </div>
      )}

      {/* Tab Content */}
      {renderContent()}
    </div>
  );
};

export default CampaignPage;
