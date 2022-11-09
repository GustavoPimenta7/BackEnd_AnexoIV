import express from "express";
import user from './controllers/userController.js';
import spare from './controllers/spareController.js';
import course from './controllers/courseController.js';
import typespare from './controllers/typespareController.js';
import classes from './controllers/classesController.js';
import reason from './controllers/reasonController.js';
import period from './controllers/periodController.js';
import block from './controllers/blockController.js';
import login from './controllers/loginController.js';
import activity from './controllers/activityController.js';
import {verifyJWT}  from './middlewares/jwt.js';
import spareget from './controllers/sparegetController.js';
import plano from './controllers/numberPlanController.js';



const router = express.Router();

router.use('/user', user);
router.use('/login', login, verifyJWT);
router.use('/spare', spare); 
router.use('/course', course); 
router.use('/typespare', typespare);
router.use('/classes', classes);
router.use('/reasonSE', reason);
router.use('/period', period);
router.use('/block', block);
router.use('/activity', activity);
router.use('/spareget', spareget);
router.use('/plano', plano);



export default router;