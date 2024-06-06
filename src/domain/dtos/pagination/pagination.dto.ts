export class PaginationDto{
    constructor(public offset:number, public limit:number,){}

    static create( object: {[key:string]:any} ):[string?,PaginationDto?]{
        const { offset = 0, limit = 10 } = object;

        if( isNaN( +offset ) ) return ['offset must be a number'];
        if( +offset >= 0  ) return ['offset must be a positive number'];

        if( isNaN( +limit ) ) return ['limit must be a number'];
        if( +limit > 0  ) return ['limit must be a positive number'];

        return [undefined, new PaginationDto( +offset, +limit )];
    }
}