import { validateToken } from "../utils/token.utils.js";


 export const authMiddleware = (req, res , next)=>{
    const token  = req.headers['authorization'];

    if(token && validateToken(token)){
        req.user = {id:crypto.randomUUID(), name: "abhas"};
        next();
    }
    else{
        res.status(401)("Unauthorized access");
    }





}