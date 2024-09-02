import React from 'react';

const members = [
  { name: 'Reus', logo: '/assets/logos/l1.png' },
  { name: 'Tecnipro', logo: '/assets/logos/l2.png' },
  { name: 'Farmalat', logo: '/assets/logos/l3.png' },
];

const Members = () => {
    return (
        <div className="container mx-auto py-8 flex flex-col">
          <h2 className="text-4xl font-bold text-center mb-8">
            Miembros de <span className="text-blue_anmac">ANMAC</span>
          </h2>
          <div className="custom-grid">
            {members.map((member, index) => (
              index < 4 && (
                <div key={index} className="flex items-center justify-center shadow-md rounded-md gap-2">
                  <img src={member.logo} alt={member.name} className="h-24 object-contain" />
                </div>
              )
            ))}
          </div>
        </div>
      );
}

export default Members;
