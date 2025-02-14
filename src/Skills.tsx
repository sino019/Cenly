import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tw from './assets/img/tw.svg';
const Skills: React.FC = () => {
  const skills = [
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
      name: 'Yii',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg',
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Tailwind',
      icon: Tw,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center py-10 ">MY SKILLS</h2>
      <button
        onClick={() => setShowAll(!showAll)}
        className="px-4 py-2 bg-blue-400 text-white "
      >
        {showAll ? 'Less' : 'More'}
      </button>
      <div className="grid grid-cols-3 lg:grid-cols-3 " id="skills-container">
        <AnimatePresence>
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-10 border bg-white "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-semibold">{skill.name}</h2>
              {typeof skill.icon === 'string' ? (
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="text-4xl mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
              ) : (
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="text-4xl mb-2"
                  style={{ width: '60px', height: '60px' }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
