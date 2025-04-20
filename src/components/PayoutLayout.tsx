// components/PayoutLayout.tsx
import { NavLink, Outlet } from "react-router-dom";

export default function PayoutLayout() {
  return (
    <div className="payouts-layout">
      <div className="tabs bg-white px-6 pt-4">
        <div className="flex space-x-4 border-b border-gray-200">
          <NavLink
            to="/payouts/all"
            className={({ isActive }) =>
              `pb-2 text-sm font-medium ${
                isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`
            }
          >
            All Payouts
          </NavLink>
          <NavLink
            to="/payouts/disputes"
            className={({ isActive }) =>
              `pb-2 text-sm font-medium ${
                isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`
            }
          >
            Disputes
          </NavLink>
          <NavLink
            to="/payouts/settings"
            className={({ isActive }) =>
              `pb-2 text-sm font-medium ${
                isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`
            }
          >
            Payout Settings
          </NavLink>
        </div>
      </div>

      <div className="outlet-container p-6">
        <Outlet />
      </div>
    </div>
  );
}
