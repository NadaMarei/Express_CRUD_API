import express from "express";
import {getUsers,createUser, getOneUser,deleteUser,updateUser} from '../controllers/user.js'

const router = express.Router();

// Get all users
router.get('/users', getUsers)

// Create users
router.post('/users', createUser)

// get one user
router.get('/users/:id', getOneUser)

// update user
router.delete('/users/:id' , deleteUser)

// delete user
router.put('/users/:id' , updateUser)

export default router;