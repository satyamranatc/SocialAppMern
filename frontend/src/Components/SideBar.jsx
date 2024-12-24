import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Users, Bookmark, Settings, Bell } from 'lucide-react';

export default function SideBar() {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Feed', path: '/' },
    { icon: User, label: 'Account', path: '/account' },
    { icon: Users, label: 'Friends', path: '/friends' },
    { icon: Bookmark, label: 'Saved', path: '/saved' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-white h-screen fixed top-16 left-0 w-64 border-r border-gray-200 overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4">
          <div className="space-y-4">
            <div className="px-3 py-2">
              <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
            </div>

            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActiveRoute(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`h-5 w-5 mr-3 ${
                      isActive ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* User Profile Section - Always at bottom */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center px-3 py-2 space-x-3">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <span>JD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">@johndoe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}