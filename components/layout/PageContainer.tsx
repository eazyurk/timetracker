import { Flex } from '@chakra-ui/react';
import React from 'react';
import { AtRule } from 'csstype';
import Page = AtRule.Page;

interface PageContainerProps {
  isFixedNav: boolean;
  children: any;
}

const PageContainer = ({ isFixedNav, children }: PageContainerProps) => {
  return (
    <Flex
      bg="secondary.background"
      minHeight="100%"
      width="100%"
      justifyContent="top"
      flexDirection="column"
      paddingTop={isFixedNav ? { md: '4rem' } : '0'}
    >
      {children}
    </Flex>
  );
};

export default PageContainer;
