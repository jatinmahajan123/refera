import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Settings,
  HelpCircle,
  BarChart3,
  Bot,
  LayoutDashboard,
  Megaphone,
  Users,
  UserPlus,
  FileText,
} from 'lucide-react';

const Sidebar = () => {
  const menu = [
    { label: 'Platform Setup', icon: <BarChart3 size={18} />, path: '/platformsetup' },
    { label: 'AI Agent', icon: <Bot size={18} />, path: '/ai-agent' },
    { label: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
    { label: 'Campaign', icon: <Megaphone size={18} />, path: '/campaign' },
    { label: 'Promoters', icon: <Users size={18} />, path: '/promoters' },
    { label: 'Leads', icon: <UserPlus size={18} />, path: '/leads' },
    { label: 'Payouts', icon: <FileText size={18} />, path: '/payouts' },
  ];

  const bottomMenu = [
    { label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
    { label: 'Help', icon: <HelpCircle size={18} />, path: '/help' },
  ];

  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]);


  useEffect(() => {
    const justLoggedIn = localStorage.getItem('justLoggedIn');
    if (justLoggedIn === 'true') {
      setShowPopup(true);
      localStorage.removeItem('justLoggedIn');
    }
  }, []);

  const handleNext = () => {
    if (currentStep < menu.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowPopup(false);
    }
  };

  const handleSkip = () => {
    setShowPopup(false);
  };

  const currentRef = menuRefs.current[currentStep];
  const rect = currentRef?.getBoundingClientRect();

  return (
    <div className="relative w-56 h-screen bg-white border-r flex flex-col justify-between px-3 py-6 text-sm font-medium text-blue-600">
      {/* Sidebar Items */}
      <div className="space-y-2">
        {menu.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            ref={(el) => (menuRefs.current[idx] = el)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                isActive ? 'bg-blue-50 font-semibold' : 'hover:bg-blue-50'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Bottom Menu */}
      <div className="space-y-2">
        {bottomMenu.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                isActive ? 'bg-blue-50 font-semibold' : 'hover:bg-blue-50'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Onboarding Popup */}
      {showPopup && rect && (
        <div
          style={{
            position: 'absolute',
            top: rect.top - 80 + window.scrollY,
            left: rect.right + 10,
            width: '280px',
            zIndex: 50,
          }}
          className="transition-all duration-300 ease-in-out"
        >
          <div className="relative p-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-xl rounded-lg">
            <div className="text-lg font-bold mb-2">Welcome to {menu[currentStep].label}</div>
            <p className="text-sm mb-4">
              Here’s what you can do in this section. Use this panel to explore features step-by-step.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleSkip}
                className="px-3 py-1 text-sm bg-white/20 hover:bg-white/30 rounded-md"
              >
                Skip
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-1 text-sm bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100"
              >
                Next
              </button>
            </div>

            {/* Pointer Arrow */}
            <div className="absolute -left-2 top-14 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 transform rotate-45 shadow-lg"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
