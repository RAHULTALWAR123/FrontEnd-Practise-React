import express from 'express';
import { getSlots, login, logout, PostSlots, signUp } from '../controllers/test.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';
import { protectRole } from '../middleware/protectRole.js';

const router = express.Router();

router.post('/auth/signup',signUp);
router.post("/auth/login",login);
router.post("/auth/logout",logout);
router.post("/auth/slots",protectRoute,protectRole,PostSlots);
router.get("/auth/getslots/:id",protectRoute,getSlots);

export default router;