import express from 'express';

let router = express.Router()


import authRouter from './1routes/auth.mjs'
import commentRouter from './1routes/comment.mjs'
import feedRouter from './1routes/feed.mjs'
import postRouter from './1routes/post.mjs'


// /api/v1/login

router.use(authRouter)


// router.use((req, res, next) => {
//     if (token === "valid") {
//         next();
//     } else {
//         res.send({ message: "invalid token" })
//     }
// })




router.use( commentRouter)

router.use( postRouter)

router.use( feedRouter)

export default router