import express from 'express';
import { BookSlot, getSlots, login, logout, PostSlots, signUp } from '../controllers/test.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';
import { protectRole } from '../middleware/protectRole.js';

const router = express.Router();

router.post('/auth/signup',signUp);
router.post("/auth/login",login);
router.post("/auth/logout",logout);
router.post("/auth/slots",protectRoute,protectRole,PostSlots);
router.get("/auth/getslots/:id",protectRoute,getSlots);
router.post("/auth/professor/:profid/bookslot/:slotid",protectRoute,BookSlot);
// router.post("/auth/cancelApp/:appid",protectRoute,protectRole,CancelAppointment);

export default router;