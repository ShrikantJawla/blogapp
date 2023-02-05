import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Category } from "./Category";

interface Props {
  image: string;
  text: string;
  link: string;
  cata: string;
  desc: string;
}
export const HomeCard2 = (props: Props) => {
  const { image, text, cata, link, desc } = props;
  return (
    <Flex
      w={"full"}
      h="80vh"
      align={"center"}
      bgImage={image}
      bgSize="cover"
      bgPosition={"center"}
      justify="center"
      textAlign={"center"}
    >
      <VStack color={"white"} w="530px">
        <Category text={cata} link={link} />
        <Text fontWeight="700" fontSize={"36px"} lineHeight="46px" my="10px">
          {text}
        </Text>
        <VStack gap="10px" fontSize="12px" fontWeight={"400"}>
          <Text>{desc}</Text>
          <Box my="24px" border={"1px solid #E5E5E5"} w="30px" h="0"></Box>
          <Text>08.08.2021</Text>
        </VStack>
      </VStack>
    </Flex>
  );
};
