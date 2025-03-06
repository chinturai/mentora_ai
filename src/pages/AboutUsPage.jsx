import React from 'react'

const AboutUsPage = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            10x Your Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              with Mentora AI
            </span>
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 animate-fade-in-delay">
            <p className="text-lg text-white leading-relaxed">
              Mentora AI is an innovative platform designed to help students excel in their studies with the power of artificial intelligence. It offers a range of AI-driven tools, including an AI Smart Notepad for seamless note-taking and problem-solving, a Text-to-Image generator for visual learning, and an AI Chatbot to assist with queries and academic support.
            </p>
            <p className="text-lg text-white leading-relaxed">
              These intelligent features make learning more interactive, efficient, and engaging, empowering students to achieve their academic goals with ease.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-delay-2"
                >
                  <div className="text-teal-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 animate-float">
            <img 
              src="/AboutUsImg.jpg" 
              alt="Student interacting with AI"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delay-3">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl font-bold text-teal-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Feature data
const features = [
  {
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>,
    title: 'AI Smart Notepad',
    description: 'Take notes efficiently with AI-powered assistance and smart organization features.'
  },
  {
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/></svg>,
    title: 'Text-to-Image Generator',
    description: 'Convert complex concepts into visual representations for better understanding.'
  },
  {
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/></svg>,
    title: 'AI Chatbot Support',
    description: 'Get instant answers to your academic queries with our intelligent chatbot.'
  },
  {
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>,
    title: 'Personalized Learning',
    description: 'Adaptive learning paths tailored to your individual needs and pace.'
  }
]

// Stats data
const stats = [
  {
    value: '10k+',
    label: 'Active Students'
  },
  {
    value: '95%',
    label: 'Success Rate'
  },
  {
    value: '24/7',
    label: 'Support Available'
  }
]

export default AboutUsPage
