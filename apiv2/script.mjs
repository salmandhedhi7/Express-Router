import express from 'express';

let router = express.Router()


import authRouter from './2routes/auth.mjs'
import commentRouter from './2routes/comment.mjs'
import feedRouter from './2routes/feed.mjs'
import postRouter from './2routes/post.mjs'


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