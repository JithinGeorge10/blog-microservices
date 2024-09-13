const express=require('express')
const {getPost} =require('../controller/postController.js')
const router=express.Router()

router.get('/api/postservice/getpost',getPost)

module.exports=router










