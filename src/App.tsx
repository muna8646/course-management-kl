import React from 'react';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import LoginForm from './components/auth/LoginForm';
import InstructorDashboard from './components/instructor/InstructorDashboard';
import StudentDashboard from './components/student/StudentDashboard';

function App() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {user?.role === 'instructor' ? <InstructorDashboard /> : <StudentDashboard />}
      </main>
    </div>
  );
}

export default App;