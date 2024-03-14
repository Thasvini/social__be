import express from "express";
import { deleteUser, followUser, getUser, UnFollowUser, updateUser,updateUserInfo } from "../Controllers/UserController.js";

const router = express.Router();

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)
router.put("/update1/:id", updateUserInfo);
export default router;