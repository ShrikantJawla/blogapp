import { Box, Image, Text } from "@chakra-ui/react";
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
export const Card = (prop: Props) => {
  const { image, title, desc, date, cata, link } = prop;
  return (
    <Box position={"relative"} w="full">
      <Image src={image} w="full"></Image>
      <Box position={"absolute"} right="20px" top="20px">
        <Category text={cata} link={link} />
      </Box>
      <Text color={"#6C757D"} fontSize={"12px"} fontWeight="400" my="10px">
        {date}
      </Text>
      <Text color={"#495057"} fontSize={"18px"} fontWeight="700" pr="10%">
        {title}
      </Text>
      <Text color={"#6C757D"} fontSize={"12px"} fontWeight="400" my="10px">
        {desc}
      </Text>
    </Box>
  );
};
