const Users =  require('../schemas/Users')
const Posts =  require('../schemas/Posts')
const createToken  = require('../utils/createToken')
const comparePasswords = require('../utils/comparePasswords')

function signup(_,args,context,info){
    return Users.create(args.data).then((user) => {
        let token = createToken(user)
        return {token}
     }).catch((err) => {
         throw  new Error(err)
     })
 }

 function login(_,args,context,info){
    return comparePasswords(args.email,args.password)
        .then((token) => {return {token}})
        .catch((err) => { throw err })
}

function addPost(_,args,context,info){
    if(!context.user) throw new Error("Authentication is required")
    args.data.createdBy = context.user; 
    return Posts.create(args.data).then((post) => {
        return post.toObject()
    }).catch((err) => {throw err;})

}

function likePost(_,args,context,info){
    if(!context.user) throw new Error("Authentication is required")


}


 module.exports = {
    signup,
    login,
    addPost
 }