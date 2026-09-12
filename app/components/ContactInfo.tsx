import React from 'react';
import { siteConfig } from '../../public/data';

export default function ContactInfo() {
  const whatsappNumber = siteConfig.phone.replace('+88', '88');

  const contactInfo = [
    {
      title: "Phone Number",
      details: siteConfig.phone,
      action: `tel:${siteConfig.phone}`,
      color: "text-[#0A7E7E]",
      bgColor: "bg-teal-50",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      )
    },
    {
      title: "WhatsApp",
      details: "চ্যাট করুন বা কল করুন",
      action: `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in Motolock GPS tracker.`,
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: (
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
      )
    },
    {
      title: "Our Location",
      details: `${siteConfig.address.street}, ${siteConfig.address.city}`,
      action: `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`,
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      )
    },
    {
      title: "Business Hours",
      details: `Sat-Thu: ${siteConfig.businessHours.weekdays} | Friday: ${siteConfig.businessHours.friday}`,
      action: null,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            যোগাযোগের তথ্য
          </h2>
          <p className="text-xl text-gray-600">
            আমাদের সাথে যোগাযোগের সহজ উপায়সমূহ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="group">
              {info.action ? (
                <a
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
                >
                  <ContactInfoContent info={info} />
                </a>
              ) : (
                <div className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <ContactInfoContent info={info} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ContactInfoItem = {
  title: string;
  details: string;
  action: string | null;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
};

function ContactInfoContent({ info }: { info: ContactInfoItem }) {
  return (
    <>
      <div className={`inline-flex p-3 rounded-2xl ${info.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <svg className={`h-6 w-6 ${info.color}`} fill={info.title === 'WhatsApp' ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
          {info.icon}
        </svg>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0A7E7E] transition-colors">
        {info.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {info.details}
      </p>
    </>
  );
}