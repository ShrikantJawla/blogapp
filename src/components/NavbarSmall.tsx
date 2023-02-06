/** @format */

import { CloseButton, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { v4 } from "uuid";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../Layout/Navbar";

interface Props {}

export const NavbarSmall = (props: Props) => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Icon
				as={GiHamburgerMenu}
				cursor="pointer"
				fontSize={20}
				display={{ md: "none" }}
				onClick={() => setVisible(true)}
			/>
			{visible && (
				<VStack
					h="100vh"
					position={"fixed"}
					minW={{ base: "85%", md: "320px" }}
					top={0}
					right={0}
					zIndex={300}
					bg="white"
					boxShadow={"2xl"}
				>
					<HStack w="full" justify={"flex-end"} pr="20px" pt={"10px"}>
						<CloseButton
							fontSize={17}
							cursor="pointer"
							onClick={() => setVisible(false)}
						/>
					</HStack>
					{links.map((ele, ind) => (
						<Link key={v4()} onClick={() => setVisible(false)} href={ele.href}>
							<Text
								fontWeight={600}
								fontSize={19}
								_hover={{ textDecoration: "underline" }}
							>
								{ele.text}
							</Text>
						</Link>
					))}
				</VStack>
			)}
		</>
	);
};
