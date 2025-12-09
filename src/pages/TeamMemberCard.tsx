import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  onClick: () => void;
}

const TeamMemberCard = ({ member, index, onClick }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="relative h-80 md:h-full min-h-80 overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-3xl md:rounded-none md:rounded-l-3xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:rounded-l-3xl"></div>
        </div>

        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.1 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              {member.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.15 }}
              className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              {member.role}
            </motion.p>
          </div>

          <div className="space-y-4 mb-8">
            <motion.a
              href={`mailto:${member.email}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.2 }}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-600 transition-colors duration-300">
                <Mail className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 font-medium">Email</p>
                <p className="text-gray-700 font-medium truncate hover:text-blue-600 transition-colors">{member.email}</p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${member.phone}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.25 }}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:to-purple-600 transition-colors duration-300">
                <Phone className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium">Phone</p>
                <p className="text-gray-700 font-medium hover:text-purple-600 transition-colors">{member.phone}</p>
              </div>
            </motion.a>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Know More</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
