import { BookOpen, Bell, User } from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduHub</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src={currentUser.avatar}
                alt={currentUser.name}
              />
              <span className="text-sm font-medium text-gray-700">{currentUser.name}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}