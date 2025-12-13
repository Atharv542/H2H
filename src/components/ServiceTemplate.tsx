import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, BookOpen } from "lucide-react";

interface Feature {
  icon: any;
  title: string;
  description: string;
}

interface Props {
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  gradient: string;
  features: Feature[];
  included: string[];
  outcomes: string[];
 
}

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const ServiceTemplate: React.FC<Props> = ({
  badge,
  title,
  subtitle,
  duration,
  price,
  description,
  gradient,
  features,
  included,
  outcomes,
}) => {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className={`py-20 bg-gradient-to-br ${gradient}`}>
        <div className="max-w-6xl mx-auto text-center px-4">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full mb-4">
            {badge}
          </span>
          <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-blue-100 mb-6">{subtitle}</p>
          <div className="flex justify-center gap-6 text-white">
            <span>{duration}</span>
           
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-12 bg-blue-50 text-center px-4">
        <p className="max-w-3xl mx-auto text-xl text-gray-700">
          {description}
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12">
            Why This Session Matters
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl">
                <f.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* INCLUDED */}
      <section className="py-20 bg-purple-50 px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {included.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl flex gap-3">
                <CheckCircle2 className="text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12">
            What You’ll Walk Away With
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {outcomes.map((o, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl">
                <CheckCircle2 className="text-green-600 mb-2" />
                <p>{o}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-slate-700 text-center">
        <BookOpen className="h-14 w-14 text-white mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-4">
          Invest in Yourself
        </h2>
        <div className="text-6xl text-white font-bold mb-6">{price}</div>
        <button
          
          className="bg-white text-blue-700 px-10 py-5 rounded-full font-semibold inline-flex items-center gap-2"
        >
          Book Now <ArrowRight />
        </button>
      </section>
    </div>
  );
};

export default ServiceTemplate;
