export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
  image: string;
  assignments: Assignment[];
  content: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor';
  avatar: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
}

export interface StudentProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  assignmentGrades: {
    assignmentId: string;
    grade: number;
    feedback: string;
    submitted: boolean;
    submissionDate?: string;
  }[];
  overallProgress: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}