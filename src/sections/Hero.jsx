'use client';

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { IU } from '../assets';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box
      bg={useColorModeValue(
        'brand.aquamarine.DEFAULT',
        'brand.wisteria.DEFAULT'
      )}
    >
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 4, md: 20 }}
          align={'center'}
        >
          <Box
            w={{ base: 40, md: 48 }}
            h={{ base: 56, md: 64 }}
            boxShadow={'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, #7F46A6 -2px 6px 8px 0px'}
          >
            <Image
              w={'100%'}
              h={'auto'}
              src={IU}
              alt={'theme picture'}
              objectFit={'cover'}
            />
          </Box>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            A Place for Experiments<br />
            <Text as={'span'} color={'green.400'}>
              and Possibilities
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Also shout out to me goddness - IU. A talented singer, composer and actress. Being the GOAT is not an easy done and it requires hard work, talent and luck.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <NavLink to={`/demos`}>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
              >
                Discover
              </Button>
            </NavLink>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
