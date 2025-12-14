import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Target,
  Lightbulb,
  Users,
  Sparkles,
} from "lucide-react";
 const services = [
  {
    title: "Discover Your Purpose",
    description:
      "Discover your true calling and create a life aligned with your deepest values and passions.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/purpose-coaching",
    price: "$499",
  },
  {
    title: "Find Your Clarity & Focus",
    description:
      "Unlock your full potential with personalized strategies for sustainable growth and success.",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/clarity-coaching",
    price: "$499",
  },
  {
    title: "Experience Mindfulness",
    description:
      "Cultivate inner peace and present-moment awareness to enhance your surroundings.",
    image:
      "https://static.vecteezy.com/system/resources/previews/029/354/655/large_2x/ai-generative-of-a-man-practicing-mindfulness-and-meditation-in-a-peaceful-natural-environment-sony-a7s-realistic-image-ultra-hd-high-design-very-detailed-free-photo.jpg",
    link: "/mindfulness-coaching",
    price: "$499",
  },
  {
    title: "Awareness & Discovery",
    description:
      "Begin your transformation with a powerful self-awareness reset.",
    image:
      "https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/awareness-program",
    price: "$99",
  },
  {
    title: "Transform Your Life",
    description:
      "A mindfulness-based inner connection and life clarity experience.",
    image:
      "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/transform-program",
    price: "$399",
  },
  {
    title: "Burnout Recovery",
    description:
      "Burnout is not a sign of weakness—it’s a signal that something in your life needs care and boundaries.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.tpnaaf114Lv9jXpzZ2VlawHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/burnout-program",
    price: "$699",
  },
  {
    title: "Stress Awareness & Management",
    description:
      "Learn practical tools to manage stress and regain emotional balance.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.90RuQdYVA1Q3VKHPix3c4wHaFq?rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/stress-program",
    price: "$899",
  },
  {
    title: "Releasing Limiting Beliefs",
    description:
      "Transform thought patterns that hold you back from growth and fulfillment.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/limitingbelief-program",
    price: "$599",
  },
  {
    title: "Confidence Building",
    description:
      "Build unshakable confidence and trust yourself in every area of life.",
    image:
      "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/confidence-program",
    price: "$1,299",
  },
  {
    title: "Work–Life Balance",
    description:
      "Create harmony between your professional and personal life.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/work-program",
    price: "$749",
  },
  {
    title: "Procrastination",
    description:
      "Understand the root causes of procrastination and take control of your time.",
    image:
      "https://masterbundles.com/wp-content/uploads/2023/11/procrastination_madterbundles-3-957.jpg",
    link: "/procrastination-program",
    price: "$1,799",
  },
  {
    title: "Boosting Self Esteem",
    description:
      "Develop self-worth, confidence, and a positive self-image.",
    image:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/selfesteem-program",
    price: "$1,799",
  },
];


function Services() {
  return (
    <section id="services" className="py-20 bg-white scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <section>
                <div className="text-center mb-16">
                  <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                    Our Programs & Services
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Discover our comprehensive range of services designed to support
                    your personal growth and transformation.
                  </p>
                </div>
              </section>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <section key={service.title} delay={index * 0.1}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3 font-medium">
                          {service.subtitle}
                        </p>
                        <div className="flex items-center justify-between mb-3 text-sm">
                          <span className="text-gray-600">{service.duration}</span>
                          
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {service.description}
                        </p>
                        <Link
                          to={service.link}
                          className="block w-full text-center bg-gradient-to-r from-blue-600 to-slate-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>
  )
}

export default Services