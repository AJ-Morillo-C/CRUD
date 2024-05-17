export class PaginationDto{
    constructor(
        public offset:number,
        public limit:number,
        public pages:number,
        public total:number,    
    ){}
  
    static paginate(object:{[key:string]:any}):[string?, PaginationDto?]{

        const { offset, limit, pages, total } = object
        if(!offset) return ['offset is required',undefined]
        if(!offset || offset < 0) return ['offset must be greater than 0',undefined]
        if(!limit) return ['limit is required',undefined]
        if(!limit || limit < 0) return ['limit must be greater than 0',undefined]
        if(!pages) return ['pages is required',undefined]
        if(!total) return ['total is required',undefined]

        return [undefined, new PaginationDto( offset, limit, pages, total )]
    }
  }