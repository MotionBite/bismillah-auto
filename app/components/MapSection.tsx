import React from 'react';
import { siteConfig } from '../../public/data';

export default function MapSection() {
  const businessHours = [
    { day: "Saturday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Sunday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Monday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Tuesday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Wednesday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Thursday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Friday", hours: "Closed", isOpen: false }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            আমাদের অবস্থান
          </h2>
          <p className="text-xl text-gray-600">
            চাঁপাইনবাবগঞ্জ সদরে আমাদের workshop খুঁজে নিন
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.123456789!2d${siteConfig.coordinates.lng}!3d${siteConfig.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM2JzQ2LjkiTiA4OMKwMTcnNDAuMyJF!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bismillah Auto Location"
                className="w-full"
              />
            </div>
          </div>

          {/* Address & Hours */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-red-50 rounded-2xl">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Address</h3>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    {siteConfig.name}<br />
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}<br />
                    {siteConfig.address.state} {siteConfig.address.zip}, {siteConfig.address.country}
                  </address>
                </div>
              </div>
              
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center w-full justify-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Opening Hours</h3>
              </div>
              
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-1">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className={`text-sm font-semibold ${
                      schedule.isOpen ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}