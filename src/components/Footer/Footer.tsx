// components/Footer.tsx
import React, { useEffect, useState } from 'react';
import client from '../../lib/client';

interface FooterLink {
  text: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterData {
  sections: FooterSection[];
  copyright: string;
}

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await client.fetch<FooterData>('*[_type == "footer"][0]');
        setFooterData(response);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };

    fetchFooterData();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>; // You can replace this with a loading indicator
  }

  const { sections, copyright } = footerData;

  return (
    <footer className="bg-white text-center justify-center dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {section.title}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-4">
                    <a href={link.url} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            {copyright}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
