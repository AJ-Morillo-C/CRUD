import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    register = (req: Request, res: Response) => {
      const [error, registerUserDto] = RegisterUserDto.create(req.body);
      if (error) return res.status(400).json({ error });
      
      this.authService.register(registerUserDto!)
      .then(user => res.json(user))
      .catch(error => res.status(500).json(error));
    };

    login = (req: Request, res: Response) => {
        const [error, loginUserDto] = LoginUserDto.create(req.body);
        if(error) return res.status(400).json({error});

          this.authService.login(loginUserDto!)
          .then(login => res.json(login))
          .catch(error => res.status(500).json(error))  
        };

}    