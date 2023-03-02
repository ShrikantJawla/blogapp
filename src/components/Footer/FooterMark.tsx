/** @format */

import { Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

export const FooterMark = (props: Props) => {
	return (
		<Stack
			w="full"
			h={{ base: "fit-content", lg: "60px" }}
			bg="#343A40"
			justify={"space-between"}
			px={{ lg: "120px" }}
			color={"white"}
			direction={{ base: "column", lg: "row" }}
			align={{ base: "center" }}
		>
			<Text>2023 | shrikantjawla@gmail.com</Text>
			<Text _hover={{ textDecor: "underline" }}>Subscribe now</Text>
		</Stack>
	);
};
