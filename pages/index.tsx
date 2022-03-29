import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Flex, Heading, Button, Input } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={15}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="example@gmail.com" mb={3} />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button colorScheme="telegram">Log in</Button>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
