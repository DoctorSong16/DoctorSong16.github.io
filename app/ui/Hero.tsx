import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-11/12 max-w-screen-lg mx-auto my-10 p-5 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg">
      {/* Profile Image Section */}
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0 mb-5 md:mb-0">
        <Image
          src="/profile.jpg" // Replace with your profile image path
          alt="Profile Picture"
          width={224}
          height={224}
          className="object-cover"
        />
      </div>

      {/* Bio/Description Section */}
      <div className="md:ml-10 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">Hi, I&aposm Ashwin!</h1>
        <p className="text-lg text-gray-700">
          I&aposm a passionate software developer and robotics enthusiast. Currently, I&aposm working on innovative exoskeleton solutions designed to reduce workplace injuries and improve mobility in various industries. I enjoy solving challenging problems, creating efficient systems, and sharing knowledge through collaboration and writing.
        </p>
      </div>
    </div>
  );
};

export default Hero;