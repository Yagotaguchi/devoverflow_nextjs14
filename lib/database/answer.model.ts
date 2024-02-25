import { Schema, models, model, Document } from "mongoose";

export interface IAnswer extends Document {}

const AnswerSchema = new Schema({});

const Answer = models.Question || model("Answer", AnswerSchema);

export default Answer;
