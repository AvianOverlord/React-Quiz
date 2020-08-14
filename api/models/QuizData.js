const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuizSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        description: {
            type: String
        },
        questions: [{
            type: Schema.Types.ObjectId,
            ref: "Question"
        }],
        scores: [{
            type: Schema.Types.ObjectId,
            ref: "Score"
        }]
    }
)

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = QuizSchema;