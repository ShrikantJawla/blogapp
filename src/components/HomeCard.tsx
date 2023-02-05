import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Category } from "./Category";

interface Props {
  image: string;
  text: string;
  link: string;
  cata: string;
  desc: string;
}
export const HomeCard = (props: Props) => {
  const { image, text, cata, link, desc } = props;
  return (
    <Flex
      w={"full"}
      h="80vh"
      align={"center"}
      bgImage={image}
      bgSize="cover"
      bgPosition={"center"}
      pl="10%"
    >
      <Box color={"white"} w="530px">
        <Category text={cata} link={link} />
        <Text fontWeight="700" fontSize={"36px"} lineHeight="46px" my="10px">
          {text}
        </Text>
        <Flex gap="10px" fontSize="12px" fontWeight={"400"} align="flex-start">
          <Text>08.08.2021</Text>
          <Box>
            <Box
              border={"1px solid #E5E5E5"}
              w="30px"
              h="0"
              position={"relative"}
              top="8px"
            ></Box>
          </Box>
          <Text>{desc}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
