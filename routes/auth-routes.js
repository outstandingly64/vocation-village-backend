import express from 'express'
const router = express.Router();
import { check } from 'express-validator';
// auth controller methods for auth routes
import { signUpUser, logInUser, updateUser } from '../controllers/auth-controller.js';

router.route('/signup').post([
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6})
], signUpUser);
router.route('/login').post(logInUser);
router.route('/updateUser').patch(updateUser);

export default router;
