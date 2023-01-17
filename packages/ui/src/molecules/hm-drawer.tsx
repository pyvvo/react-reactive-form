/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/rules-of-hooks */
import { Drawer, ScrollArea, useMantineTheme } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const HMDrawer: FC<{ children: ReactNode }> = ({ ...props }) => {
  const { children } = props;
  const navigate = useNavigate();
  const theme = useMantineTheme();
  return (
    <>
      <Drawer
        opened
        onClose={() => navigate(-1)}
        position="right"
        padding="md"
        size="45%"
        overlayBlur={2}
        overlayOpacity={0.55}
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        styles={() => ({
          root: {
            '.mantine-Drawer-drawer': {
              borderRadius: '20px 0px 0px 20px'
            }
          }
        })}>
        <ScrollArea style={{ height: '100%' }} pb="6px">
          {children}
        </ScrollArea>
      </Drawer>
    </>
  );
};

export default HMDrawer;
