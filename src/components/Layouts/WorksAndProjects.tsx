import { Carousel } from '@mantine/carousel';
import { Box, Grid } from '@mantine/core';
import clothesstore from '../../assets/images/clothesstore.png';

import React from 'react';
import Image from 'next/image';
import { WORK_LIST } from '../../data/work.constants';

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
          <Box className="justify-center bg-primary-2 flex border border-primary-light px-2 py-3 rounded-[8px] text-primary text-sm">
            Frontend
          </Box>
        </Carousel.Slide>
        <Carousel.Slide>
          <Box className="justify-center bg-primary-2 flex border border-primary-light px-2 py-3 rounded-[8px] text-primary text-sm">
            Backend
          </Box>
        </Carousel.Slide>
        <Carousel.Slide>
          <Box className="justify-center bg-primary-2 flex border border-primary-light px-2 py-3 rounded-[8px] text-primary text-sm">
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
        {
          WORK_LIST.map((work)=>(
            <Carousel.Slide>
              <Box className="flex flex-col border border-primary-light rounded-[16px] px-5 py-8">
                <div className="text-lg font-bold text-white mb-5">{work.title}</div>
                <div className="text-faded text-sm mb-5">
                  {work.description}
                </div>
                <Grid className="mb-10" columns={2}>
                  {work.tech.map(e=>(
                    <div className="bg-primary-2 text-xs text-primary px-5 py-2 m-2 rounded-[8px]">
                      {e}
                    </div>
                    ))
                  }
                </Grid>
                <Box className="w-[15rem]">
                  <Image src={work.image} alt="clothesstore" />
                </Box>
                <a className="text-primary-light text-sm font-bold mt-2" href={work.link}>Visit Site</a>
              </Box>
            </Carousel.Slide>
          ))
        }

      </Carousel>
    </Box>
  );
};

export default WorksAndProjects;
