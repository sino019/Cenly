import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Project from './Project';
const Home: React.FC = () => {
  return (
    // bg-gray-100 bg-[radial-gradient(gray_1px,transparent_2px)] bg-[size:20px_20px]
    <div className=" ">
    <section id='hero' className='xl:mx-40 mx-6'><Hero/></section>
    <section id='about' className='xl:mx-40 mx-6 '><About /></section>
    <section id='skills' className='xl:mx-40 mx-6'><Skills /></section>
    <section id='project' className='xl:mx-40 mx-6'><Project /></section>
    <section className='h-[1000px]'></section>
    </div>
  );
};

export default Home;
