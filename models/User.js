import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  picture: String,
});

model("User", UserSchema);