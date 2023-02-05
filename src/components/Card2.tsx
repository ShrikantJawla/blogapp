import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Category } from "./Category";
interface Props {
  image: string;
  title: string;
  desc: string;
  date: string;
  cata: string;
  link: string;
}
export const Card2 = (prop: Props) => {
  const { image, title, desc, date, cata, link } = prop;
  return (
    <Flex
      position={"relative"}
      w="full"
      height={"380px"}
      bgImage={image}
      bgPos="center"
      bgSize={"cover"}
      borderRadius="md"
      color={"#E5E5E5"}
      fontSize={"12px"}
      fontWeight="400"
      flexDir={"column"}
      justify="flex-end"
      px="2%"
      my="10px"
    >
      <Box position={"absolute"} right="20px" top="20px">
        <Category text={cata} link={link} />
      </Box>
      <Text my="10px">{date}</Text>
      <Text fontSize={"18px"} fontWeight="700" pr="10%">
        {title}
      </Text>
      <Text my="10px" pb="30px">
        {desc}
      </Text>
    </Flex>
  );
};
