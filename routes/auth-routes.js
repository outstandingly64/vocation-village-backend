import express from 'express'
const router = express.router();
// auth controller methods for routes
import { signUpUser, logInUser, updateUser } from '../controllers/auth-controller.js';

router.route('/signup').post(signUpUser);
router.route('/login').post(logInUser);
router.route('/updateUser').post(updateUser);

export default router;
