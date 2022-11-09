import express, {request, response} from "express";
import dbnp from '../services/numberPlanService.js';
import { validationResult } from "express-validator";


const router = express.Router();


router.post('/', async (request, response) => {

    const {Number_Spare, Course} = request.body;
  
      try{
      const results = await dbnp.GetPlano(Number_Spare, Course);
    
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