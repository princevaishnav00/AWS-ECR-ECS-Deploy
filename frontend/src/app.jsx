import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            AWS ECS + ECR Node.js App 🚀
          </h1>

          <p className="text-gray-300 text-lg">
            Modern React + Node.js + Docker + AWS Deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>

              <p className="text-gray-300 mb-4">
                Role: {user.role}
              </p>

              <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-xl font-semibold transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;