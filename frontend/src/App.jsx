import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Feed from './Pages/Feed';
import Account from './Pages/Account';

export default function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem('User'));
    if (User) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Fixed Navigation */}
        <NavBar className="fixed top-0 left-0 right-0 h-16 z-50" />

        {/* Main Layout - Push content below navbar */}
        <div className="pt-16 flex">
          {/* Fixed Sidebar */}
          <div className="fixed left-0 top-16 hidden md:block">
            <SideBar />
          </div>

          {/* Main Content - Add padding to account for sidebar */}
          <main className="w-full">
            <div className="max-w-4xl mx-auto">
              <Routes>
                <Route path="/" element={LoggedIn ? <Feed /> : <Navigate to="/account" />} />
                <Route path="/account" element={<Account />} />
                <Route path="/friends" element={<div>Friends Page</div>} />
                <Route path="/saved" element={<div>Saved Items</div>} />
                <Route path="/notifications" element={<div>Notifications</div>} />
                <Route path="/settings" element={<div>Settings</div>} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
