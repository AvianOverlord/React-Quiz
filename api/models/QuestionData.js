const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    Question:
    {
        type: String
    },
    Answers:
    [
        {
            type: String
        }
    ],
    Correct:
    {
        type: Number,
        min: [0]
    }
})

const Question = mongoose.model("Question", QuestionSchema);
module.exports = QuestionSchema;