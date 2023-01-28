import {
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
  Icon,
  Button,
  Box,
} from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import { User } from '../../utils/Types'
import { AiFillEye, AiFillEyeInvisible, AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const initState = {
  email: '',
  password: '',
}

interface Props {}

const Login = (props: Props) => {
  const [passwordVis, setPasswordVis] = useState('')
  const [user, setUser] = useState<User>(initState)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Center w="full" h="100vh" bg="#F2F5F7">
      <VStack
        w={{ base: '99%', md: '404px' }}
        p="10px"
        h="fit-content"
        py="20px"
      >
        <Text fontSize={'21px'} fontWeight="700">
          Sign In
        </Text>
        {/* Form */}

        <FormControl as="form" onSubmit={handleSubmit}>
          <FormLabel>Email</FormLabel>
          <Input
            h="45px"
            variant={'unstyled'}
            bg="white"
            type={'email'}
            p="5px"
            px="10px"
            rounded={'xl'}
            _focus={{ outline: '0px solid gray' }}
            border="1px solid gray"
            value={user.email}
            onChange={({ target: { value } }) =>
              setUser({ ...user, email: value })
            }
            mb="20px"
          />
          <FormLabel>Password</FormLabel>
          <HStack
            h="45px"
            w="full"
            border="1px solid gray"
            p="5px"
            px="10px"
            rounded={'xl'}
            bg="white"
          >
            <Input
              h="full"
              variant={'unstyled'}
              outline={'hidden'}
              _focus={{ outline: '0px solid white', border: 'hidden' }}
              border="hidden"
              type={passwordVis}
              _autofill={{ bg: 'white' }}
              value={user.password}
              onChange={({ target: { value } }) =>
                setUser({ ...user, password: value })
              }
            />
            {passwordVis === 'text' ? (
              <Icon
                as={AiFillEye}
                cursor="pointer"
                onClick={() => setPasswordVis('password')}
                fontSize={'22px'}
              />
            ) : (
              <Icon
                as={AiFillEyeInvisible}
                cursor="pointer"
                onClick={() => setPasswordVis('text')}
                fontSize={'22px'}
              />
            )}
          </HStack>
          <Link href={'#'}>
            <Text
              w="full"
              color={'rgba(36, 147, 223, 1)'}
              textAlign={'right'}
              mt="5px"
              _hover={{ textDecoration: 'underline' }}
            >
              Forgot Password?
            </Text>
          </Link>
          <Button mt="30px" w="full" colorScheme={'blue'} type="submit">
            Login
          </Button>
        </FormControl>
        {/* Divider */}

        <HStack w="full" py="10px" justify={'center'} align="center">
          <Box w="45%" border="0.1px solid gray" opacity={0.3}></Box>
          <Text>or</Text>
          <Box w="45%" border="0.1px solid gray" opacity={0.3}></Box>
        </HStack>
        {/* OAuth Buttons */}

        <HStack w="full" justify={'center'} align="center" gap={{ md: '10px' }}>
          <Button
            border={'1px solid red '}
            leftIcon={<Icon as={FcGoogle} />}
            variant={'outline'}
            color="red"
          >
            Google
          </Button>
          <Button
            border={'1px solid black '}
            leftIcon={<Icon as={FaGithub} />}
            variant={'outline'}
          >
            Github
          </Button>
          <Button
            border={'1px solid #4267B2'}
            leftIcon={<Icon as={AiFillFacebook} />}
            variant={'outline'}
            color=" #4267B2"
          >
            Facebook
          </Button>
        </HStack>
        {/* Signup link */}

        <Text fontSize={15} style={{ marginTop: '30px' }}>
          New to techBlogs?{' '}
          <Box
            as="span"
            fontSize={17}
            color={'rgba(36, 147, 223, 1)'}
            _hover={{ textDecoration: 'underline' }}
            cursor="pointer"
            fontWeight={'600'}
          >
            Signup
          </Box>
        </Text>
      </VStack>
    </Center>
  )
}

export default Login
