import express, {request, response} from "express";
import dbss from '../services/sparegetService.js';
import { validationResult } from "express-validator";


const router = express.Router();


router.post('/', async (request, response) => {

    const {Course} = request.body;
  
      try{
      const results = await dbss.GetSpare(Course);
    
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