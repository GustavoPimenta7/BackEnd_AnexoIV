import express, {request, response} from "express";
import dbs from '../services/spareService.js'
import { validationResult } from "express-validator";

const router = express.Router();

router.post('/', [], async (request,response) => {

    const {Number_Spare, Date_Spare, Date_Fill,Type_Spare, Reason, Course, Semester, Period, Name_Teachers, Name_Spare, Name_component, Hour_Start, Hour_End, Block_, Aditional, Activity} = request.body;

    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({message: errors.array()});
    }

    try{
        await dbs.InsertSpare(Number_Spare, Date_Spare, Date_Fill,Type_Spare, Reason, Course, Semester, Period, Name_Teachers, Name_Spare, Name_component, Hour_Start, Hour_End, Block_, Aditional, Activity);
        response.status(201).json();
    }catch(err){
        response.status(500).json({message: `Encontramos um erro ${err}`})
    }

});

router.get('/', async (request, response) => {

    try{
    const results = await dbs.GetSpare();
  
    if (results.length == 0){
      response.status(204).end();
    }else{
      response.status(200).json(results);
    }
  
    }catch(err){
  
     response.status(500).json({message: `Encontramos um erro: ${err}`});
     
    }
  
  });




export default router;