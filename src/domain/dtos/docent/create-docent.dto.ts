export class CreateDocentDto {
    constructor( 
        public name:string,
        public email:string,
        public gender:string,
        public address:string,
        public profession:string,) {}
    static create (object:{[key:string]:any}):[string?,CreateDocentDto?]{

const{name, email, gender, address, profession}=object;

if(!name) return ['name is required ',undefined];
if(!email) return ['email is required ',undefined];
if(!gender) return ['gender is required ',undefined];
if(!address) return ['address is required ',undefined];
if(!profession) return ['profession is required ',undefined];
return[undefined,new CreateDocentDto(name, email, gender, address, profession)] 

    }
}