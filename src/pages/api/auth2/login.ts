import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbConnect from "../../../configs/dbConfing";
import UserModel from "../../../models/user";

declare var process: {
	env: {
		JWT_SECRET: string;
	};
};

interface Response {
	status: number;
	message: string;
	token?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
	const { body, method } = req;
	const { email, password } = body;
	try {
		await dbConnect();
		switch (method) {
			case "POST": {
				let existing = await UserModel.findOne({ email });
				if (existing) {
					let validation = await bcrypt.compare(password, existing.password);
					if (validation) {
						let token = jwt.sign(
							{
								email: existing.email,
								id: existing._id,
								name: existing.name,
							},
							process.env.JWT_SECRET,
							{ expiresIn: "7 days" }
						);
						return res.json({
							status: 1,
							message: "Login successful",
							token,
						});
					} else {
						return res.json({
							status: 0,
							message: "Not allowed",
						});
					}
				} else {
					return res.json({
						status: 0,
						message: "wrong creds",
					});
				}
			}
		}
	} catch (error) {
		const { message }: any = error;
		console.log(message);
		res.json({
			status: 0,
			message,
		});
	}
};

export default handler;
