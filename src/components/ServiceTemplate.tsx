import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, BookOpen, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";

/* ---------------- TYPES ---------------- */

interface Feature {
  icon: any;
  title: string;
  description: string;
}

interface IsItForMeItem {
  title: string;
  description: string;
}

interface Props {
  badge: string;
  title: string;

  duration: string;
  price: string;
  description: string;
  gradient: string;
  features: Feature[];
  included: string[];
  outcomes: string[];
  stripeItemId: string;

  // ✅ NEW (optional): reuse template for all services
  isItForMeTitle?: string; // default: "Is It For Me?"
  isItForMeSubtitle?: string; // default: "If you are…"
  isItForMeItems?: IsItForMeItem[]; // pass from each service page
}

/* ---------------- ANIMATION WRAPPER ---------------- */

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

/* ---------------- TEMPLATE ---------------- */

const ServiceTemplate: React.FC<Props> = ({
  badge,
  title,

  duration,
  price,
  description,
  gradient,
  features,
  included,
  outcomes,
  stripeItemId,

  // ✅ new props with defaults
  isItForMeTitle = "Is It For Me?",
  isItForMeSubtitle = "If you are…",
  isItForMeItems,
}) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsub();
  }, []);

  /* -------- STRIPE CHECKOUT -------- */
  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login first!");
      navigate("/login");
      return;
    }

    if (!user.emailVerified) {
      toast.error("Please verify your email before booking a session.");
      return;
    }

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item: stripeItemId }),
      });

      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error", err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ---------------- HERO ---------------- */}
      <section className={`py-20 bg-gradient-to-br ${gradient}`}>
        <div className="max-w-6xl mx-auto text-center px-4">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full mb-4">
            {badge}
          </span>
          <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>

          <div className="flex justify-center gap-6 text-white font-medium">
            <span>{duration}</span>
          </div>
        </div>
      </section>

      {/* ---------------- DESCRIPTION ---------------- */}
      <section className="py-12 bg-blue-50 text-center px-4">
        <p className="max-w-3xl mx-auto text-xl text-gray-700">{description}</p>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="py-20 px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12">
            Why this session matters
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

      {/* ---------------- IS IT FOR ME? (REUSABLE) ---------------- */}
      {isItForMeItems && isItForMeItems.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                  {isItForMeTitle}
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  {isItForMeSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
                {isItForMeItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                    <div className="relative bg-white border-2 border-transparent hover:border-blue-300 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <span className="text-white font-bold text-lg">✓</span>
                      </div>

                      <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-block bg-gradient-to-r from-blue-600 to-slate-700 px-8 py-4 rounded-full">
                  <p className="text-white font-bold text-2xl">
                    Then this is for You
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ---------------- INCLUDED ---------------- */}
      <section className="py-20 bg-purple-50 px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12">What's included</h2>

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

      {/* ---------------- OUTCOMES ---------------- */}
      <section className="py-20 px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12">
            What you'll walk away with
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

      {/* ---------------- INVESTMENT ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Investment</h2>
              <p className="text-gray-600 text-lg">Invest in your personal growth</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* ---- LEFT: PRICE CARD ---- */}
              <div className="bg-gradient-to-br from-blue-600 to-slate-700 p-8 rounded-3xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-2">1:1 Coaching Program</h3>

                <div className="text-5xl mt-2 font-bold mb-6">{price}</div>

                <ul className="space-y-3 mb-8">
                  {included.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-white text-blue-700 py-4 rounded-full font-semibold hover:bg-gray-100 transition flex justify-center items-center gap-2"
                >
                  Book Now <ArrowRight />
                </button>
              </div>

              {/* ---- RIGHT: CUSTOM QUOTE ---- */}
              <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold">Corporate / Team</h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Custom program for teams & organizations
                </p>

                <ul className="space-y-5 mb-8 py-5 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-blue-600" />
                    Tailored coaching program for your team
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-blue-600" />
                    Interactive group materials & workbooks
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-blue-600" />
                    Engaging team activities & discussions
                  </li>
                </ul>

                <Link
                  to={user ? "/contact" : "/login"}
                  className="block w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white text-center py-4 rounded-full font-semibold hover:opacity-90 transition"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-slate-700 text-center">
        <BookOpen className="h-14 w-14 text-white mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-white mb-4">Ready to begin?</h2>
        <p className="text-blue-100 text-lg">Your transformation starts here.</p>
      </section>
    </div>
  );
};

export default ServiceTemplate;
