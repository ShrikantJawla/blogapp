import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";
export const Footer = () => {
  return (
    <Flex
      w="full"
      bg="#212529"
      p="5%"
      justify={"space-between"}
      flexWrap="wrap"
      flexDir={["column", "column", "row"]}
      gap="20px"
    >
      <VStack
        fontSize={"12px"}
        fontWeight="400"
        lineHeight={"15px"}
        color="#E5E5E5"
        align={"flex-start"}
        my="10px"
        gap="10px"
      >
        <Text
          fontSize={"18px"}
          fontWeight="700"
          lineHeight={"25px"}
          color="#FFFFFF"
        >
          Contact the Publisher
        </Text>
        <Text>mike@runo.com</Text>
        <Text>+944 450 904 505</Text>
      </VStack>
      <VStack
        fontSize={"12px"}
        fontWeight="400"
        lineHeight={"15px"}
        color="#E5E5E5"
        align={"flex-start"}
        gap="10px"
      >
        <Text
          fontSize={"18px"}
          fontWeight="700"
          lineHeight={"25px"}
          color="#FFFFFF"
        >
          Explorate
        </Text>
        <Text>About</Text>
        <Text>Partners</Text>
        <Text>Job Opportunities</Text>
        <Text>Advertise</Text>
        <Text>Membership</Text>
      </VStack>
      <VStack
        fontSize={"12px"}
        fontWeight="400"
        lineHeight={"15px"}
        color="#E5E5E5"
        align={"flex-start"}
      >
        <Text
          fontSize={"18px"}
          fontWeight="700"
          lineHeight={"25px"}
          color="#FFFFFF"
          mb="10px"
        >
          Headquarter
        </Text>
        <Text>191 Middleville Road,</Text>
        <Text>NY 1001, Sydney</Text>
        <Text>Australia</Text>
      </VStack>
      <VStack
        fontSize={"12px"}
        fontWeight="400"
        lineHeight={"15px"}
        color="#E5E5E5"
        align={"flex-start"}
      >
        <Text
          fontSize={"18px"}
          fontWeight="700"
          lineHeight={"25px"}
          color="#FFFFFF"
          mb="10px"
        >
          Connections
        </Text>
        <Flex gap="20px">
          <Box fontSize={"20px"}>
            <BsFacebook />
          </Box>
          <Box fontSize={"20px"}>
            <BsTwitter />
          </Box>
          <Box fontSize={"20px"}>
            <BsYoutube />
          </Box>
          <Box fontSize={"20px"}>
            <BsPinterest />
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
};
