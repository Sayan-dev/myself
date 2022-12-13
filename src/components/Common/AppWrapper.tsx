import React from 'react';
import { AppShell, Box } from '@mantine/core';

type AppWrapperProps = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <Box className="min-h-screen rounded-none bg-background-light">
      <AppShell padding={0} fixed>
        <Box className="my-auto">{children}</Box>
      </AppShell>
    </Box>
  );
};

export default AppWrapper;
