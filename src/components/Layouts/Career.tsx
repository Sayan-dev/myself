import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import React from 'react';
import { CAREER_LIST } from '../../data/career.constants';

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
          className="mt-3"
          align="start"
          slideSize="60%"
          height="auto"
          slideGap="md"
          dragFree
          withControls={false}
        >
          {CAREER_LIST.map((career)=>(
            <Carousel.Slide>
              <Box className="flex flex-col border border-primary-light rounded-[16px] p-5">
                <div className="text-lg font-bold text-white mb-2">
                  {career.title}
                </div>
                <div className="text-faded text-sm">
                 {career.description}
                </div>
                <Box className="flex flex-row justify-between mt-5">
                  <div className="text-primary text-xs">{career.currentlyWorking}</div>
                  <div className="text-primary text-xs">{career.duration}</div>
                </Box>
              </Box>
            </Carousel.Slide>
          ))}


        </Carousel>
      </Box>
    </Box>
  );
};

export default Career;
