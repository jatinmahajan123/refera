import { useRef, useState } from 'react';
import { Dialog} from '@headlessui/react';
import { X } from 'lucide-react';

const NewPromoterModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'manual' | 'csv' | 'zapier'>('manual');
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(70);
  const [zapierConnected, setZapierConnected] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setProgress(70); // Simulate upload % (for UI)
    }
  };

  const resetFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Dialog.Panel className="bg-white w-[500px] p-6 rounded-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-md font-medium mb-4">Choose How You Want to Add Customers</h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-4 border-b">
          {['manual', 'csv', 'zapier'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-2 px-2 ${
                activeTab === tab ? 'border-b-2 border-blue-500 font-medium text-blue-600' : 'text-gray-500'
              }`}
            >
              {tab === 'manual' && 'Add Manually'}
              {tab === 'csv' && 'Upload CSV File'}
              {tab === 'zapier' && 'Sync with Zapier'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[220px]">
          {activeTab === 'manual' && (
            <div className="space-y-3">
              <input className="w-full border px-3 py-2 rounded" placeholder="Enter Full Name" />
              <input className="w-full border px-3 py-2 rounded" placeholder="Enter Phone Number" />
              <input className="w-full border px-3 py-2 rounded" placeholder="Enter Email ID" />
              <div className="flex justify-end gap-2 pt-3">
                <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded">Save</button>
              </div>
            </div>
          )}

          {activeTab === 'csv' && (
            <div>
              <label
                className="w-full border-2 border-dashed rounded-lg py-10 text-center cursor-pointer text-gray-600 block mb-3"
                onClick={() => fileInputRef.current?.click()}
              >
                <div>📤 Drag and drop files here</div>
                <div className="mt-2 text-blue-600 underline">or Browse Files</div>
                <input
                  type="file"
                  accept=".csv"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>

              {file && (
                <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded mb-3">
                  <span>{file.name}</span>
                  <span className="text-sm text-blue-600">{progress}%</span>
                  <button onClick={resetFile} className="text-red-500 ml-2">❌</button>
                </div>
              )}

              <div className="flex justify-end gap-2">
                <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded">Save</button>
              </div>
            </div>
          )}

          {activeTab === 'zapier' && (
            <div className="text-center border-2 border-dashed rounded-lg p-6 text-gray-600">
              {!zapierConnected ? (
                <>
                  <p>Automatically sync your customer data from your CRM using Zapier</p>
                  <button
                    onClick={() => setZapierConnected(true)}
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded"
                  >
                    Connect with Zapier
                  </button>
                </>
              ) : (
                <>
                  <p className="text-green-600 font-medium">✅ Connected successfully!</p>
                  <button
                    onClick={() => setZapierConnected(false)}
                    className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded"
                  >
                    Disconnect
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default NewPromoterModal;
