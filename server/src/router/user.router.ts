import { getMe, postProgram, updateUserInfor, bookSlot, getMyBookings, cancelBooking } from '@/controller/user.controller'
import express from 'express'
const router = express.Router()

router.get('/get-me', getMe)
router.get('/my-bookings', getMyBookings)

router.post('/post-reqprogram', postProgram)
router.patch('/update-user-infor', updateUserInfor)
router.post('/book-slot', bookSlot)
router.post('/cancel-booking', cancelBooking)


export default router