import { Box, Grid, Group, SimpleGrid } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { Carousel } from '@mantine/carousel';
import { IconCheck } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';

const Intro = () => {
  const handleCopyClick = (text: string, notifDescription: string) => {
    navigator.clipboard.writeText(text);
    showNotification({
      autoClose: 3000,
      title: 'Text Copied',
      message: notifDescription,
      styles: () => ({
        root: {
          backgroundColor: 'var(--background-dark)',
          border: '1px solid var(--primary-2)',
          '&::before': { backgroundColor: 'var(--background-dark)' },
          borderRadius: '12px',
        },
        title: { color: 'var(--primary)' },
        description: {
          color: 'var(--light)',
          fontSize: '16px',
          fontWeight: 600,
        },
        icon: {
          backgroundColor: 'var(--primary)',
        },
        closeButton: {
          color: 'var(--primary)',
        },
      }),
      icon: <IconCheck size={14} />,
      color: 'green',
    });
  };
  return (
    <Box className="mt-2">
      <Group className="justify-center items-center py-5">
        <a target="_blank" href="https://github.com/Sayan-dev">
          <Box className="h-[40px] w-[40px] rounded-full">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_6)">
                <path
                  d="M12 0C5.37 0 1.75145e-06 5.50596 1.75145e-06 12.3038C-0.00135931 14.8867 0.790578 17.4045 2.26346 19.4999C3.73634 21.5954 5.81538 23.162 8.2056 23.9777C8.8056 24.0847 9.03 23.7156 9.03 23.392C9.03 23.1004 9.0144 22.1321 9.0144 21.1011C6 21.6707 5.22 20.3481 4.98 19.6554C4.8444 19.301 4.26 18.2097 3.75 17.9168C3.33 17.6868 2.73 17.1171 3.7344 17.1023C4.68 17.0863 5.3544 17.9943 5.58 18.3635C6.66 20.2238 8.3856 19.7009 9.0744 19.3785C9.18 18.5788 9.4944 18.0411 9.84 17.7335C7.17 17.4259 4.38 16.3641 4.38 11.6579C4.38 10.3192 4.8444 9.21311 5.61 8.35061C5.49 8.04301 5.07 6.78187 5.73 5.09009C5.73 5.09009 6.7344 4.76773 9.03 6.35247C10.0069 6.07447 11.0162 5.93456 12.03 5.9366C13.05 5.9366 14.07 6.0744 15.03 6.35124C17.3244 4.75174 18.33 5.09132 18.33 5.09132C18.99 6.7831 18.57 8.04424 18.45 8.35184C19.2144 9.21311 19.68 10.3045 19.68 11.6579C19.68 16.3801 16.8756 17.4259 14.2056 17.7335C14.64 18.1174 15.0156 18.8556 15.0156 20.0097C15.0156 21.6547 15 22.9774 15 23.3933C15 23.7156 15.2256 24.0995 15.8256 23.9765C18.2076 23.1519 20.2775 21.5821 21.7439 19.4882C23.2103 17.3943 23.9993 14.8816 24 12.3038C24 5.50596 18.63 0 12 0Z"
                  fill="white"
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_6">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/sayan-dev/">
          <Box className="h-[40px] w-[40px] rounded-full">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_105_4)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.96792e-07 2.00509C2.96792e-07 1.47331 0.21125 0.963308 0.587278 0.58728C0.963305 0.211253 1.47331 2.67307e-06 2.00509 2.67307e-06H21.9927C22.2563 -0.000427747 22.5173 0.0511258 22.7609 0.151712C23.0045 0.252298 23.2258 0.399941 23.4123 0.586188C23.5987 0.772435 23.7466 0.993628 23.8475 1.2371C23.9483 1.48058 24.0001 1.74156 24 2.00509V21.9927C24.0003 22.2563 23.9486 22.5174 23.8479 22.761C23.7472 23.0046 23.5994 23.2259 23.4131 23.4123C23.2268 23.5988 23.0055 23.7466 22.762 23.8475C22.5184 23.9483 22.2574 24.0001 21.9938 24H2.00509C1.74169 24 1.48086 23.9481 1.23752 23.8473C0.994184 23.7464 0.773096 23.5986 0.586892 23.4123C0.400688 23.226 0.253017 23.0049 0.152316 22.7615C0.0516145 22.5181 -0.000143013 22.2572 2.96792e-07 21.9938V2.00509ZM9.49964 9.15055H12.7495V10.7825C13.2185 9.84437 14.4185 9 16.2218 9C19.6789 9 20.4982 10.8687 20.4982 14.2975V20.6487H16.9996V15.0785C16.9996 13.1258 16.5305 12.024 15.3393 12.024C13.6865 12.024 12.9993 13.212 12.9993 15.0785V20.6487H9.49964V9.15055ZM3.49964 20.4993H6.99927V9H3.49964V20.4982V20.4993ZM7.5 5.24946C7.5066 5.5491 7.45328 5.84704 7.34317 6.1258C7.23306 6.40456 7.06838 6.65851 6.8588 6.87276C6.64921 7.08702 6.39894 7.25725 6.12268 7.37346C5.84641 7.48968 5.54972 7.54955 5.25 7.54955C4.95028 7.54955 4.65359 7.48968 4.37732 7.37346C4.10106 7.25725 3.85079 7.08702 3.6412 6.87276C3.43162 6.65851 3.26694 6.40456 3.15683 6.1258C3.04672 5.84704 2.9934 5.5491 3 5.24946C3.01295 4.6613 3.25569 4.10159 3.67624 3.69021C4.09678 3.27882 4.6617 3.04846 5.25 3.04846C5.8383 3.04846 6.40322 3.27882 6.82376 3.69021C7.24431 4.10159 7.48705 4.6613 7.5 5.24946V5.24946Z"
                  fill="white"
                  fill-opacity="0.501961"
                />
              </g>
              <defs>
                <clipPath id="clip0_105_4">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </a>

        <a target="_blank" href="https://www.instagram.com/saynbeatbox/">
          <Box className="h-[40px] w-[40px] rounded-full">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_103_6)">
                <path
                  d="M12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
                  fill="white"
                  fill-opacity="0.501961"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2L0 16.8C0 18.7096 0.758569 20.5409 2.10883 21.8912C3.45909 23.2414 5.29044 24 7.2 24H16.8C18.7096 24 20.5409 23.2414 21.8912 21.8912C23.2414 20.5409 24 18.7096 24 16.8V7.2C24 5.29044 23.2414 3.45909 21.8912 2.10883C20.5409 0.758569 18.7096 0 16.8 0L7.2 0ZM6.4 12C6.4 10.5148 6.99 9.09041 8.0402 8.0402C9.09041 6.99 10.5148 6.4 12 6.4C13.4852 6.4 14.9096 6.99 15.9598 8.0402C17.01 9.09041 17.6 10.5148 17.6 12C17.6 13.4852 17.01 14.9096 15.9598 15.9598C14.9096 17.01 13.4852 17.6 12 17.6C10.5148 17.6 9.09041 17.01 8.0402 15.9598C6.99 14.9096 6.4 13.4852 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z"
                  fill="white"
                  fill-opacity="0.501961"
                />
              </g>
              <defs>
                <clipPath id="clip0_103_6">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </a>
      </Group>
      <Box className="flex justify-center"></Box>
      <Box className="flex flex-col mb-6">
        <div className="py-2 px-5 my-5 w-fit rounded-[10px] bg-primary-2 text-primary font-bold">
          👋 Hello!
        </div>
        <div className="font-bold leading-[4rem] text-[2.5rem] text-white">
          Sayanta Bhattacharjee
        </div>
        <div className="text-xl text-faded mt-2"> Full Stack Developer </div>
      </Box>
      <Group>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1XsXB_a_88Zul7PFj0tcs_tzLUkwjwB8R/view?usp=share_link"
          download={'Sayanta_Bhattacharjee'}
        >
          <Group className="text-lg text-primary-light">
            My Resume
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2.25V12.9375"
                stroke="#00FF00"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.9375 7.875L9 12.9375L14.0625 7.875"
                stroke="#00FF00"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.8125 15.1875H15.1875"
                stroke="#00FF00"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Group>
        </a>

        <Group
          onClick={() => handleCopyClick('8100838105', 'Contacts copied to clipboard')}
          className="text-lg px-2 py-3 rounded-[10px] border text-primary-light"
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.54684 13.8281C2.61628 12.2581 2.29079 10.4025 2.63146 8.60949C2.97213 6.81652 3.95553 5.20954 5.39706 4.09025C6.83859 2.97096 8.6391 2.41633 10.4606 2.53049C12.2821 2.64464 13.9992 3.41972 15.2897 4.71023C16.5802 6.00073 17.3553 7.71791 17.4695 9.53939C17.5836 11.3609 17.029 13.1614 15.9097 14.6029C14.7904 16.0444 13.1834 17.0278 11.3905 17.3685C9.5975 17.7092 7.74183 17.3837 6.17184 16.4531V16.4531L3.57809 17.1875C3.47182 17.2186 3.35915 17.2205 3.25189 17.1931C3.14462 17.1656 3.04671 17.1098 2.96842 17.0315C2.89013 16.9533 2.83434 16.8553 2.8069 16.7481C2.77946 16.6408 2.78139 16.5281 2.81247 16.4219L3.54684 13.8281Z"
                stroke="#00FF00"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.8828 14.375C11.0605 14.3771 10.2458 14.2166 9.48563 13.9029C8.72547 13.5891 8.0348 13.1282 7.45329 12.5467C6.87179 11.9652 6.41092 11.2745 6.09717 10.5144C5.78341 9.75422 5.62296 8.93956 5.62502 8.11719C5.62709 7.53838 5.85847 6.98399 6.26848 6.57544C6.67849 6.16689 7.23371 5.9375 7.81252 5.9375V5.9375C7.90802 5.93674 8.00195 5.96173 8.08444 6.00985C8.16693 6.05797 8.23493 6.12744 8.28127 6.21094L9.19533 7.80469C9.24969 7.90157 9.27759 8.01106 9.27621 8.12214C9.27484 8.23323 9.24425 8.34199 9.18752 8.4375L8.45314 9.66406C8.8293 10.5009 9.49917 11.1707 10.336 11.5469L11.5625 10.8125C11.658 10.7558 11.7668 10.7252 11.8779 10.7238C11.989 10.7224 12.0984 10.7503 12.1953 10.8047L13.7891 11.7188C13.8726 11.7651 13.942 11.8331 13.9902 11.9156C14.0383 11.9981 14.0633 12.092 14.0625 12.1875C14.0605 12.7657 13.8304 13.3197 13.4223 13.7293C13.0142 14.1389 12.461 14.3709 11.8828 14.375V14.375Z"
                stroke="#00FF00"
                stroke-opacity="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Contact Me
        </Group>
      </Group>
      <Box className="flex flex-col mx-auto justify-center items-center mt-10">
        <Box className="flex flex-col justify-center items-center border border-primary py-10 px-16 rounded-[16px] my-8">
          <svg
            width="76"
            height="64"
            viewBox="0 0 76 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 22L4 32L16 42"
              stroke="#00ff00"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48 22L60 32L48 42"
              stroke="#00ff00"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M40 10L24 54"
              stroke="#00ff00"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g filter="url(#filter0_d_21_5442)">
              <circle
                cx="52"
                cy="34"
                r="20"
                fill="#00ff00"
                fill-opacity="0.2"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_21_5442"
                x="28"
                y="14"
                width="48"
                height="48"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_21_5442"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_21_5442"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className="text-white text-lg mt-2 ">3 years as</div>
          <div className="text-white text-2xl font-bold">Programmer</div>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
