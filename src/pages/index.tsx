/** @format */

import { Footer } from "@/components/Footer/Footer";
import { FooterMark } from "@/components/Footer/FooterMark";
import { SingleBlogWithImage } from "@/components/Home/SingleBlogWithImage";
import { TopHeader } from "@/components/Home/TopHeader";
import Head from "next/head";
import { Popular } from "../components/Home/Popular";

//new comment

export default function Home() {
	return (
		<>
			<Head>
				<title>Write up</title>
				<meta
					name="description"
					content="A tech blog app that provides users with the tools to easily create and manage their own technology-focused blog. Featuring a modern and intuitive interface, the app allows users to publish articles and stay on top of the latest tech news, trends, and innovations."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<TopHeader />
				<Popular />
				<SingleBlogWithImage />
				<Footer />
				<FooterMark />
			</main>
		</>
	);
}
