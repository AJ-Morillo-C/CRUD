export class UpdateDocentDto{
    constructor(
        public name?:string,
        public email?:string,
        public gender?:string,
        public address?:string,
        public profession?:string,
    ){}
  
    static update(object:{[key:string]:any}):[string?, UpdateDocentDto?]{
        const {name, email, gender, address, profession} = object
        return [undefined, new UpdateDocentDto(name, email, gender, address, profession)]
    }
  }