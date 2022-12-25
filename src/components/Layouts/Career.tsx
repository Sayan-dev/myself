import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import React from 'react';

const Career = () => {
  return (
    <Box className="mt-10 flex flex-col items-start">
      <div className="py-2 px-5 mt-5 mb-5 w-fit rounded-[10px] bg-primary-2 text-primary text-sm font-bold">
        💼 Career
      </div>
      <div className="font-semibold mb-10 w-[10rem] text-2xl text-white">My career path</div>
      <Box>
        <Box>
          <div className="text-white font-extrabold text-lg">Professional Area</div>
          <div className="text-faded text-sm">2020 - Present</div>
        </Box>
        <Carousel
          className="mt-5"
          align="start"
          slideSize="80%"
          height="auto"
          slideGap="md"
          dragFree
          withControls={false}
        >
          <Carousel.Slide>
            <Box className="flex flex-col border border-primary-light rounded-[16px] p-5">
              <div className="text-lg font-bold text-white mb-2">
                Full Stack Developer at Sconto
              </div>
              <div className="text-faded text-sm">
                Being a part of the founding team building the company from scratch.
              </div>
              <Box className="flex flex-row justify-between mt-5">
                <div className="text-primary text-xs">6 months</div>
                <div className="text-primary text-xs">May/2022 · December/2022</div>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col border border-primary-light rounded-[16px] p-5">
              <div className="text-lg font-bold text-white mb-2">Founding Engineer at Mentro</div>
              <div className="text-faded text-sm">
                Built from scratch supporting the company with the tech.
              </div>
              <Box className="flex flex-row justify-between mt-5">
                <div className="text-primary text-xs">1 year</div>
                <div className="text-primary text-xs">December/2020 · December/2021</div>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col border border-primary-light rounded-[16px] p-5">
              <div className="text-lg font-bold text-white mb-2">Web Developer at TeamCognito</div>
              <div className="text-faded text-sm">
                Worked in both backend and frontend projects.
              </div>
              <Box className="flex flex-row justify-between mt-5">
                <div className="text-primary text-xs">3 months</div>
                <div className="text-primary text-xs">April/2020 · July/2020</div>
              </Box>
            </Box>
          </Carousel.Slide>
        </Carousel>
      </Box>
    </Box>
  );
};

export default Career;
