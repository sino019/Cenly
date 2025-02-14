import React from 'react';
import heroImage from './assets/img/hero.jpg';
// import ShinyText from './components/ui/sparkles-text';
const Hero = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex text-black  sticky top-0 justify-between xl:mt-4">
      <div className="container-full flex flex-col md:flex-row   justify-between w-full  ">
        <div className="text-center md:text-left md:w-1/2 xl:px-6 ">
          <h1 className="text-2xl xl:text-4xl font-bold leading-tight pt-10 xl:mt-0 ">
            BOY CENLY DWI SANDES PASELLA
          </h1>
          <p className="mt-2 text-md">
            Passionate Front-End Engineer with a flair for merging elegant
            design and powerful UI. Let's build something amazing!
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mb-6  w-full ">
            <button
              className="btn bg-blue-400 text-white flex-1 hover:bg-blue-600"
              onClick={(e) => handleScroll(e, 'about')}
            >
              HIRE ME
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="object-cover xl:w-[800px] xl:h-[800px] rounded-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
