import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movement } from './schemas/movement.schema';
import { Model } from 'mongoose';

@Injectable()
export class MovementsService {

  constructor(
    @InjectModel(Movement.name) private readonly movementModel: Model<Movement>
  ) { }

  /**
   * Método que guarda en base de datos un movimiento de inventario
   * @param createMovementDto 
   * @returns {Movement}
   */
  async create(createMovementDto: CreateMovementDto): Promise<Movement> {
    const newMovement = new this.movementModel(createMovementDto);
    return await newMovement.save();
  }

  findAll() {
    return `This action returns all movements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movement`;
  }

  update(id: number, updateMovementDto: UpdateMovementDto) {
    return `This action updates a #${id} movement`;
  }

  remove(id: number) {
    return `This action removes a #${id} movement`;
  }
}
