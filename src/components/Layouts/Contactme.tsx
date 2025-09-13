import { Box, Group, Notification } from '@mantine/core';
import React from 'react';
import { IconCheck } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';


const Contactme = () => {
  const handleCopyClick = (text: string, notifDescription: string) => {
    navigator.clipboard.writeText(text)
    showNotification({
      autoClose: 3000,
      title: "Text Copied",
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
          backgroundColor: 'var(--primary)'
        },
        closeButton: {
          color: 'var(--primary)',
        },
      }),
      icon: <IconCheck  size={14} />,
      color: 'green'
    });
  }
  return (
    <Box className="mt-[8rem] flex flex-col items-start">
      <div className="py-2 px-5 mt-5 mb-5 w-fit rounded-[10px] bg-primary-2 text-primary text-sm font-bold">
        📬 Contacts
      </div>
      <Group onClick={()=>handleCopyClick("6290982663", "Contacts copied to clipboard")} className="text-[16px] mb-5 px-2 py-3 rounded-[10px] border text-primary-light cursor-pointer">
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
      <Box>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7156 3.36572L2.24056 8.28759C2.0918 8.32826 1.9592 8.4138 1.86082 8.53255C1.76243 8.65131 1.70304 8.79751 1.69074 8.95123C1.67845 9.10496 1.71383 9.25873 1.79209 9.39162C1.87035 9.52451 1.98766 9.63004 2.12806 9.69384L10.1531 13.4907C10.3103 13.5635 10.4365 13.6898 10.5093 13.847L14.3062 21.872C14.37 22.0124 14.4755 22.1297 14.6084 22.2079C14.7413 22.2862 14.8951 22.3216 15.0488 22.3093C15.2025 22.297 15.3487 22.2376 15.4675 22.1392C15.5862 22.0408 15.6718 21.9082 15.7124 21.7595L20.6343 4.28447C20.6716 4.15695 20.6739 4.02174 20.641 3.89302C20.6081 3.7643 20.5411 3.64681 20.4472 3.55286C20.3532 3.45891 20.2357 3.39197 20.107 3.35904C19.9783 3.32611 19.8431 3.32842 19.7156 3.36572V3.36572Z"
            stroke="#00FF00"
            stroke-opacity="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3969 13.6032L14.6344 9.36572"
            stroke="#00FF00"
            stroke-opacity="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="text-primary">E-mail:</div>
        <Group>
          <div className="text-white">sayanta2702@gmail.com</div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>handleCopyClick("sayandev200@gmail.com", "Email copied to clipboard")}
            className="cursor-pointer"
          >
            <path
              d="M13.5 11.5V2.5H4.5"
              stroke="#00FF00"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5 4.5H2.5V13.5H11.5V4.5Z"
              stroke="#00FF00"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Group>
      </Box>
    </Box>
  );
};

export default Contactme;
