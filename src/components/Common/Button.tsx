import { ActionIcon, Box, Button } from '@mantine/core';
import classNames from 'classnames';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  color: 'blue' | 'white';
  size?: 'xl' | 'lg' | 'md' | 'sm';
  buttonvariant: 'round' | 'normal';
  onClick?: (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading?: boolean;
};

const UserButton = ({ children, ...props }: ButtonProps) => {
  let ButtonComponent = (
    <Button
      size="lg"
      className={classNames(
        'focus:ring-0 focus:outline-none focus:ring-none font-medium',
        `text-${props.size} rounded-full`,
        {
          'text-black bg-white hover:bg-white border-dark': props.color === 'white',
          'text-white bg-primary hover:bg-primary': props.color === 'blue',
        },
      )}
      {...props}
    >
      {children}
    </Button>
  );
  if (props.buttonvariant === 'round')
    ButtonComponent = (
      <ActionIcon
        size="xl"
        className={classNames(
          'focus:ring-0 focus:outline-none focus:ring-none font-medium',
          `text-${props.size} rounded-full`,
          {
            'text-black bg-white hover:bg-white border-dark': props.color === 'white',
            'text-white bg-primary hover:bg-primary': props.color === 'blue',
          },
        )}
        variant="filled"
        {...props}
      >
        {children}
      </ActionIcon>
    );
  return ButtonComponent;
};

export default UserButton;
