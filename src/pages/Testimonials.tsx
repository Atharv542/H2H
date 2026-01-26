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
      name: 'Pawan Kumar',
      role: 'Delhi, India',
      image: 'Pawan.jpg',
      rating: 5,
      text: 'I was drowning in self-doubt, gripped by constant anxiety and a raging inner insecurity about my appearance that left me stuck and overwhelmed daily. Then, in just a few electrifying sessions, Mr. SS ignited a spark with his passionate guidance, helping me embrace myself fully and unleash a rush of self-love! Now, I\'m buzzing with confidence, radiating peace, and soaring in my career—life bursts with vibrant energy and endless possibilities!',
      
    },
    {
      name: 'Manuela Ramírez Rodríguez',
      role: 'Wellness Coach, Bogotá D.C., Colombia',
      image: 'nopp.jpg',
      rating: 5,
      text: 'My experience with Sachin as a coach has been exceptional. He inspires trust quickly and is respectful from the start. His kindness comes through with every question and every question helped me dig deeper into my reality and heal what I needed to, to find my way and grow in my personal venture. I have been able to change my behaviors and thoughts in a short period of time, thanks to Sachin guidance. I would recommend his services to anyone in need of guidance either with a specific purpose or seeking to find it. Thank you Sachin, I am very grateful to you, you have helped me so much to dig deep.',
     
    },
     {
      name: 'Isha Verma',
      role: 'Delhi, India',
      image: 'Isha.jpg',
      rating: 5,
      text: 'Before the session, I often felt overwhelmed and anxious, grappling with deep inner insecurities that shattered my stability in facing day-to-day challenges. Sandeep Sharma provided clear guidance and practical strategies that helped me regain my inner peace and confidence. Thanks to this support, I now handle everyday moments with calm assurance, and our family communication has improved significantly.',
      
    },
    {
      name: 'Lindsay Young',
      role: 'Pennsylvania, United States',
      image: 'young.jpg',
      rating: 5,
      text: 'I have nothing but rave reviews for this gentleman and am so very grateful and blessed to have had the ability to interact with him! I became acquainted with Sachin Kaintura via the JCSC program. As he took me on as a coachee, the time spent in sessions with him, he not only maintained but also continued to unravel the beautiful intention and compassion that he possesses in aiding me to look within. Sachin has this patience that exudes peacefully in conversation. I must admit I had a fear of bearing it all to a stranger. But Sachin acquires this understated gentleness which is displayed through his interactions and speech. It was a seamless transition into working with him as well as looking forward to our time. It wasn\'t until working with him and receiving feedback that I genuinely believed/saw that I was making worthy progress and able to do so. I would work with him again and again and look forward to possible future endeavors!',
    
    },
     {
      name: 'Sameeta Lal',
      role: 'Auckland, New Zealand',
      image: 'Sameeta.jpg',
      rating: 5,
      text: 'I often felt challenged in showing up as my true self in relationships. I held back on who I really was. From the very beginning, you created a safe and supportive space where I felt completely comfortable opening up. You made me feel truly seen, heard, and understood in a way I hadn’t experienced before. That sense of safety allowed me to explore parts of myself I had kept hidden, and it was incredibly empowering. The impact you’ve had on me is something I’ll carry for a long time. Thank you for showing me it is ok to be an authentic version of myself, I’m deeply grateful.',
      
    },
    {
      name: 'Kha Nguyen',
      role: 'Los Angeles, CA',
      image: 'nopp.jpg',
      rating: 5,
      text: 'After working with Sachin, I was able to clearly articulate a vision for myself and greatly improved personal and professional relationships. Sachin\'s kindness, patience and mindful questions allowed me to feel safe and enabled me to delve deeper into myself. I am more confident and found greater balance in life today as a result of Sachin\'s coaching.',
      
    },
    
   
   
     {
      name: ' Ravi Chandra',
      role: 'Auckland, New Zealand',
      image: 'Ravi.jpg',
      rating: 5,
      text:'Sandeep supported me at a time when major pressures in both my work and personal life were converging, leaving me overwhelmed and lacking clear direction. He helped me regain perspective by making it easier to see what truly mattered and offering practical, structured strategies to move forward. Through his guidance, I pushed beyond my usual comfort zones and adopted new approaches that genuinely shifted my situation. His support enabled meaningful progress and restored a sense of balance during a particularly challenging period.',
      
    },
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
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Client success stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our clients have to say about their transformational journeys
            with head2heart coaching services.
          </p>
        </div>

        

        <div className="mb-20">
        
          <TestimonialCarousel testimonials={testimonials} />
        </div>

      

      
      </div>
    </div>
  );
};

export default Testimonials;
