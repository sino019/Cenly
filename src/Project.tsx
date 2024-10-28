import React from 'react';

const Project: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3.',
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {projects.map((project, index) => (
          <li key={index}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10 ${index % 2 === 0 ? 'md:text-end' : ''}`}>
              <time className="font-mono italic">{`Project ${index + 1}`}</time>
              <div className="text-lg font-black">{project.title}</div>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-red-600 hover:underline">View Project</a>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
