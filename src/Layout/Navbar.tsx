import { NavbarSmall } from "@/components/NavbarSmall";
import { Avatar, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { nanoid } from "nanoid";
import { signOut, useSession } from "next-auth/react";

export const links = [
  { text: "Home", href: "/" },
  { text: "About", href: "#" },
  { text: "Articles", href: "#" },
  { text: "Contact Us", href: "#" },
];

interface Props {}

export const Navbar = (props: Props) => {
  const { data: session } = useSession();
  const variant = useBreakpointValue(
    {
      base: "none",
      md: "block",
    },
    {
      fallback: "md",
    }
  );
  return (
    <HStack
      h="80px"
      position={"fixed"}
      w="full"
      bg={"rgba(0,0,0,0.2)"}
      justify="flex-end"
      px="23px"
      gap={"6px"}
      zIndex={200}
    >
      {links.map((ele, ind) => (
        <>
          <Link key={nanoid()} href={ele.href} style={{ display: variant }}>
            <Text
              color="white"
              fontSize={17}
              fontWeight={600}
              _hover={{ textDecoration: "underline" }}
            >
              {ele.text}
            </Text>
          </Link>
          {ind === 3 && (
            <Text
              key={nanoid()}
              color={"white"}
              fontWeight="600"
              style={{ display: variant }}
            >
              |
            </Text>
          )}
        </>
      ))}
      {session ? (
        <Text
          style={{ display: variant }}
          color="white"
          fontSize={17}
          fontWeight={600}
          _hover={{ textDecoration: "underline" }}
          onClick={() => signOut()}
          cursor="pointer"
        >
          Logout
        </Text>
      ) : (
        <>
          <Link
            key={nanoid()}
            href={"/auth/login"}
            style={{ display: variant }}
          >
            <Text
              color="white"
              fontSize={17}
              fontWeight={600}
              _hover={{ textDecoration: "underline" }}
            >
              Login
            </Text>
          </Link>
          <Link
            key={nanoid()}
            href={"/auth/signup"}
            style={{ display: variant }}
          >
            <Text
              color="white"
              fontSize={17}
              fontWeight={600}
              _hover={{ textDecoration: "underline" }}
            >
              Signup
            </Text>
          </Link>
        </>
      )}
      <Avatar src={(session && session.user?.image) || ""} />
      <NavbarSmall />
    </HStack>
  );
};
