import { Carousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
import React from 'react';

import Htmllogo from '../Common/htmllogo';
import Csslogo from '../Common/csslogo';
import Typescript from '../Common/Typescript';
import Nextlogo from '../Common/nextlogo';
import { Tailwind } from '../Common/tailwind';
import Nodelogo from '../Common/nodelogo';
import ReactLogo from '../Common/ReactLogo';
import Mongodblogo from '../Common/mongodblogo';
import Jslogo from '../Common/jslogo';
import Gitlogo from '../Common/gitlogo';
import Githublogo from '../Common/githublogo';
import Dockerlogo from '../Common/dockerlogo';
import Figma from '../Common/Figma';
import Sqllogo from '../Common/sqllogo';
import Sasslogo from '../Common/sasslogo';
import Pythonlogo from '../Common/pythonlogo';

const Skills = () => {
  return (
    <Box className="mt-[8rem] flex flex-col items-start">
      <div className="py-2 px-5 mt-5 mb-5 w-fit rounded-[10px] bg-primary-2 text-primary text-sm font-bold">
        🧑‍💻 Skills
      </div>
      <div className="font-semibold w-[10rem] text-2xl text-white">Technologies and skills</div>
      <Box>
        <div className="text-faded my-10 text-lg">Techs I use daily</div>
        <Carousel
          className="mt-5"
          align="start"
          slideSize="5%"
          height="auto"
          sx={{ maxWidth: '90vw' }}
          slideGap="md"
          dragFree
          withControls={false}
        >
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Htmllogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Csslogo />
            </Box>
          </Carousel.Slide>

          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Typescript />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Nextlogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Tailwind />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Nodelogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <ReactLogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Mongodblogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Jslogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Gitlogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Githublogo />
            </Box>
          </Carousel.Slide>
        </Carousel>
      </Box>
      <Box>
        <div className="text-faded my-10 text-lg ">Other techs I've done projects with</div>
        <Carousel
          className="mt-5"
          align="start"
          slideSize="5%"
          height="auto"
          sx={{ maxWidth: '90vw' }}
          slideGap="md"
          dragFree
          withControls={false}
        >
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Dockerlogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Figma />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Sqllogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Gitlogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Sasslogo />
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="w-[4rem] h-[4rem] flex justify-center">
              <Pythonlogo />
            </Box>
          </Carousel.Slide>
        </Carousel>
      </Box>
    </Box>
  );
};

export default Skills;
