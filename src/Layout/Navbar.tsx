import { NavbarSmall } from '@/components/NavbarSmall'
import { HStack, Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'

export const links = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '#' },
  { text: 'Articles', href: '#' },
  { text: 'Contact Us', href: '#' },
  { text: 'Login', href: '/auth/login' },
  { text: 'Register', href: '#' },
]

interface Props {}

export const Navbar = (props: Props) => {
  const variant = useBreakpointValue(
    {
      base: 'none',
      md: 'block',
    },
    {
      fallback: 'md',
    },
  )
  return (
    <HStack
      h="80px"
      position={'sticky'}
      w="full"
      bg={'rgba(0,0,0,0.3)'}
      justify="flex-end"
      px="23px"
      gap={'6px'}
      zIndex={200}
    >
      {links.map((ele, ind) => (
        <>
          <Link key={ind} href={ele.href} style={{ display: variant }}>
            <Text
              color="white"
              fontSize={17}
              fontWeight={600}
              _hover={{ textDecoration: 'underline' }}
            >
              {ele.text}
            </Text>
          </Link>
          {ind === 3 && (
            <Text color={'white'} fontWeight="600" style={{ display: variant }}>
              |
            </Text>
          )}
        </>
      ))}
      <NavbarSmall />
    </HStack>
  )
}
