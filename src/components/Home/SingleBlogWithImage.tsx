/** @format */

import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {}

export const SingleBlogWithImage = (props: Props) => {
	return (
		<VStack
			w={"100%"}
			h="500px"
			mt="80px"
			position={"relative"}
			justify="center"
			align={"center"}
		>
			<Image
				src="/Image2.png"
				position={"absolute"}
				w="full"
				h={"full"}
				objectFit="cover"
				alt="image2"
				blur={"2xl"}
			/>
			<VStack
				w={{ base: "full", lg: "530px" }}
				h={"245px"}
				zIndex="2"
				align={"center"}
				spacing="5"
			>
				<Text
					color={"white"}
					bg="rgba(255, 255, 255, 0.15)"
					py="4px"
					px="10px"
					rounded={"3xl"}
				>
					Adventure
				</Text>
				<Text
					color={"white"}
					fontWeight="700"
					lineHeight={{ md: 10 }}
					fontSize={{ base: 23, md: 36 }}
					textAlign="center"
					w={"96%"}
				>
					Richird Norton photorealistic rendering as real photos
				</Text>
				<HStack w="80%" color={"white"} fontSize={"14px"} fontWeight="400">
					<Text fontFamily={"Poppins sans-serif"} textAlign="center">
						Progressively incentivize cooperative systems through technically
						sound functionalities. The credibly productivate seamless data.
					</Text>
				</HStack>
			</VStack>
		</VStack>
	);
};
