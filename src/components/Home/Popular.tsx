/** @format */

import { VStack, Text, HStack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { v4 } from "uuid";
import { Post } from "./Post";

interface Props {}

export const Popular = (props: Props) => {
	const categories: string[] = ["Adventure", "Travel", "Sports"];
	return (
		<VStack w="90%" m="auto" h={"fit-content"} mt="70px" spacing={"30px"}>
			{/* Heading */}
			<Text w="full" fontSize={36} fontWeight={700} color="rgba(73, 80, 87, 1)">
				Popular topics
			</Text>
			{/* Categories */}
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
			{/* Posts cards */}
			<Grid
				templateColumns={{
					base: "280px",
					md: "repeat(2,310px)",
					lg: "repeat(3,310px)",
					xl: "repeat(4,310px)",
				}}
				justifyContent={{ base: "center", md: "space-between" }}
				alignItems={"center"}
				w="full"
				rowGap={"20px"}
			>
				{new Array(8).fill(0).map((ele) => (
					<GridItem
						display={"flex"}
						justifyContent="center"
						alignItems={"center"}
						key={v4()}
						h="410px"
					>
						<Post />
					</GridItem>
				))}
			</Grid>
		</VStack>
	);
};
