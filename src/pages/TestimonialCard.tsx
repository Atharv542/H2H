import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
    achievement: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center mb-8">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover mr-6 border-2 border-blue-100"
        />
        <div>
          <h3 className="font-semibold text-xl text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex items-center mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <div className="relative flex-grow">
        <Quote className="h-12 w-12 text-blue-200 absolute -top-2 -left-2" />

        <p className="text-gray-700 leading-relaxed mb-8 pl-8 italic text-lg">
          "{testimonial.text}"
        </p>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-base font-medium text-blue-600">
          {testimonial.achievement}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
