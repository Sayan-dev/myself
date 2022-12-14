import React from 'react';
import { AppShell, Box } from '@mantine/core';
import AppHeader from './AppHeader';

type AppWrapperProps = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <Box className="min-h-screen rounded-none bg-background-dark">
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        // navbar={<SideNavbar handleLogout={handleLogout} opened={opened} />}
        // header={<AppHeader handleLogout={handleLogout} setOpened={setNavigationOpen} />}
        header={<AppHeader />}
        fixed
      >
        <Box className="my-auto">{children}</Box>
      </AppShell>
    </Box>
  );
};

export default AppWrapper;
