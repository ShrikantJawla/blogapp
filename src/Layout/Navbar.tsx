/** @format */

import { NavbarSmall } from "@/components/NavbarSmall";
import { Avatar, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { v4 } from "uuid";
import { signOut, useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../redux/store";
import { logout } from "@/redux/auth/auth.actions";
import { useEffect, useState } from "react";

export const links = [
	{ text: "Home", href: "/" },
	{ text: "About", href: "#" },
	{ text: "Articles", href: "#" },
	{ text: "Contact Us", href: "#" },
];

interface Props {}

export const Navbar = (props: Props) => {
	const { token } = useSelector((s: StoreType) => s.auth);
	const dispatch = useDispatch();
	const [active, setActive] = useState("rgba(0,0,0,0.3)");
	const { data: session } = useSession();
	const variant = useBreakpointValue(
		{
			base: "none",
			md: "block",
		},
		{
			fallback: "md",
		}
	);
	function scrollCB() {
		if (window.scrollY > 50) setActive("rgba(0,0,0,0.8)");
		else setActive("rgba(0,0,0,0.3)");
	}
	useEffect(() => {
		window.addEventListener("scroll", scrollCB);
		return () => window.removeEventListener("scroll", scrollCB);
	}, []);
	return (
		<HStack
			h="80px"
			position={"fixed"}
			w="full"
			justify="flex-end"
			px="23px"
			gap={"6px"}
			zIndex={200}
			bg={active}
			fontWeight={700}
			fontFamily={"Poppins sans-serif"}
		>
			{links.map((ele, ind) => (
				<>
					<Link key={v4()} href={ele.href} style={{ display: variant }}>
						<Text
							color="white"
							fontSize={17}
							fontWeight={600}
							_hover={{ textDecoration: "underline" }}
						>
							{ele.text}
						</Text>
					</Link>
					{ind === 3 && (
						<Text color={"white"} fontWeight="600" style={{ display: variant }}>
							|
						</Text>
					)}
				</>
			))}
			{session || token ? (
				<Text
					style={{ display: variant }}
					color="red"
					fontSize={17}
					fontWeight={800}
					_hover={{ textDecoration: "underline" }}
					onClick={() => {
						if (session) {
							signOut();
						} else {
							dispatch(logout());
						}
					}}
					cursor="pointer"
				>
					Logout
				</Text>
			) : (
				<>
					<Link href={"/auth/login"} style={{ display: variant }}>
						<Text
							color="white"
							fontSize={17}
							fontWeight={600}
							_hover={{ textDecoration: "underline" }}
						>
							Login
						</Text>
					</Link>
					<Link href={"/auth/signup"} style={{ display: variant }}>
						<Text
							color="white"
							fontSize={17}
							fontWeight={600}
							_hover={{ textDecoration: "underline" }}
						>
							Signup
						</Text>
					</Link>
				</>
			)}
			<Avatar size={"sm"} src={(session && session.user.image) || ""} />
			<NavbarSmall />
		</HStack>
	);
};
