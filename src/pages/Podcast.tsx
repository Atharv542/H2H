import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Calendar, Clock, Download, Heart } from 'lucide-react';

const Podcast = () => {
  const [playingEpisode, setPlayingEpisode] = useState<string | null>(null);

  const episodes = [
    {
      id: '1',
      title: 'Finding Your True Purpose in Life',
      description: 'Discover how to uncover your life\'s true calling and align your actions with your deepest values.',
      duration: '42:15',
      date: '2024-01-15',
      guests: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Purpose & Meaning',
    },
    {
      id: '2',
      title: 'Overcoming Limiting Beliefs',
      description: 'Learn practical strategies to identify and overcome the beliefs that are holding you back.',
      duration: '38:22',
      date: '2024-01-08',
      guests: 'Michael Chen',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Mindset',
    },
    {
      id: '3',
      title: 'The Art of Self-Compassion',
      description: 'Explore how treating yourself with kindness can transform your relationship with yourself.',
      duration: '35:47',
      date: '2024-01-01',
      guests: 'Emma Rodriguez',
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Self-Love',
    },
    {
      id: '4',
      title: 'Building Resilience in Challenging Times',
      description: 'Discover tools and techniques to bounce back stronger from life\'s inevitable setbacks.',
      duration: '44:12',
      date: '2023-12-25',
      guests: 'Dr. Rachel Adams',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Resilience',
    },
    {
      id: '5',
      title: 'The Power of Authentic Relationships',
      description: 'Learn how to build deeper, more meaningful connections with others by being your authentic self.',
      duration: '39:55',
      date: '2023-12-18',
      guests: 'Mark Thompson',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Relationships',
    },
    {
      id: '6',
      title: 'Creating Work-Life Integration',
      description: 'Move beyond balance to create a life where work and personal values are aligned.',
      duration: '41:30',
      date: '2023-12-11',
      guests: 'Lisa Wong',
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Career & Life',
    },
  ];

  const categories = ['All', 'Purpose & Meaning', 'Mindset', 'Self-Love', 'Resilience', 'Relationships', 'Career & Life'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEpisodes = selectedCategory === 'All' 
    ? episodes 
    : episodes.filter(episode => episode.category === selectedCategory);

  const togglePlay = (episodeId: string) => {
    setPlayingEpisode(playingEpisode === episodeId ? null : episodeId);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="h-10 w-10 text-pink-500" />
            <h1 className="font-poppins text-5xl font-bold text-gray-900">
              Head2Heart Podcast
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join us for inspiring conversations about personal growth, transformation, 
            and living an authentic life. New episodes every Monday.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Subscribe Now</span>
            </button>
            
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Episodes List */}
        <div className="space-y-6">
          {filteredEpisodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-32 md:h-32 object-cover rounded-xl"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-2 inline-block">
                        {episode.category}
                      </span>
                      <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-2">
                        {episode.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {episode.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(episode.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{episode.duration}</span>
                      </div>
                      <span>with {episode.guests}</span>
                    </div>
                    
                    {/*<div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => togglePlay(episode.id)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                      >
                        {playingEpisode === episode.id ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </button>
                    </div>*/}
                  </div>
                </div>
              </div>
              
              {playingEpisode === episode.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Now Playing: {episode.title}</span>
                    <span className="text-sm text-gray-600">0:00 / {episode.duration}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="font-poppins text-4xl font-bold text-white mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Subscribe to our newsletter and get notified when new episodes are released.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Podcast;