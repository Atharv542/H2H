import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ola Dayoub',
      role: 'Prague, Czech Republic',
      image: 'ola.jpg',
      rating: 5,
      text: 'I met Sachin on a Facebook group about coaching. He offered 3 free coaching sessions. At that time I felt that was exactly what I needed. The great clarity of mind after the first session convinced me that I had to continue the sessions. Sachin challenged me with difficult questions and managed the sessions in a way that made every minute very effective. Thus, after three sessions, I have a clearer mind, and I am more aware of what I have to do regarding the weak points in my life. I feel empowered and more determined to be conscious of my everyday habits in order to reach my goals.',
      
    },
    {
      name: 'Manuela Ramírez Rodríguez',
      role: 'Wellness Coach, Bogotá D.C., Colombia',
      image: 'nopp.jpg',
      rating: 5,
      text: 'My experience with Sachin as a coach has been exceptional. He inspires trust quickly and is respectful from the start. His kindness comes through with every question and every question helped me dig deeper into my reality and heal what I needed to, to find my way and grow in my personal venture. I have been able to change my behaviors and thoughts in a short period of time, thanks to Sachin guidance. I would recommend his services to anyone in need of guidance either with a specific purpose or seeking to find it. Thank you Sachin, I am very grateful to you, you have helped me so much to dig deep.',
     
    },
    {
      name: 'Lindsay Young',
      role: 'Pennsylvania, United States',
      image: 'nopp.jpg',
      rating: 5,
      text: 'I have nothing but rave reviews for this gentleman and am so very grateful and blessed to have had the ability to interact with him! I became acquainted with Sachin Kaintura via the JCSC program. As he took me on as a coachee, the time spent in sessions with him, he not only maintained but also continued to unravel the beautiful intention and compassion that he possesses in aiding me to look within. Sachin has this patience that exudes peacefully in conversation. I must admit I had a fear of bearing it all to a stranger. But Sachin acquires this understated gentleness which is displayed through his interactions and speech. It was a seamless transition into working with him as well as looking forward to our time. It wasn\'t until working with him and receiving feedback that I genuinely believed/saw that I was making worthy progress and able to do so. I would work with him again and again and look forward to possible future endeavors!',
    
    },
    {
      name: 'Kha Nguyen',
      role: 'Los Angeles, CA',
      image: 'nopp.jpg',
      rating: 5,
      text: 'After working with Sachin, I was able to clearly articulate a vision for myself and greatly improved personal and professional relationships. Sachin\'s kindness, patience and mindful questions allowed me to feel safe and enabled me to delve deeper into myself. I am more confident and found greater balance in life today as a result of Sachin\'s coaching.',
      
    },
  ];

  const videoTestimonials = [
    'Review.mp4',
    'testimonial2.mp4',
    'video3.mp4',
    'video5.mp4',
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '500+', label: 'Success Stories' },
    { number: '95%', label: 'Goal Achievement Rate' },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our clients have to say about their transformational journeys
            with Head2Heart coaching services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Video Testimonials
          </h2>

          <p className="text-center text-gray-600 mb-12 text-lg">
            Watch real clients share their transformation stories
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="w-full">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-black aspect-[9/16] hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <video
                    src={video}
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Testimonials;
