import express, {request, response} from "express";
import dba from '../services/activityService.js';
import { validationResult } from "express-validator";

const router = express.Router();

router.post('/', [], async (request, response) => {

    const {activity} = request.body;

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({message: errors.array()});
    }

    try{
        await dba.InsertActivity(activity)
        response.status(201).json()
    }catch(err){
        response.status(500).json({message: `Encontramos um erro ${err}`})
    }
})

export default router;