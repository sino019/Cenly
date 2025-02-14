import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Sosial from './Sosial';
// import SkillPar from './SkillPar';

const Home: React.FC = () => {
  return (
    // bg-gray-100 bg-[radial-gradient(gray_1px,transparent_2px)] bg-[size:20px_20px]
    <div className="bg-gray-100">
      <section
        id="hero"
        className="xl:mx-40 mx-6 border"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
          linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
        `,
        }}
      >
        <Hero />{' '}
      </section>
      <section
        id="about"
        className="xl:mx-40 mx-6 border "
        style={{
          backgroundSize: '20px 20px',
          backgroundImage: `
          radial-gradient(circle, rgba(128, 128, 128, .2) 1px, transparent 1px)
        `,
        }}
      >
        <About />
      </section>
      <section
        id="skills"
        className="xl:mx-40 mx-6 border"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
          linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
        `,
        }}
      >
        <Skills />
        {/* <SkillPar /> */}
      </section>
      <section
        id="project"
        className="xl:mx-40 mx-6 border"
        style={{
          backgroundSize: '20px 20px',
          backgroundImage: `
        radial-gradient(circle, rgba(128, 128, 128, .2) 1px, transparent 1px)
      `,
        }}
      >
        <div
          className=" "
          style={{
            backgroundSize: '20px 20px',
            backgroundImage: `
        radial-gradient(circle, rgba(128, 128, 128, .2) 1px, transparent 1px)
      `,
          }}
        >
          {/* <p className="text-center">dalam pengembangan</p> */}
          <Project />
        </div>
      </section>
      <section
        id="contact"
        className="xl:mx-40 mx-6 border"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
          `,
        }}
      >
        <div className=" ">
          <Sosial />
        </div>
      </section>
    </div>
  );
};

export default Home;
