import { Request, Response } from "express";
import { Validators } from '../../config/validator'
import { PaginationDto } from "../../domain/dtos/pagination/pagination.dto";
import { DocentService } from '../services/docent.service';
import { CreateDocentDto } from "../../domain/dtos/docent/create-docent.dto";
import { UpdateDocentDto } from "../../domain/dtos/docent/update-docent.dto";

export class DocentController {
  constructor(private readonly docentService: DocentService) {}
  create = (req: Request, res: Response) => {
    const [error, createDocent] = CreateDocentDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.docentService.create(createDocent!)
    .then(docent => res.json(docent))
    .catch(error => res.status(500).json(error));
  };

  update = (req:Request, res:Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    const [error, updateDocentDto] = UpdateDocentDto.update(req.body)
    if(error) return res.status(400).json({error})
    this.docentService.update(updateDocentDto!, id!)
    .then(docent => res.json(docent))
    .catch(error => res.status(500).json(error))
 };

  delete = (req:Request, res:Response) => {
  const id = req.params.id
  if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
  this.docentService.delete(id!)
  .then(docent => res.json(docent))
  .catch(error => res.status(500).json(error))
  };


  findAll = (req: Request, res: Response) => {
    const [error, paginationDto] = PaginationDto.create(req.query);
    if( error ) return res.status(400).json({error});

    this.docentService.findAll( paginationDto! )
    .then(docents => res.json(docents))
    .catch(error => res.status(500).json(error));
  };

  findOne = (req: Request, res: Response) => {
  const id = req.params.id
  if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    this.docentService.findOne(id!)
    .then(docent => res.json(docent))
    .catch(error => res.status(500).json(error))  
  };
}
