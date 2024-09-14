import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ResuMatchApp = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-indigo-800 text-white">
      <nav className="fixed w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            ResuMatch
          </a>
          <div className="space-x-4">
            <a href="/job-seekers" className="hover:text-pink-400 transition duration-300">For Job Seekers</a>
            <a href="/employers" className="hover:text-pink-400 transition duration-300">For Employers</a>
            <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full transition duration-300">Sign Up</button>
          </div>
        </div>
      </nav>

      <header className="h-screen flex items-center justify-center relative overflow-hidden">
        <div style={parallaxStyle} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-800 opacity-50"></div>
          <img src="/image.jpg" alt="Abstract background" className="w-full h-full object-cover" />
        </div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold mb-4"
          >
            Find Your Dream Job with AI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Upload your resume and let our AI match you with the perfect opportunity
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg hover:from-pink-600 hover:to-purple-700 transition duration-300 shadow-lg"
          >
            Upload Resume
          </motion.button>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          &#9660; {/* Down arrow Unicode character */}
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📤", title: "Upload Resume", desc: "Share your experience in any format" },
              { icon: "✨", title: "AI Analysis", desc: "Our AI decodes your unique skill set" },
              { icon: "💼", title: "Job Matching", desc: "Get matched with your ideal positions" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Top Job Matches</h2>
          <div className="space-y-6">
            {[
              { title: "Senior Software Engineer", company: "TechCorp Inc.", location: "San Francisco, CA", skills: ["Python", "React", "AWS"] },
              { title: "Data Scientist", company: "DataDrive Solutions", location: "New York, NY", skills: ["Machine Learning", "SQL", "TensorFlow"] }
            ].map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-300">{job.company} - {job.location}</p>
                <div className="mt-2 flex flex-wrap">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="bg-pink-600 text-white px-2 py-1 rounded-full text-sm mr-2 mt-2">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg"
            >
              View All Matches
            </motion.button>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: "ResuMatch helped me land my dream job in just two weeks! The AI matching is incredibly accurate.", author: "Sarah J., Software Developer" },
              { quote: "As an employer, ResuMatch has revolutionized our hiring process. We're finding top talent faster than ever.", author: "Mark T., HR Manager" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
              >
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 mt-20">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">ResuMatch</h3>
            <p>Connecting talent with opportunity</p>
          </div>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="/about" className="hover:text-pink-400 transition duration-300">About Us</a>
            <a href="/privacy" className="hover:text-pink-400 transition duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-pink-400 transition duration-300">Terms of Service</a>
            <a href="/contact" className="hover:text-pink-400 transition duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResuMatchApp;