/** @format */

import { VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { v4 } from "uuid";

interface Props {}

export const Popular = (props: Props) => {
	const categories: string[] = ["Adventure", "Travel", "Sports"];
	return (
		<VStack w="94%" m="auto" h={"1081px"} mt="70px" spacing={"30px"}>
			<Text w="full" fontSize={36} fontWeight={700} color="rgba(73, 80, 87, 1)">
				Popular topics
			</Text>
			<HStack w="full" justify={"space-between"} px="10px">
				<HStack
					fontSize={12}
					fontWeight="700"
					spacing={5}
					color={"rgba(73, 80, 87, 1)"}
				>
					<Text _hover={{ textDecoration: "underline" }} cursor="pointer">
						All
					</Text>
					{categories &&
						categories.map((ele, ind) => {
							if (ind <= 7)
								return (
									<Text
										key={v4()}
										_hover={{ textDecoration: "underline" }}
										cursor="pointer"
									>
										{ele}
									</Text>
								);
						})}
				</HStack>
				<HStack fontSize={12} fontWeight="700" color={"rgba(73, 80, 87, 1)"}>
					<Text _hover={{ textDecoration: "underline" }} cursor="pointer">
						View All
					</Text>
				</HStack>
			</HStack>
		</VStack>
	);
};
