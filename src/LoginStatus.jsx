import React, { useState } from "react";
function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Conditional Rendering */}
        {isLoggedIn ? (
          <>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back!
            </h1>
            <p className="mt-3 text-gray-600">
              You are successfully logged in.
            </p>
            <button
              onClick={handleLogout}
              className="mt-6 w-full rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <span className="text-3xl">껾껿꼀껽</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome!
            </h1>
            <p className="mt-3 text-gray-600">
              Please log in to continue.
            </p>
            <button
              onClick={handleLogin}
              className="mt-6 w-full rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default LoginStatus;
