import { Carousel } from '@mantine/carousel';
import { Box, Grid } from '@mantine/core';
import clothesstore from '../../assets/images/clothesstore.png';

import React from 'react';
import Image from 'next/image';

const WorksAndProjects = () => {
  return (
    <Box className="mt-[8rem]">
      <div className="py-2 px-5 mt-5 mb-5 w-fit rounded-[10px] bg-primary-2 text-primary text-sm font-bold">
        🔗 Portfolio
      </div>
      <div className="font-bold mb-10 w-[50vw] text-2xl text-white">Works and Projects</div>
      <Carousel
        className="mb-6"
        align="start"
        slideSize="30%"
        height="auto"
        slideGap="sm"
        dragFree
        withControls={false}
      >
        <Carousel.Slide>
          <Box className="border border-primary-light px-2 py-3 rounded-[8px] text-primary-light text-sm justify-center flex">
            Frontend
          </Box>
        </Carousel.Slide>
        <Carousel.Slide>
          <Box className="justify-center flex border border-primary-light px-2 py-3 rounded-[8px] text-primary-light text-sm">
            Backend
          </Box>
        </Carousel.Slide>
        <Carousel.Slide>
          <Box className="justify-center flex border border-primary-light px-2 py-3 rounded-[8px] text-primary-light text-sm">
            Full Stack
          </Box>
        </Carousel.Slide>
      </Carousel>
      <Carousel
        align="start"
        slideSize="90%"
        height="auto"
        slideGap="md"
        dragFree
        withControls={false}
      >
        <Carousel.Slide>
          <Box className="flex flex-col border border-primary-light rounded-[16px] px-5 py-8">
            <div className="text-lg font-bold text-white mb-5">Clothes Store</div>
            <div className="text-faded text-sm mb-5">
              A fullStack project based on MERN with full e-commerce functionality from adding to
              cart to ordering using razorpay webhook
            </div>
            <Grid className="mb-10" columns={2}>
              <Box className="bg-primary-2 text-xs text-primary px-5 py-2 m-2 rounded-[8px]">
                React JS
              </Box>
              <Box className="bg-primary-2 text-xs text-primary px-5 py-2 m-2 rounded-[8px]">
                Node JS
              </Box>
              <Box className="bg-primary-2 text-xs text-primary px-5 py-2 m-2 rounded-[8px]">
                Mongodb
              </Box>
            </Grid>
            <Box className="w-[15rem]">
              <Image src={clothesstore} alt="clothesstore" />
            </Box>
            <a className="text-primary-light text-sm font-bold mt-2" href="https://sayan-dev.github.io/Clothes-Store-frontend/">Visit Site</a>
          </Box>
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
};

export default WorksAndProjects;
