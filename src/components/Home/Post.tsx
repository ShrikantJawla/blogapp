/** @format */

import { Image, VStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

export const Post = (props: Props) => {
	return (
		<VStack
			w="full"
			h="full"
			m="auto"
			cursor={"pointer"}
			transition="all 0.3s ease-in-out"
			_hover={{ boxShadow: "2xl" }}
			rounded="md"
		>
			<Image
				w="full"
				h="280px"
				alt="blog Image"
				src="/Blog Image.png"
				objectFit={"cover"}
			/>
			<Text
				fontSize={12}
				fontWeight={400}
				w="full"
				color={"rgba(108, 117, 125, 1)"}
				p="4px"
			>
				08.08.2023
			</Text>
			<Text
				p="4px"
				w="95%"
				alignSelf={"flex-start"}
				fontSize={18}
				fontWeight={700}
				color={"rgba(73, 80, 87, 1)"}
			>
				Dream destinations to visit this year in Paris
			</Text>
			<Text
				p="4px"
				fontSize={12}
				fontWeight={400}
				color="rgba(108, 117, 125, 1)"
			>
				Progressively incentivize cooperative systems through technically sound
				functionalities. Credibly productivate seamless data with flexible
				schemas.
			</Text>
		</VStack>
	);
};
