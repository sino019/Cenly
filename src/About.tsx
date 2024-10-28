import React from 'react';
import aboutImage from './assets/img/1727631424356.png';

const About = () => {
    const cv = '/src/assets/cv/cv.pdf'; // Ensure the path is correct
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = cv; // Use the defined cv variable
        link.setAttribute('download', 'cv.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div className="container-full mx-auto   m-6  xl:py-20">
      <div className="flex flex-col-reverse md:flex-row    ">
        <div className="md:w-1/4 flex justify-center  xl:p-2  w-full ">
          <img src={aboutImage} alt="About" className="object-cover rounded-lg shadow-lg w-auto h-auto md:w-80  md:h-80 mt-2" />
        </div>

        <div className="md:w-3/4  xl:p-2 text-justify">
          <h1 className="text-4xl font-bold mb-2 ">ABOUT ME</h1>
          <p className="text-lg mb-4 ">Passionate Web Developer with a love for creating beautiful and functional websites.</p>
          <div className=" mb-4">
            <p className="mb-2"><strong>Name:</strong> Boy Cenly Dwi Sandes Pasella</p>
            <p className="mb-2"><strong>Age:</strong> 22</p>
            <p className="mb-2"><strong>Phone:</strong> +62 822 1177 9935</p>
            <p className="mb-2"><strong>Address:</strong> Kecamatan Kayu Aro, Kabupaten Kerinci, Jambi</p>
            <p className="mb-2"><strong>Current Position:</strong> Programmer at Lembaga Penelitian dan Pengabdian Masyarakat Universitas Andalas</p>
            <p className="mb-2"><strong>Social:</strong>
              <a href="#" className="text-blue-500 mx-1">Facebook</a>
              <a href="#" className="text-blue-400 mx-1">Twitter</a>
              <a href="#" className="text-green-500 mx-1">WhatsApp</a>
            </p>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md" onClick={downloadCV}>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
