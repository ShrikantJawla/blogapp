import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
const salt = 10;
import dbConnect from "../../../configs/dbConfing";
import UserModel from "../../../models/user";

declare var process: {
	env: {
		BASE_URL: string;
	};
};

interface Response {
	status: number;
	message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
	const { body, method } = req;
	const { name, email, password } = body;
	try {
		await dbConnect();
		switch (method) {
			case "POST": {
				let existing = await UserModel.findOne({ email });
				if (!existing) {
					const hash = await bcrypt.hash(password, salt);
					await UserModel.create({ email, name, password: hash });
					res.json({
						status: 1,
						message: "User created successfully!",
					});
				} else {
					return res.json({
						status: 0,
						message: "Not allowed",
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
