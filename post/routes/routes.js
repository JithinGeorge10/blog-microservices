const express=require('express')
const {getPost,addPost} =require('../controller/postController.js')
const router=express.Router()

router.get('/api/postservice/getpost',getPost)
router.post('/api/postservice/addpost',addPost)
module.exports=router










