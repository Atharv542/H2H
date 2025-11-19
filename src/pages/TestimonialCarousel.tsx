import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  achievement: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <div className="overflow-hidden max-w-4xl mx-auto">
        <div className="transition-all duration-500">
          <TestimonialCard testimonial={currentTestimonial} />
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      <div className="flex justify-center mt-8 gap-2">
        {[...Array(testimonials.length)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-blue-600'
                : 'w-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
