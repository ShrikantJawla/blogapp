import { connect } from "mongoose";

export declare var process: {
	env: {
		DB_URL: string;
	};
};
const dbConnect = async () => connect(process.env.DB_URL);

export default dbConnect;
