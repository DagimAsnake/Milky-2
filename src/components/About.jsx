import { useState, useEffect } from 'react';
import net from '../assets/img/nettt.jpg';
import net1 from '../assets/img/net1.jpg';
import net2 from '../assets/img/net2.jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // Import arrow icons

import Button from '../layout/Button';
import { Link } from 'react-scroll';

const images = [net, net1, net2]; // Replace with your image paths

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Auto slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#406b86] to-[#90f3e7]">
      <div className="min-h-screen flex items-center justify-center flex-col md:flex-row md:justify-between mx-5 md:mx-32">

        <div className="w-full md:w-2/4 relative mx-5">
          <div className="relative rounded-lg overflow-hidden shadow-xl md:mt-0 mt-10">
            <div style={{ paddingBottom: "56.25%" }}>
              <img
                src={images[currentImageIndex]}
                alt="img"
                className="object-cover absolute w-full h-full transition-transform duration-300 transform translate-x-0"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
              <button
                className="absolute inset-y-0 bg-opacity-50 text-white p-2 hover:bg-opacity-75"
                onClick={prevImage}
              >
                <BsChevronLeft className="text-2xl" />
              </button>
              <button
                className="absolute inset-y-0 right-0  bg-opacity-50 text-white p-2 hover:bg-opacity-75"
                onClick={nextImage}
              >
                <BsChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            News<span className="text-3xl md:text-5xl font-semibold text-brightGreen"> Feed </span>
          </h2>

          <p className="text-brightGreen mt-5 text-start mb-5">
            A strong information Technology infrastructure is extremely critical for any country to achieve
            robust economic growth, competitive manpower development, high performing education system, and
            enhanced health care system.
          </p>

          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Read More" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
