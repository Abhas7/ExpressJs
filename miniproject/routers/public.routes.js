import { Router } from "express";
import { generateToken } from "../utils/token.utils";


const router = Router();


router.get('/geneeate-token', (req,res) =>{

    const token  = token;

    res.status(200).json({
        message: "Token generated successfully",
        data: generateToken()


  })

})



router.get('/geneeate-token', (req,res) =>{

   

    res.status(200).json({
        message: "Welcome to home page",
        


  })

})



export default router;