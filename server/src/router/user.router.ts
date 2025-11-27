import { getMe, postProgram } from '@/controller/user.controller'
import express from 'express'
const router = express.Router()

router.get('/get-me', getMe)

router.post('/post-reqprogram', postProgram)

export default router