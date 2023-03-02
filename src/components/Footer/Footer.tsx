/** @format */

import { HStack, Text, VStack, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

interface Props {}

export const Footer = (props: Props) => {
	return (
		<Stack
			w={"full"}
			h={{ base: "fit-content", lg: "350px" }}
			mt="60px"
			justify={"space-between"}
			align="center"
			p="20px"
			px={{ base: "0", lg: "100px" }}
			direction={{ base: "column", lg: "row" }}
			bg="rgba(33, 37, 41, 1)"
			spacing={{ base: "40px", lg: "0px" }}
		>
			<VStack
				color={"white"}
				h="60%"
				justify={"center"}
				w={{ base: "70%", lg: "100%" }}
				margin={"auto"}
				textAlign={"center"}
			>
				<Text fontWeight={700} fontSize="22px" w={"full"}>
					Contact the Publisher
				</Text>
				<Text fontSize={"14px"} w={"full"}>
					shrikantjawla@gmail.com
				</Text>
				<Text fontSize={"14px"} w={"full"}>
					+91-904594661
				</Text>
			</VStack>
			<VStack
				color={"white"}
				w={{ base: "70%", lg: "full" }}
				margin={"auto"}
				h="60%"
				justify={"center"}
				textAlign={"center"}
			>
				<Text fontWeight={700} fontSize="22px" w={"full"}>
					Explore
				</Text>
				{["About", "Partner", "Advertise", "Membership"].map((ele, ind) => (
					<Text
						key={ind}
						fontSize={"14px"}
						w={"full"}
						cursor="pointer"
						_hover={{ textDecor: "underline" }}
					>
						{ele}
					</Text>
				))}
			</VStack>
			<VStack
				color={"white"}
				h="60%"
				justify={"center"}
				w={{ base: "70%", lg: "full" }}
				margin={"auto"}
				align="center"
				textAlign={"center"}
			>
				<Text fontWeight={700} fontSize="22px" w={"full"}>
					Connections
				</Text>
				<HStack w={"full"} color="white" spacing={5} justify={"center"}>
					{[FaFacebookF, FaYoutube, FaTwitter].map((ele, ind) => (
						<a key={ind} href="#">
							<Icon as={ele} />
						</a>
					))}
				</HStack>
			</VStack>
		</Stack>
	);
};
