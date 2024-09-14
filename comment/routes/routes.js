
const express=require('express')
const {addComment} =require('../controller/commentController.js')
const router=express.Router()

router.post('/api/commentservice/comment',addComment)

module.exports=router










