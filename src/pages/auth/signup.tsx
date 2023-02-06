/** @format */

import { register } from "@/redux/auth/auth.actions";
import { StoreType } from "@/redux/store";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	Icon,
	Input,
	Text,
	useToast,
	VStack,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillFacebook } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../utils/Types";
import { resetStatus } from "../../redux/auth/auth.actions";

const initState = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

interface Props {}
const Signup = (props: Props) => {
	const [passwordVis, setPasswordVis] = useState("password");
	const toast = useToast();
	const [user, setUser] = useState<User>(initState);
	const [passwordMatch, setPasswordMatch] = useState(true);
	const { loading, error, signupStatus } = useSelector(
		(s: StoreType) => s.auth
	);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		if (!error && signupStatus.message) {
			if (signupStatus.status === 1) {
				dispatch(resetStatus());
				router.replace("/auth/login");
			}
			toast({
				title: `${
					signupStatus.status === 1 ? "Signup Successful" : "Signup error"
				}`,
				description: signupStatus.message,
				isClosable: true,
				duration: 4000,
				position: "top",
				status: `${signupStatus.status === 1 ? "success" : "warning"}`,
			});
		}
	}, [error, signupStatus]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (user.password !== user.confirmPassword) {
			return setPasswordMatch(false);
		} else {
			setPasswordMatch(true);
		}
		if (user.name === "" || user.email === "" || user.password === "") {
			return toast({
				title: "Input Error",
				description: "Please fill all the required fields",
				isClosable: true,
				duration: 4000,
				position: "top",
				status: "warning",
			});
		}
		dispatch(register(user));
	};

	return (
		<VStack pt="20px" w="full" h="100vh" bg="#F2F5F7">
			<VStack
				w={{ base: "99%", md: "404px" }}
				p="10px"
				h="fit-content"
				py="20px"
			>
				<Text fontSize={"21px"} fontWeight="700">
					Sign Up
				</Text>
				{/* Form */}

				<FormControl as="form" onSubmit={handleSubmit}>
					<FormLabel fontSize={14}>Name*</FormLabel>
					<Input
						h="38px"
						variant={"unstyled"}
						bg="white"
						type={"text"}
						p="5px"
						px="10px"
						rounded={"md"}
						_focus={{ outline: "0px solid gray" }}
						border="1px solid gray"
						value={user.name}
						onChange={({ target: { value } }) =>
							setUser({ ...user, name: value })
						}
						mb="5px"
					/>
					<FormLabel fontSize={14}>Email*</FormLabel>
					<Input
						h="38px"
						variant={"unstyled"}
						bg="white"
						type={"email"}
						p="5px"
						px="10px"
						rounded={"md"}
						_focus={{ outline: "0px solid gray" }}
						border="1px solid gray"
						value={user.email}
						onChange={({ target: { value } }) =>
							setUser({ ...user, email: value })
						}
						mb="5px"
					/>
					<FormLabel fontSize={14}>Password*</FormLabel>
					<HStack
						h="38px"
						w="full"
						border="1px solid gray"
						p="5px"
						px="10px"
						rounded={"md"}
						bg="white"
					>
						<Input
							h="full"
							variant={"unstyled"}
							outline={"hidden"}
							_focus={{ outline: "0px solid white", border: "hidden" }}
							border="hidden"
							type={passwordVis}
							_autofill={{ bg: "white" }}
							value={user.password}
							onChange={({ target: { value } }) =>
								setUser({ ...user, password: value })
							}
						/>
						{passwordVis === "text" ? (
							<Icon
								as={AiFillEye}
								cursor="pointer"
								onClick={() => setPasswordVis("password")}
								fontSize={"22px"}
							/>
						) : (
							<Icon
								as={AiFillEyeInvisible}
								cursor="pointer"
								onClick={() => setPasswordVis("text")}
								fontSize={"22px"}
							/>
						)}
					</HStack>
					<FormLabel fontSize={14}>Confirm Password*</FormLabel>
					<HStack
						h="38px"
						w="full"
						border={`1px solid ${passwordMatch ? "gray" : "red"}`}
						p="5px"
						px="10px"
						rounded={"md"}
						bg="white"
					>
						<Input
							h="full"
							variant={"unstyled"}
							outline={"hidden"}
							_focus={{ outline: "0px solid white", border: "hidden" }}
							border="hidden"
							type={passwordVis}
							_autofill={{ bg: "white" }}
							value={user.confirmPassword}
							onChange={({ target: { value } }) =>
								setUser({ ...user, confirmPassword: value })
							}
						/>
						{passwordVis === "text" ? (
							<Icon
								as={AiFillEye}
								cursor="pointer"
								onClick={() => setPasswordVis("password")}
								fontSize={"22px"}
							/>
						) : (
							<Icon
								as={AiFillEyeInvisible}
								cursor="pointer"
								onClick={() => setPasswordVis("text")}
								fontSize={"22px"}
							/>
						)}
					</HStack>
					<Button
						mt="30px"
						w="full"
						colorScheme={"blue"}
						type="submit"
						isLoading={loading}
					>
						Signup
					</Button>
				</FormControl>
				{/* Divider */}

				<HStack w="full" py="10px" justify={"center"} align="center">
					<Box w="45%" border="0.1px solid gray" opacity={0.3}></Box>
					<Text>or</Text>
					<Box w="45%" border="0.1px solid gray" opacity={0.3}></Box>
				</HStack>
				{/* OAuth Buttons */}

				<HStack w="full" justify={"center"} align="center" gap={{ md: "10px" }}>
					<Button
						onClick={() => signIn("google")}
						border={"1px solid red "}
						leftIcon={<Icon as={FcGoogle} />}
						variant={"outline"}
						color="red"
					>
						Google
					</Button>
					<Button
						onClick={() => signIn("github")}
						border={"1px solid black "}
						leftIcon={<Icon as={FaGithub} />}
						variant={"outline"}
					>
						Github
					</Button>
					<Button
						onClick={() => signIn("facebook")}
						border={"1px solid #4267B2"}
						leftIcon={<Icon as={AiFillFacebook} />}
						variant={"outline"}
						color=" #4267B2"
					>
						Facebook
					</Button>
				</HStack>
				{/* Signup link */}

				<Text fontSize={15} style={{ marginTop: "30px" }}>
					New to techBlogs?{" "}
					<Link href={"/auth/login"}>
						<Box
							as="span"
							fontSize={17}
							color={"rgba(36, 147, 223, 1)"}
							_hover={{ textDecoration: "underline" }}
							cursor="pointer"
							fontWeight={"600"}
						>
							LogIn
						</Box>
					</Link>
				</Text>
			</VStack>
		</VStack>
	);
};

export default Signup;
