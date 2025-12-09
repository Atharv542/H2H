import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Heart, Zap, Target } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamMemberModal = ({ member, onClose }: TeamMemberModalProps) => {
  if (!member) return null;

  const highlights = [
    { icon: Heart, label: 'Compassionate', color: 'from-red-500 to-pink-500' },
    { icon: Zap, label: 'Energetic', color: 'from-yellow-500 to-orange-500' },
    { icon: Target, label: 'Focused', color: 'from-blue-500 to-cyan-500' },
  ];

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-4xl mx-auto">
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <X className="h-6 w-6 text-gray-600" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                </div>

                <div className="px-8 sm:px-12 py-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h1 className="text-5xl font-bold text-gray-900 mb-2">{member.name}</h1>
                    <p className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-8">
                      {member.role}
                    </p>

                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-10"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">About</h2>
                    <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-10"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.a
                        href={`mailto:${member.email}`}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Email Address</p>
                        <p className="text-gray-900 font-bold truncate hover:text-blue-600 transition-colors">
                          {member.email}
                        </p>
                      </motion.a>

                      <motion.a
                        href={`tel:${member.phone}`}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">Phone Number</p>
                        <p className="text-gray-900 font-bold hover:text-purple-600 transition-colors">
                          {member.phone}
                        </p>
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Qualities</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {highlights.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                          >
                            <item.icon className="h-6 w-6 text-white" />
                          </motion.div>
                          <p className="font-bold text-gray-900">{item.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal;
