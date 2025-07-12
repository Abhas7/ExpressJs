import crypto from 'crypto';


export const generateToken = () => {
    return crypto.randomBytes(16).toString('hex');

}

export const token = generateToken();

export const validation = (token)=>{
    return token.length === 32;
}
