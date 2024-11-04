import { Clock, Users, Star } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        className="h-48 w-full object-cover"
        src={course.image}
        alt={course.title}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}`}>
            {course.level}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {course.students.toLocaleString()} students
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">Instructor:</span>
            <span className="ml-2 text-sm font-medium text-gray-900">{course.instructor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}