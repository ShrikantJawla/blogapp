import { Box, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

interface Props {
  text: string;
  link: string;
}
export const Category = (props: Props) => {
  const { text, link } = props;
  return (
    <Link key={nanoid()} href={link}>
      <Box
        bg={"rgba(255, 255, 255, 0.15)"}
        borderRadius="8px"
        p={"5px 10px"}
        w="max-content"
        className={roboto.className}
      >
        <Text
          color={"white"}
          fontSize={"10px"}
          textTransform="uppercase"
          fontWeight="700"
        >
          {text}
        </Text>
      </Box>
    </Link>
  );
};
