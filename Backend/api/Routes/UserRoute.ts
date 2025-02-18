import express from 'express';
import {userRegistration} from '../Controllers/UserControllers';

const router = express.Router();

router.post('/registerUser', userRegistration)

export {router as UserRoute}