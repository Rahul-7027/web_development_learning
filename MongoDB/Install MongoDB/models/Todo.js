import mongoose from 'mongoose';
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String
  
});

export const Todo=mongoose.model("Todo",TodoSchema)