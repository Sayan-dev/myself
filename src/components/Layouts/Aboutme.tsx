import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import myself from '../../assets/images/myself.png';

const Aboutme = () => {
  return (
    <Box className="flex flex-col items-center mt-16">
      <Image src={myself} alt="myself" />
      <Box className="flex flex-col mt-6">
        <div className="py-2 px-5 mt-5 mb-5 w-fit rounded-[10px] bg-primary-2 text-primary font-bold text-sm">
          👋 About Me!
        </div>
        <div className="font-semibold mb-10 w-[10vw] text-2xl text-white">
          Sayanta Bhattacharjee
        </div>
        <p className="text-lg leading-8 text-faded mt-2 mb-6 text-justify ">
          But you can just call me Sayanta. Pleasure! For over 2 years developing and programming
          interfaces with JavaScript, React JS, Typescript, NodeJS and MongoDB. Graduated in
          Computer Science Engineering from Government College of Engineering and Leather Technology
          (GCELT). Interests in Front-end development and Back-end Development with React, React
          Native, Express, MongoDB, etc.
        </p>
        <p className="text-lg leading-8 text-faded text-justify">
          🚀 Upwards and Beyond, Sky is not the limit.{' '}
        </p>
      </Box>
    </Box>
  );
};

export default Aboutme;
