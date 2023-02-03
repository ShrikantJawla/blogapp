import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { AuthOptions } from "next-auth";
import UserModel from "../../../models/user";
import dbConnect from "../../../configs/dbConfing";

export declare var process: {
	env: {
		GITHUB_ID: string;
		GITHUB_SECRET: string;
		BASE_URL: string;
		GOOGLE_CLIENT_ID: string;
		GOOGLE_CLIENT_SECRET: string;
		FACEBOOK_CLIENT_ID: string;
		FACEBOOK_CLIENT_SECRET: string;
	};
};
export const authOptions: AuthOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			await dbConnect();
			let existing = await UserModel.findOne({
				name: user.name,
				image: user.image,
			});
			if (!existing) {
				await UserModel.create({
					id: user.id,
					email: user?.email,
					name: user?.name,
					image: user?.image,
				});
			}
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
		async session({ session, user, token }) {
			return session;
		},
	},
};

export default NextAuth(authOptions);
