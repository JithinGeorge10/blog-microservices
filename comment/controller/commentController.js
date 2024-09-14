const userModel=require('../model/userModel.js')
const postModel=require('../model/postModel.js')

const addPost=async(post)=>{
    try {
        console.log('post reached');
        console.log({post})
        const newPost = new postModel(post);
        await newPost.save();
    } catch (error) {
        console.log(error);
    }  
}

const addUser = async (user) => {
    try {
        console.log('add user')
        console.log({user})
        const newUser = new userModel(user);
        await newUser.save();
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    addPost,addUser
}
