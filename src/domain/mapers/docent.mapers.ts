import { errorMonitor } from "events";
import { DocentEntity } from "../entities/docent.entity"
export class DocentMaper{
static fromEntity(object:{[key:string]:any}):DocentEntity{

    const{id,name, email, gender, address, profession}=object;
    if (!name) throw Error('error');
    if (!email) throw Error('error');
    if (!gender) throw Error('error');
    if (!address) throw Error('error');
    if (!profession) throw Error('error');
    return new DocentEntity(id,name, email, gender, address, profession)

}

}