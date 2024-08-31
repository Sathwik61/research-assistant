import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Home as HomeIcon, FileText, User, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Documents from './components/Documents';
import Profile from './components/Profile';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logged out');
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'dark text-white' : 'text-black'}`}>
      {/* Sidebar */}
      <aside className={`w-64 fixed top-0 left-0 h-full bg-gray-100 dark:bg-black transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="p-4 h-full overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link to="/dash" className={`flex items-center p-2 rounded ${isActive('/dash') ? 'bg-[#68ed68] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                <HomeIcon className="mr-2" size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/dash/documents" className={`flex items-center p-2 rounded ${isActive('/dash/documents') ? 'bg-[#68ed68] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                <FileText className="mr-2" size={20} />
                Documents
              </Link>
            </li>
            <li>
              <Link to="/dash/profile" className={`flex items-center p-2 rounded ${isActive('/dash/profile') ? 'bg-[#68ed68] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                <User className="mr-2" size={20} />
                Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                <LogOut className="mr-2" size={20} />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 ease-in-out`}>
        {/* Header */}
        <header className="bg-[#68ed68] p-4 flex justify-between items-center">
          <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-black p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="documents" element={<Documents />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;