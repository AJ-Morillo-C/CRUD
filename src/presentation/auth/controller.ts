import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { RegisterDto } from "../../domain/dtos/auth/register_user.dto";
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    create = (req: Request, res: Response) => {
      const [error, registerDto] = RegisterDto.create(req.body);
      if (error) return res.status(400).json({ error });
      this.authService.register(registerDto!)
      .then(category => res.json(category))
      .catch(error => res.status(500).json(error));
    };

    findOne = (req: Request, res: Response) => {
        const email = req.body.email
        if(!email) throw Error('email is not valid')
          this.authService.login(email!)
          .then(login => res.json(login))
          .catch(error => res.status(500).json(error))  
        };

}    