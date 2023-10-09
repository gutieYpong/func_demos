'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

import DemoModal from '../components/DemoModal';
import InfiniteScroll from '../components/InfiniteScroll';
import FetchData from '../components/FetchData/fetchData';
import FetchDataHook from '../components/FetchData/fetchData(Hook)';
import FetchDataUseReducer from '../components/FetchData/fetchData(Reducer)';
import NormalInterval from '../components/SetIntervals/normalInterval';
import { FaBolt, FaBomb, FaBong } from 'react-icons/fa';
import DynamicIntervalUseHook from '../components/SetIntervals/dynamicInterval(Hook)';
import DynamicIntervalInClass from '../components/SetIntervals/dynamicInterval(Class)';
import AdvancedInterval from '../components/SetIntervals/advanceInterval';


const Card = ({ heading, description, icon, DemoComponent }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <DemoModal modalTitle={heading}>
          <DemoComponent />
        </DemoModal>
      </Stack>
    </Box>
  );
};

export default function Features({ showAll }) {
  return (
    <Box px={4} py={{ base: 20, lg: 36 }}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Demo List
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Click on any function, a demo Modal will jump out then manipulation of
          demos will be come possible. Let&apos;s give it a try.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {
            showAll ?
              DEMOS_PROPERTIES_MAP.map((item) => (
                <Card
                  key={item.id}
                  heading={item.heading}
                  icon={<Icon as={item.icon} w={10} h={10} />}
                  description={item.desc}
                  DemoComponent={item.demo}
                />
              ))
            :
              DEMOS_PROPERTIES_MAP.slice(0, 5).map((item) => (
                <Card
                  key={item.id}
                  heading={item.heading}
                  icon={<Icon as={item.icon} w={10} h={10} />}
                  description={item.desc}
                  DemoComponent={item.demo}
                />
              ))
          }
        </Flex>
      </Container>
    </Box>
  );
}

const DEMOS_PROPERTIES_MAP = [
  {
    id: 'infinite-scroll',
    heading: 'Infinite Scroll',
    icon: FcAssistant,
    desc: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    demo: InfiniteScroll,
  },
  {
    id: 'fetch-data',
    heading: 'Fetch Data',
    icon: FcCollaboration,
    desc: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    demo: FetchData,
  },
  {
    id: 'fetch-data-hook',
    heading: 'Fetch Data w/ hook',
    icon: FcDonate,
    desc: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    demo: FetchDataHook,
  },
  {
    id: 'fetch-data-reducer',
    heading: 'Fetch Data w/ reducer',
    icon: FcManager,
    desc: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    demo: FetchDataUseReducer,
  },
  {
    id: 'normal-intervals',
    heading: 'Normal Interval',
    icon: FcAbout,
    desc: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    demo: NormalInterval,
  },
  {
    id: 'dynamic-interval-hook',
    heading: 'Dynamic Interval w/ hook',
    icon: FaBolt,
    desc: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    demo: DynamicIntervalUseHook,
  },
  {
    id: 'dynamic-interval-class',
    heading: 'Dynamic Interval w/ Class',
    icon: FaBomb,
    desc: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    demo: DynamicIntervalInClass,
  },
  {
    id: 'advance-intervals',
    heading: 'Advance Interval',
    icon: FaBong,
    desc: 'Lorem ipsum dolor sit amet catetur, adipisicing elit.',
    demo: AdvancedInterval,
  },
];
