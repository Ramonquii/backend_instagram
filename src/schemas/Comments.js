const mongoose =  require('mongoose');

const Schema =  mongoose.Schema

const CommentSchema = new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    content:{
        type:String,
        required:true
    },
    liked_by:[
        { 
            type:Schema.Types.ObjectId,
            ref:"users"
        }
    ]
},{'collection':'comments','timestamps':true})

module.exports = mongoose.model('comments',CommentSchema)