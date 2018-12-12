const Schema =  mongoose.Schema

const PostSchema = new Schema({
    createdBy:{
        type:String,
        required:true
    },
    title:{

    },
    description:{

    },
    star_count:{

    },
    stared_by:{
        
    }

},{'collection':'posts','timestamps':true})

module.exports = mongoose.model('posts',PostSchema)