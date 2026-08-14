import React, { useState } from "react";
function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        {/* Practical Title */}
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Practical 6
        </p>
        <h1 className="mt-2 mb-8 text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]">
          Login/Logout Toggle Application
        </h1>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg shadow-sky-500/10">
          {/* Conditional Rendering */}
          {isLoggedIn ? (
            <>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950 ring-2 ring-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="text-3xl">✓</span>
              </div>

              {/* Online Status Dot */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-400">Online</span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                {getGreeting()}!
              </h2>
              <p className="mt-2 text-lg text-emerald-400 font-semibold">
                Welcome Back!
              </p>
              <p className="mt-2 text-gray-400">
                You are successfully logged in.
              </p>
              <button
                onClick={handleLogout}
                className="mt-6 w-full rounded-lg bg-rose-600 px-5 py-3 font-semibold text-white transition hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-500/25"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-950 ring-2 ring-sky-500/40 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                <span className="text-3xl">👤</span>
              </div>

              {/* Offline Status Dot */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="h-3 w-3 rounded-full bg-gray-600"></span>
                <span className="text-xs font-medium text-gray-500">Offline</span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                {getGreeting()}!
              </h2>
              <p className="mt-2 text-lg text-sky-400 font-semibold">
                Welcome!
              </p>
              <p className="mt-2 text-gray-400">
                Please log in to continue.
              </p>
              <button
                onClick={handleLogin}
                className="mt-6 w-full rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/25"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default LoginStatus;
