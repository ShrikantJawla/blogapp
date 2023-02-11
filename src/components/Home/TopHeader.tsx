/** @format */

import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Styles from "./Navbar.module.css";

interface Props {}

export const TopHeader = (props: Props) => {
	const [active, setActive] = useState(1);
	return (
		<VStack
			w="full"
			h="600px"
			position={"relative"}
			top="0"
			justify={"flex-end"}
			align="flex-start"
		>
			{/* BG image */}
			<Image
				w={"full"}
				h="full"
				objectFit={"cover"}
				src="/Image.png"
				position={"absolute"}
				alt="top header image"
				top={0}
				left="0"
				zIndex="-1"
			/>
			{/* Container containing Text */}
			<VStack
				w={{ base: "full", md: "530px" }}
				h={{ base: "350px", md: "300px" }}
				padding={{ base: "4px", md: "10px" }}
				className={`${Styles.padding_min_320} ${Styles.padding_min_720}`}
				spacing="15px"
			>
				<Text
					color={"white"}
					bg="rgba(255, 255, 255, 0.15)"
					py="4px"
					px="10px"
					rounded={"3xl"}
					alignSelf="flex-start"
				>
					Adventure
				</Text>
				<Text
					color={"white"}
					fontWeight="700"
					lineHeight={{ md: 10 }}
					fontSize={{ base: 28, md: 36 }}
				>
					Richird Norton photorealistic rendering as real photos
				</Text>
				<HStack
					w="full"
					color={"white"}
					fontSize={"14px"}
					fontWeight="400"
					align={"flex-start"}
				>
					<Text>08.08.2023</Text>
					<Box bg="white" h="1px" w={"30px"} style={{ marginTop: "9px" }}></Box>
					<Text fontFamily={"Poppins sans-serif"}>
						Progressively incentivize cooperative systems through technically
						sound functionalities. The credibly productivate seamless data.
					</Text>
				</HStack>
				{/* Pagination Part */}
				<HStack
					style={{ marginTop: "30px" }}
					onClick={(e: any) => {
						if (e.target?.id == 1) setActive(1);
						else if (e.target?.id == 2) setActive(2);
						else if (e.target?.id == 3) setActive(3);
					}}
				>
					<Box
						w="9px"
						h="9px"
						bg={`whiteAlpha.${active === 1 ? "900" : "400"}`}
						rounded={"full"}
						id="1"
						cursor={"pointer"}
					/>
					<Box
						w="9px"
						h="9px"
						bg={`whiteAlpha.${active === 2 ? "900" : "400"}`}
						rounded={"full"}
						id="2"
						cursor={"pointer"}
					/>
					<Box
						w="9px"
						h="9px"
						bg={`whiteAlpha.${active === 3 ? "900" : "400"}`}
						rounded={"full"}
						id="3"
						cursor={"pointer"}
					/>
				</HStack>
			</VStack>
		</VStack>
	);
};
