import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, User } from "lucide-react";

const team = {
  "sachin-kaintura": {
    name: 'Sachin Kaintura',
      email: 'sachin.kaintura@head2heart.co.nz',
      phone: '+64211368819',
      image: '/team-new/Sachin.png',
      role: 'Personal Development & Mindfulness Coach',
  },
  "sandeep-sharma": {
    name: 'Sandeep Sharma',
      email: 'sandeep.sharma@head2heart.co.nz',
      phone: '+6421903306',
      image: '/team-new/Sandeep.jpg',
      role: 'Mindset & Abundance Coach',
  },
};

const MemberProfile2 = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const member = team[memberId];

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Member Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black transition mb-6"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      {/* Card */}
      <div className="bg-white max-w-xl mx-auto p-8 rounded-3xl shadow-xl border">
        
        <div className="text-center">
          <img
            src={member.img}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow"
          />
          <h1 className="text-3xl font-bold">{member.name}</h1>
          <p className="text-gray-500 text-lg mb-4">{member.role}</p>
        </div>

       

        {/* Contact section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
            <Mail className="text-blue-600" />
            <span>{member.email}</span>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
            <Phone className="text-green-600" />
            <span>{member.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile2;
