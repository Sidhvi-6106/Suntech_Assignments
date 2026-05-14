import React from 'react'

import { Link } from 'react-router'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-fade-in">
      <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center font-bold text-5xl shadow-2xl shadow-cyan-500/50 mb-4 transform hover:scale-105 transition-transform duration-300">
        🚀
      </div>
      <h1 className="text-6xl font-extrabold tracking-tight">
        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">UserManage</span>
      </h1>
      <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
        A modern, robust, and beautiful platform to manage your users. Built with React, Tailwind CSS, and a powerful Node.js backend.
      </p>
      <div className="flex gap-4 pt-4">
        <Link to="/users-list" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl shadow-lg shadow-cyan-500/30 transition-all transform hover:-translate-y-1">
          View Users
        </Link>
        <Link to="/add-user" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all transform hover:-translate-y-1">
          Add New User
        </Link>
      </div>
    </div>
  )
}

export default Home