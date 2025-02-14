import React from 'react';
import Me from '@/assets/img/hero.jpg';
import Kaito from '@/assets/img/kaito.png';
import Unand from '@/assets/img/unand.png';

const Accordion: React.FC = () => {
  const items = [
    {
      title: 'PHP Native & MySQL Database',
      content: (
        <>
          Developed an information system for laptop purchase recommendations
          using the SMART method.{' '}
          <a
            href="https://jkomtekinfo.org/ojs/index.php/komtekinfo/article/view/464"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </>
      ),
      logo: Kaito,
    },
    {
      title: 'Yii2 Framework & MySQL Database',
      content: (
        <>
          Created a dynamic website using the Yii2 Framework and MySQL Database.
        </>
      ),
      logo: Unand,
    },
    {
      title: 'Vite React & Fetch API',
      content: (
        <>
          Developed the research website for Unand.{' '}
          <a
            href="https://research.unand.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read more
          </a>
        </>
      ),
      logo: Unand,
    },
  ];

  return (
    <article className="p-6   rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <img
          src={Me}
          alt="Hero"
          className="rounded-full object-cover w-28 h-28 border-4 border-blue-500"
        />
        <div className="text-center mt-4">
          <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Twitter
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              GitHub
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Website
            </a>
          </div>
        </div>
      </div>

      <ul className="space-y-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-start gap-4 md:flex-row md:items-center"
          >
            <img src={item.logo} alt="" className="w-20 rounded-lg " />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-700">{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Accordion;
