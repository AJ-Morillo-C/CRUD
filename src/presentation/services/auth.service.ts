import { promises } from "dns";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto"; 
import { UserEntity } from "../../domain/entities/user.entity";
import { UserModel } from "../../database/mongodb/models/user.model";
import { UserMaper } from "../../domain/mapers/user.mapers";

export class UserService {
  async register (registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name,email,password }= registerUserDto;
    try {
      const exist = await UserModel.create({name,email,password});
      const registerUser = await UserModel.create(registerUserDto);
      if (!registerUser) throw Error("error");
      await registerUser.save();
      return UserMaper.fromEntity(registerUser);
    } catch (error) {
        throw error;
        }
    }

}