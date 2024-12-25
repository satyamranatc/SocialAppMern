import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Image } from 'lucide-react';
import axios from 'axios';

export default function Account() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [LogedIn, setLogedIn] = useState(false);
  const [LogedInUser, setLogedInUser] = useState({});

  useEffect(() => {
    let User = JSON.parse(localStorage.getItem("User"));
    if(User) {
      setLogedIn(true);
      setLogedInUser(User);
    }
  }, []);

  async function SignUpUser(e) {
    e.preventDefault();

    let UserData = {
      FullName: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
      avtar: e.target[3].value
    }

    let Res = await axios.post("http://localhost:5500/api/users", UserData);
    setLogedIn(true);
    let User = Res.data;
    setLogedInUser(User);
    localStorage.setItem("User", JSON.stringify(User));
  }

  async function SignInUser(e) {
    e.preventDefault();

    let UserData = {
      username: e.target[0].value,
      password: e.target[1].value,
    }

    let Res = await axios.post("http://localhost:5500/api/users/signin", UserData);
    setLogedIn(true);
    let User = Res.data.user;
    setLogedInUser(User);
    localStorage.setItem("User", JSON.stringify(User));
  }

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 ">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {!LogedIn ? (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Welcome to Social App
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {isSignIn ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsSignIn(!isSignIn)}
                  className="ml-2 text-blue-600 hover:text-blue-500 font-medium"
                >
                  {isSignIn ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>

            <div className="mt-8">
              {isSignIn ? (
                <form onSubmit={SignInUser} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your username"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign In
                  </button>
                </form>
              ) : (
                <form onSubmit={SignUpUser} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Choose a username"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        placeholder="Create a password"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Image className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        placeholder="Enter profile picture URL"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </div>
          </>
        ) : (
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img 
                  src={LogedInUser.avtar} 
                  alt={LogedInUser.FullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome, {LogedInUser.FullName}!
              </h2>
              <p className="text-gray-600 mt-2">@{LogedInUser.username}</p>
            </div>
            
            <button
              onClick={() => {
                localStorage.removeItem("User");
                setLogedIn(false);
                setLogedInUser({});
              }}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}