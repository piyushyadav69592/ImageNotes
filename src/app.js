const express = require('express');
const multer = require('multer')
const postModel = require('./model/post.model')
const uploadFile = require('./services/storage.services')

const app = express();
app.use(express.json());

const upload = multer({storage:multer.memoryStorage()})



app.get('/', (req, res) => {
    res.send('Hello World note image');
})

app.post('/create-post', upload.single("image"), async (req,res)=>{
   console.log(req.body);
   console.log(req.file);


   const result = await uploadFile(req.file.buffer)
   const post = await postModel.create({
    image:result.url,
    caption:req.body.caption
   })
   console.log(result)
   res.status(201).send("send image successfully")

});

app.get('/post', async (req, res)=>{
    const posts = await postModel.find();

    console.log(posts)
    // res.send(posts)
    return res.status(200).json({
        message:"post fetch successfully",
        posts
    });
})


module.exports = app;