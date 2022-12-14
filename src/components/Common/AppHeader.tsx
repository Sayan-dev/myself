import { Box, Group, Header, Image, Text } from '@mantine/core'
import React from 'react'
import logo from '../../assets/images/logo.png'

const AppHeader = () => {
  return (
    <Header className="hidden">
    <Box className="mx-auto bg-background-dark relative">
      <Group className="flex flex-row	justify-between md:justify-start items-center px-[16px] py-[25px] md:p-[25px]">
        <Box className="flex justify-center items-center p-2 md:p-3 rounded-full border bg-light w-[45px] h-[45px]">
          <Image src={logo.src} alt='myself'/>
        </Box>
        <Box className="flex flex-col grow md:max-w-auto gap-[10px]">
          <Box className="flex flex-row	justify-start items-center gap-0 bg-dark-grey rounded-[15px] h-[45px] grow">
            <Box className="max-w-[200px] truncate md:max-w-[500px] md:min-w-[256px] h-[35px] flex items-center md:border-r border-solid border-light">
            </Box>
          </Box>
        </Box>
        {/* <Burger opened={opened} onClick={handlers.toggle} className="md:hidden" size="sm" /> */}
        {/* <Transition transition="pop-top-left" duration={200} mounted={opened}>
          {styles => (
            <Paper
              className="absolute bg-background-dark top-[80px] left-0 right-0 bottom-0 z-10 rounded-none overflow-hidden md:hidden"
              withBorder
              style={styles}
            >
              <SideNavbar opened={opened} close={handlers.close} handleLogout={handleLogout} />
            </Paper>
          )}
        </Transition> */}
      </Group>
    </Box>
  </Header>
  )
}

export default AppHeader
