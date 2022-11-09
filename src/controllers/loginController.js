import express, {request, response} from "express";
import dblogin from '../services/loginService.js';
import {generateToken} from '../helpers/userFeatures.js';

const router = express.Router();

router.post('/', [], async (request, response) => {

const {Email_User, User_Password} = request.body;

try{
    const results = await dblogin.Login(Email_User, User_Password)

    if(results.length > 0){
        const {Email_User, User_Password} = results[0];
        const token = generateToken(Email_User, User_Password);
        response.status(200).send({message: 'Login efetuado com sucesso', token});
    }else{
        response.status(400).send({message: 'Login incorreto'})
    }

}catch(err){
        response.status(500).json({message: `Encontramos um erro: ${err}`})
    }
})

export default router;