export class UpdateProductDto{
    constructor(
        public name?:string,
        public description?:string,
        public img?:string,
        public category?:string,
        public price?:string
    ){}
  
    static update(object:{[key:string]:any}):[string?, UpdateProductDto?]{
        const {name, description, img, category, price} = object
        return [undefined, new UpdateProductDto(name, description, img, category, price)]
    }
  }