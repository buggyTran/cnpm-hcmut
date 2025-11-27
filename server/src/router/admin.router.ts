import { 
    createSemester, 
    getAllUser, 
    updateUserStatus, 
    createSubject,
    getAllSubject
} from '@/controller/admin.controller'
import { get } from 'axios'
import express from 'express'

const router = express.Router()


router.post('/create-semester', createSemester)
router.get('/get-all-user', getAllUser)
router.patch('/update-user-status/:id', updateUserStatus)
router.post('/create-subject/:id', createSubject)
router.get('/get-all-subject/:id', getAllSubject)

export default router