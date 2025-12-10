import React from "react";

const team = [
  {
      id: 'sachin-kaintura',
      name: 'Sachin Kaintura',
      email: 'sachin.kaintura@head2heart.co.nz',
      phone: '+64211368819',
      image: '/team/Sachin.png',
      role: 'Personal Development & Mindfulness Coach',
      
  },
    {
      id: 'sandeep-sharma',
      name: 'Sandeep Sharma',
      email: 'sandeep.sharma@head2heart.co.nz',
      phone: '+6421903306',
      image: '/team/Sandeep.jpg',
      role: 'Mindset & Abundance Coach',
    },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Meet Our Team</h1>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />

            <h2 className="text-xl font-semibold text-center">{member.name}</h2>
            <p className="text-center text-gray-500 mb-3">{member.role}</p>

            <div className="text-sm text-gray-600">
              <p><strong>Email:</strong> {member.email}</p>
              <p><strong>Phone:</strong> {member.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
