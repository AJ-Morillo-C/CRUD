import { promises } from "dns";
import { PaginationDto } from '../../domain/dtos/pagination/pagination.dto';
import { CreateDocentDto } from "../../domain/dtos/docent/create-docent.dto";
import { DocentEntity } from "../../domain/entities/docent.entity";
import { DocentModel } from "../../database/mongodb/models/docent.model";
import { DocentMaper } from "../../domain/mapers/docent.mapers";
import { UpdateDocentDto } from "../../domain/dtos/docent/update-docent.dto";

export class DocentService {
  async create(createDocentDto: CreateDocentDto): Promise<DocentEntity> {
    const {name}= createDocentDto;
    try {
      const exist = await DocentModel.findOne({ name });
      if (exist) throw Error("error");
      const docent = await DocentModel.create(createDocentDto);
      if (!docent) throw Error("error");
      await docent.save();
      return DocentMaper.fromEntity(docent);
    } catch (error) {
        throw error;
    }
}

async update(updateDocentDto:UpdateDocentDto, id:string):Promise<DocentEntity>{
  try {
      const docent = await DocentModel.findByIdAndUpdate({id}, {...updateDocentDto});
      if(!docent) throw Error('Error')
      await docent.save();
      return DocentMaper.fromEntity(docent);

  } catch (error) {
      throw error; 
  }
}

 
async delete(id:string):Promise<DocentEntity>{
  try {
      const docent = await DocentModel.findOneAndDelete({id});
      if(!docent) throw Error('Error')
      return DocentMaper.fromEntity(docent);

  } catch (error) {
      throw error; 
  }
}
async findOne(id:string):Promise<DocentEntity>{
  try {
      const docent = await DocentModel.findOne({id});
      if(!docent) throw Error('Error')
      return DocentMaper.fromEntity(docent);

  } catch (error) {
      throw error; 
  }
}
async findAll(paginationDto: PaginationDto):Promise<DocentEntity[]>{
  const { offset, limit } = paginationDto;
  try {
    const docents = await DocentModel.find({}).skip( offset ).limit(limit);
      
      return docents.map(docent => DocentMaper.fromEntity(docent));
  } catch (error) {
      throw error; 
  }
}
}


