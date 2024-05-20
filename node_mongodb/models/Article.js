const {Schema, model} = require('mongoose');

const authorSchema = new Schema({
    _id: Schema.ObjectId,
    name: String
});
  
const commentSchema = new Schema({
    nickname: String,
    text: String,
    grade: Number
});

const schema = new Schema({
    name: String,
    authors: [authorSchema],
    datePublication: {
        type: Date,
        default: Date.now
    },
    content: String,
    tags: [String],
    comments: [commentSchema]
}, {collection: "article"});

module.exports = model('Article', schema);