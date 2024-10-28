import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp } from '@fortawesome/free-brands-svg-icons';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', details: 'A markup language for creating web pages.', icon: faHtml5 },
    { name: 'CSS', details: 'A style sheet language for designing web pages.', icon: faCss3Alt },
    { name: 'JavaScript', details: 'A programming language for web development.', icon: faJs },
    { name: 'React', details: 'A JavaScript library for building user interfaces.', icon: faReact },
    { name: 'TypeScript', details: 'A typed superset of JavaScript.', icon: faJs }, // No specific TypeScript icon, using JS icon
    { name: 'PHP', details: 'A popular general-purpose scripting language that is especially suited to web development.', icon: faPhp }
  ];

  return (
    <div className="join join-vertical w-full my-10">
        <h1 className='text-4xl font-bold text-center p-4'>SKILLS</h1>
      {skills.map((skill, index) => (
        <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="skills-accordion" defaultChecked={index === 0} />
          <div className="collapse-title text-xl font-medium">
            <FontAwesomeIcon icon={skill.icon} className="mr-2" />
            {skill.name}
          </div>
          <div className="collapse-content">
            <p>{skill.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
