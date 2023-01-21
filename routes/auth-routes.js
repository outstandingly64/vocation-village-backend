import express from 'express'
const router = express.router();
// auth controller methods for auth routes
import { signUpUser, logInUser, updateUser } from '../controllers/auth-controller.js';

router.route('/signup').post(signUpUser);
router.route('/login').post(logInUser);
router.route('/updateUser').patch(updateUser);

export default router;
