
import { UserEntity } from "../entities/user.entity";
export class UserMaper{
static fromEntity(object:{[key:string]:any}):UserEntity{

    const{id,name,email,password,role,img }=object;
    if (!id) throw Error('error');
    if (!name) throw Error('error');
    if (!email) throw Error('error');
    if (!password) throw Error('error');
    if (!role) throw Error('error');
    if (!img) throw Error('error');
    return new UserEntity(id,name,email,password,role,img);

}

}