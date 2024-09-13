

const addPost=async(post)=>{
    try {
        console.log('post reached');
        console.log({post})
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    addPost
}