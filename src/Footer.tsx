import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cat from './assets/img/me.jpg';

export function Footer({
  title = 'Copyright 2024 - Boy Cenly Dwi Sandes Pasella',
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.1 }}
      className="mx-6 lg:mx-0 "
    >
      <a
        href="https://www.framer.com/motion/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={cat}
          alt="Logo"
          className="rounded-sm m-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
        />
      </a>
      <a
        href="https://www.framer.com/docs/scroll-animations/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <code>{title}</code>
      </a>
    </motion.footer>
  );
}
