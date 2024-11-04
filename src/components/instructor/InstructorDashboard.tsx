import React from 'react';
import { BookOpen, Users, ClipboardList } from 'lucide-react';
import CreateCourse from './CreateCourse';

export default function InstructorDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="p-3 bg-indigo-500 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Courses</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="p-3 bg-green-500 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-500 rounded-lg">
              <ClipboardList className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Grades</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <CreateCourse />
      </div>
    </div>
  );
}