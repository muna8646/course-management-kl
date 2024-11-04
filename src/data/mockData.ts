import { Course, User } from '../types';

export const currentUser: User = {
  name: 'John Doe',
  role: 'student',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=facearea&facepad=2&q=80',
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced Web Development',
    description: 'Master modern web development techniques and best practices',
    instructor: 'Sarah Johnson',
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.8,
    students: 1234,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of ML and AI',
    instructor: 'Michael Chen',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.6,
    students: 2156,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Data Structures & Algorithms',
    description: 'Master fundamental computer science concepts',
    instructor: 'Alex Thompson',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 1876,
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&auto=format&fit=crop&q=80',
  },
];