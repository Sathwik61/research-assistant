import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-white dark:bg-gray-700 rounded shadow p-6">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">User ID: 123456</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <User className="mr-2" size={20} />
            <span>{user.name}</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" size={20} />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2" size={20} />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" size={20} />
            <span>{user.location}</span>
          </div>
        </div>
        <button className="mt-6 bg-[#68ed68] text-white px-4 py-2 rounded hover:bg-[#5cd35c]">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;