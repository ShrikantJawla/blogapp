import { Schema, model, models } from "mongoose";

interface UserSchemaType {
	id: string;
	name: string;
	email: string;
	password: string;
	image: string;
}

const UserSchema = new Schema<UserSchemaType>(
	{
		id: String,
		name: String,
		email: { type: String, required: true, unique: true },
		password: { type: String },
		image: String,
	},
	{
		timestamps: true,
	}
);

export default models.user || model("user", UserSchema);
