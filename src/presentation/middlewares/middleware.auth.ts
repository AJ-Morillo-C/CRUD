import {Request, Response, NextFunction} from 'express'
import { JwtAdapter } from '../../config/jwt.adapter';
import { UserModel } from '../../database/mongodb/models/user.models';
export class AuthMiddleware{
static async validateJWT(req:Request,res:Response,next:NextFunction){
    const autorization= req.headers.autorization as string;
    if(!autorization) return res.status(400).json({error:'invalid token'});
    if(!autorization.startsWith('Bearer ')) return res.status(400).json({error:'invalid token'});
    const token = autorization.split("  ").at(1)|| "";
    if(!token) return res.status(400).json({error:'invalid token'});
    const payload = await JwtAdapter.validateToken<{id:string}>(token);
    if(!payload) return res.status(400).json({error:'invalid token'});
    const user = await UserModel.findOne({_id:payload.id});
    if(!user) return res.status(400).json({error:'invalid token'});
    req.body.user=user;
    next();
}
}