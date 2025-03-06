import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px] bg-[position:center] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px] bg-[position:center] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_200px,rgba(20,184,166,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_800px,rgba(20,184,166,0.1),transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
        {/* Floating Elements */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Main Content */}
        <div className="relative space-y-12 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500/10 via-teal-500/20 to-teal-500/10 rounded-full px-6 py-2 mb-8 backdrop-blur-sm border border-teal-500/10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-sm text-teal-200 font-medium">AI-Powered Learning Assistant</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
            <span className="text-white">Transform Your </span>
            <span className="text-white">Learning  Experience with</span>
            <span className="block mt-2 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Mentora AI
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
            Enhance your studies with AI-powered tools designed to help you learn smarter, 
            not harder. Get personalized assistance whenever you need it.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delay-2">
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:scale-105 transition-transform duration-500"></div>
              <span className="relative flex items-center">
                Explore Tools
                <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </Link>
            <Link
              to="/contactus"
              className="group px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Give Feedback
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto animate-fade-in-delay-3">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm
                  hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  hover:shadow-teal-500/10 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Value and Label */}
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 
                      text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium group-hover:text-teal-300 
                      transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full 
                        transform origin-left scale-x-0 animate-progress-delay group-hover:scale-x-100 
                        transition-transform duration-1000"
                      style={{ width: `${stat.progress}%` }}
                    ></div>
                  </div>

                  {/* Status Text */}
                  <div className="text-xs text-gray-500 flex items-center space-x-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${stat.status.color}`}></span>
                    <span className="group-hover:text-teal-300 transition-colors duration-300">
                      {stat.status.text}
                    </span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 
                  opacity-20 blur-lg rounded-tl-xl transform group-hover:scale-150 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const stats = [
  {
    value: '10k+',
    label: 'Active Users',
    progress: 85,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
      </svg>
    ),
    status: {
      color: 'bg-green-500',
      text: 'Growing steadily'
    }
  },
  {
    value: '95%',
    label: 'Success Rate',
    progress: 95,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
      </svg>
    ),
    status: {
      color: 'bg-teal-500',
      text: 'Excellent performance'
    }
  },
  {
    value: '24/7',
    label: 'Support',
    progress: 100,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
      </svg>
    ),
    status: {
      color: 'bg-blue-500',
      text: 'Always available'
    }
  }
]

export default HomePage
