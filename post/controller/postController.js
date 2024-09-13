const userModel=require('../model/userModel.js')


const getPost= async (req,res) => {
    try {
       res.send('posts')
    } catch (error) {
        console.log(error);
    }
}   

const addUser = async (user) => {
    try {
        console.log('add user ')
        console.log({user})
        const newUser = new userModel(user);
        await newUser.save();
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addUser,getPost
}