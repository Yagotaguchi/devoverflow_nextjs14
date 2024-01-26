import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  password?: string;
  name: string;
  username: string;
  email: string;
  bio?: string;
  location?: string;
  picture?: string;
  reputation?: number;
  portifolioWebsite?: string;
  joinDate: string;
  saved: Schema.Types.ObjectId[];
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  password: { type: String },
  bio: { type: String },
  location: { type: String },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  picture: String,
  portifolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  joinDate: { type: Date, default: Date.now },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

const User = models.User || model("User", UserSchema);

export default User;
