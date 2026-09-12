import React from 'react';
import { siteConfig } from '../../public/data';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const getIconColor = (index: number) => {
    const colors = ['text-blue-600', 'text-green-600', 'text-yellow-600', 'text-[#0A7E7E]'];
    const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-yellow-50', 'bg-teal-50'];
    return { color: colors[index % colors.length], bg: bgColors[index % bgColors.length] };
  };

  const iconStyle = getIconColor(index);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className={`p-6 ${iconStyle.bg}`}>
        <div className={`inline-flex p-3 rounded-2xl bg-white shadow-md mb-4`}>
          <svg className={`h-8 w-8 ${iconStyle.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {service.icon === 'Settings' && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            )}
            {service.icon === 'Wrench' && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z" />
            )}
            {service.icon === 'Zap' && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            )}
            {service.icon === 'Shield' && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            )}
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{service.duration}</span>
          </div>
          <div className="font-semibold text-gray-900">
            {service.price}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <a
          href={`tel:${siteConfig.phone}`}
          className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${
            index === 0 ? 'from-blue-600 to-blue-700' :
            index === 1 ? 'from-green-600 to-green-700' :
            index === 2 ? 'from-yellow-600 to-yellow-700' :
            'from-[#0A7E7E] to-[#0A7E7E]/80'
          } text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
        >
          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Book via Phone
        </a>
      </div>
    </div>
  );
}