'use client';

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

function StatsCard(props) {
  const { title, stat, icon } = props;

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={5}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics() {
  return (
    <Box
      maxW="7xl"
      mx={'auto'}
      px={{ base: 2, sm: 12, md: 17 }}
      py={{ base: 20, lg: 36 }}
    >
      <Heading align={'center'} pb={10}>Our company is expanding, you could be too.</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Users'}
          stat={'5,000'}
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard
          title={'Servers'}
          stat={'1,000'}
          icon={<FiServer size={'3em'} />}
        />
        <StatsCard
          title={'Datacenters'}
          stat={'7'}
          icon={<GoLocation size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
