import React from 'react';

interface MeetzedCardProps {
  title: string;
  role: string;
  period: string;
  bullets: string[];
}

const MeetzedCard = ({ title, role, period, bullets }: MeetzedCardProps) => {
  return (
    <div className="bg-white dark:bg-[#1C1C1C] col-span-4 rounded-3xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-black dark:text-white">{title}</h2>
        <span className="text-sm text-gray-600 dark:text-gray-400">{period}</span>
      </div>
      <h3 className="text-gray-400 mb-4">{role}</h3>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-gray-400">
            • {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetzedCard;