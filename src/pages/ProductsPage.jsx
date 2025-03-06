import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div className="min-h-[90vh] bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our AI Tools
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Discover our suite of AI-powered tools designed to enhance your learning experience
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-delay"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Link
                  to={product.link}
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Go to {product.title}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                {product.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const products = [
  {
    title: 'ULTIMATE AI',
    description: 'AI Notes Taking APP, Get real time answers to your handwritten notes',
    image: '/ultimate_ai.jpg',
    status: 'Popular',
    link: 'http://localhost:5173/', // Edit this Link during execution
    features: [
      'Real-time handwriting recognition',
      'Instant answers and explanations',
      'Smart organization system',
      'Export and share capabilities'
    ]
  },
  {
    title: 'VISION AI',
    description: 'Leverage our Text to Image generator in your studies and projects',
    image: '/Text2Img.jpg',
    status: 'New',
    link: 'https://img-generation-fawn.vercel.app/',
    features: [
      'High-quality image generation',
      'Custom style controls',
      'Batch processing',
      'Educational templates'
    ]
  },
  {
    title: 'MENTORA BOT',
    description: 'Our GPT 4.0 Powered chatbot which is available to solve your doubts 24/7',
    image: '/ai_chatbot.png',
    status: 'AI Powered',
    link: 'https://menotra-bot.vercel.app/',
    features: [
      '24/7 availability',
      'GPT-4.0 intelligence',
      'Multi-subject expertise',
      'Personalized responses'
    ]
  }
]

export default ProductsPage
