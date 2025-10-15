import React from 'react';

interface MeetzedCardProps {
  title: string;
  role: string;
  period: string;
  bullets: string[];
}

const MeetzedCard = ({ title, role, period, bullets }: MeetzedCardProps) => {
  return (
    <div className="bg-foreground col-span-4 rounded-3xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <span className="text-sm text-gray-400">{period}</span>
      </div>
      <h3 className="text-gray-400 mb-4">{role}</h3>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-white">
            • {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetzedCard;