import React, { useState, useEffect } from 'react';
import { RiMenu5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      setIsVisible(window.scrollY < navbarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`bg-white shadow-sm fixed top-0 w-full z-50  transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between xl:mx-40 p-6 ">
        <div className="text-red-500 text-lg font-bold">ボイセンリー</div>
        <div className="md:hidden">
          <label className="btn btn-circle swap swap-rotate bg-transparent border-0 shadow-none rounded-none hover:bg-transparent">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={toggleMenu} checked={isOpen} />

            {/* hamburger icon */}
            <RiMenu5Fill className="swap-off" size={32} />

            {/* close icon */}
            <RxCross2 className="swap-on fill-current" size={32} />
          </label>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="" className="text-dark py-2" onClick={(e) => handleScroll(e, 'hero')}>Home</a>
          <a href="" className="text-dark py-2" onClick={(e) => handleScroll(e, 'about')}>About</a>
          <a href="" className="text-dark py-2" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
          <a href="" className="text-dark py-2" onClick={(e) => handleScroll(e, 'project')}>Project</a>
          <a href="" className="text-dark py-2">Contact</a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  text-black p-4">
          <div className="flex flex-col space-y-4">
            <a href="" className="block py-2 border-b">Home</a>
            <a href="" className="block py-2 border-b">About</a>
            <a href="" className="block py-2 border-b">Skills</a>
            <a href="" className="block py-2 border-b">Project</a>
            <a href="" className="block py-2 border-b">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
